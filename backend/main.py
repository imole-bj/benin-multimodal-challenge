from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.responses import FileResponse
from starlette.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
import asyncio

import models

#from transcribe import transcribe, YorubaLanguageTranscriber
from transcribe import *
from speech import *

import sys

import base64
import tempfile
import os
from datetime import timedelta, datetime

from dotenv import load_dotenv

from speech import *

load_dotenv()

version = f"{sys.version_info.major}.{sys.version_info.minor}"

app = FastAPI(title="Dokoun")

UPLOAD_DIRECTORY = "./tmp_uploads"
OUTPUT_DIRECTORY = "./outputs"

fonspeaker= FonSpeaker()
yorubaspeaker= YorubaSpeaker()
dendispeaker=DendiSpeaker()
othersspeaker = OthersSpeaker()

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)
    
if not os.path.exists(OUTPUT_DIRECTORY):
    os.makedirs(OUTPUT_DIRECTORY)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

yoruba = YorubaLanguageTranscriber()
fon = FonLanguageTranscriber()

@app.get("/")
async def read_root():
    message = f"Hello world! From FastAPI running on Uvicorn with Gunicorn. Using Python {version}"
    return {"message": message}


async def schedule_deletion(file_path, deletion_time):
    # Wait until it is time to delete the file
    await asyncio.sleep((deletion_time - datetime.now()).total_seconds())
    if os.path.exists(file_path):
        os.remove(file_path)


def dubbing_subtitle_video(input_file_video, source, target, langue_sous_titres):
    #extraire l'audio
    output_file_audio = convert_to_wav(input_file_video)
    file_audio_not_silence = remove_silence_from_end(output_file_audio)
    result, complet_chain = yoruba.transcription_yoruba(file_audio_not_silence, source)
    list_sentences = translate_gpt_phrase(source, target, complet_chain)
    raw_subtitles = generate_subtitles_raw(result, list_sentences)
    srt_file = write_srt_file(raw_subtitles)
    segments, start_times = yoruba.generate_audio_segment(result, list_sentences,target)
    video_duration = get_video_duration(input_file_video)
    merge_audios = merge_audio_segments(segments, start_times, video_duration, "merge_audio_segments")
    original_video_without_sound = delete_voice_video(input_file_video)
    video_dumbbing = merge_audio_video(original_video_without_sound, merge_audios)
    video_dumbbing_subtitle = integrer_sous_titres(video_dumbbing, srt_file, langue_sous_titres)

    return video_dumbbing_subtitle

def speech_to_speech(input_file_audio, source, target):
    """

    source = ['fr', 'yo', 'en', 'fon']"
    target = ['fr', 'yo', 'en', 'den', 'fon']
    """
    output_file_audio = convert_to_wav(input_file_audio)
    file_audio_not_silence = remove_silence_from_end(output_file_audio)
    if not source=="fon":
        result, complet_chain = yoruba.transcription_yoruba(file_audio_not_silence, source)
        
    else:
        result=fon.transcribe(file_audio_not_silence)
        
    text_translate = translate_gpt(source, target, result)
    
    if target=="fon":
        speech = fonspeaker.speak(text_translate)
    elif target=="yo":
        speech = yorubaspeaker.speak(text_translate)
    elif target=="den":
        speech = dendispeaker.speak(text_translate)
    else:
        speech = othersspeaker.speak(text_translate)
    
    return speech

@app.post("/translate/")
async def translate(data: models.TranslateData):
    pass

@app.post("/speak/")
async def speak(data: models.SpeechData):
    pass

@app.post("/dubbling")
async def dubbling(file: UploadFile = File(...), src_lang: str = "fo", dest_lang: str = "yo"):
        try:
            file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
            with open(file_location, "wb") as f:
                f.write(file.file.read())
                
            # Handle dubbling here
            dubbed_video_path = dubbing_subtitle_video(file_location,src_lang,dest_lang,dest_lang)
            
            return FileResponse(dubbed_video_path, media_type="video/mp4", filename=dubbed_video_path)
        except Exception as e:
            return JSONResponse(status_code=500, content={"error": str(e)})

@app.post("/speech2speech/")
async def speech_to_speech(file: UploadFile = File(...), src_lang: str = "fon", dest_lang: str = "yo"):
    try:
        file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
        with open(file_location, "wb") as f:
            f.write(file.file.read())
            
        # Handle speech2speech here
        final_speech = speech_to_speech(file_location, src_lang, dest_lang)
        
        return FileResponse(final_speech, media_type="audio/mpeg", filename=final_speech)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
