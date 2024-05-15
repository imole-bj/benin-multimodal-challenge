from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.responses import FileResponse
from starlette.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
import asyncio

import models

from transcribe import transcribe
import sys

import base64
import tempfile
import os
from datetime import timedelta, datetime

from dotenv import load_dotenv

load_dotenv()

version = f"{sys.version_info.major}.{sys.version_info.minor}"

app = FastAPI(title="Dokoun")

UPLOAD_DIRECTORY = "./tmp_uploads"
OUTPUT_DIRECTORY = "./outputs"

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

@app.get("/")
async def read_root():
    message = f"Hello world! From FastAPI running on Uvicorn with Gunicorn. Using Python {version}"
    return {"message": message}


@app.post("/transcribe/")
async def speech2text(data: models.TranscribeData):
    try:
        # Decode the base64 string
        audio_bytes = base64.b64decode(data.data)
        
        # Create a temporary file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav", dir='./temp_dir/') as tmp:
            tmp.write(audio_bytes)
            tmp_path = tmp.name
            
        
        transcribed_text = transcribe(tmp_path, language=data.language)

        # Schedule deletion of the file after 20 minutes
        deletion_time = datetime.now() + timedelta(minutes=20)
        await schedule_deletion(tmp_path, deletion_time)

        return {"transcribed_text": transcribed_text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def schedule_deletion(file_path, deletion_time):
    # Wait until it is time to delete the file
    await asyncio.sleep((deletion_time - datetime.now()).total_seconds())
    if os.path.exists(file_path):
        os.remove(file_path)


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
            dubbed_video_path = ""
            
            return FileResponse(dubbed_video_path, media_type="video/mp4", filename=dubbed_video_path)
        except Exception as e:
            return JSONResponse(status_code=500, content={"error": str(e)})

@app.post("/speech2speech/")
async def speech_to_speech(file: UploadFile = File(...), src_lang: str = "fo", dest_lang: str = "yo"):
    try:
        file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
        with open(file_location, "wb") as f:
            f.write(file.file.read())
            
        # Handle speech2speech here
        final_speech = ""
        
        return FileResponse(final_speech, media_type="audio/mpeg", filename=final_speech)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
