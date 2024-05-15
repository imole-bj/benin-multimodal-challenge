from speechbrain.inference.ASR import EncoderASR
from torch import cuda
from typing import Union
import whisper

import os
import numpy as np
from datetime import timedelta

from elevenlabs import Voice, VoiceSettings, play, save
from elevenlabs.client import ElevenLabs

from moviepy.editor import VideoFileClip

import datetime

import sys

from transformers import AutoProcessor, WhisperForConditionalGeneration, VitsModel, AutoTokenizer

import re
from datetime import timedelta

from openai import OpenAI
import scipy

import subprocess
import torch
import tempfile
from pydub import AudioSegment

from gtts import gTTS

device = "cuda" if cuda.is_available() else "cpu"

class Transcriber:
    def __init__(self, language:str) -> None:
        self.language = language
        

class OthersLanguageTranscriber(Transcriber):
    def __init__(self, model="whisper-1") -> None:
        self.model = model
        
class BeninLanguageTranscriber(Transcriber):
    def __init__(self, language:str,) -> None:
        super().__init__(language)
        
class FonLanguageTranscriber(BeninLanguageTranscriber):
    
    def __init__(self) -> None:
        self.model = EncoderASR.from_hparams(
    source="speechbrain/asr-wav2vec2-dvoice-fongbe",
    savedir=f"pretrained_models/{"speechbrain/asr-wav2vec2-dvoice-fongbe".split('/')[-1]}",
    run_opts={"device":device})
        
        
    def transcribe(self, filepath:str):
        trans_fon = self.model.transcribe_file(filepath)
    
        return trans_fon
        
        
class YorubaLanguageTranscriber(BeninLanguageTranscriber):
    def __init__(self) -> None:
        self.model = whisper.load_model("small")
        self.finetune_model = WhisperForConditionalGeneration.from_pretrained("steja/whisper-small-yoruba")
        #self.speakermodel = VitsModel.from_pretrained("facebook/mms-tts-yor")
        #self.tokenizer = AutoTokenizer.from_pretrained("facebook/mms-tts-yor")
        self.voice_id = "NoHwHmWTEahCvsFm5shT"
        self.model = ElevenLabs()
        
    #fonction mapping dict
    def rename_keys(s_dict):

        WHISPER_MAPPING = {
        "encoder.ln_post.weight": "encoder.layer_norm.weight", # added by ax
        "encoder.ln_post.bias": "encoder.layer_norm.bias", # added by ax
        "blocks": "layers",
        "mlp.0": "fc1",
        "mlp.2": "fc2",
        "mlp_ln": "final_layer_norm",
        ".attn.query": ".self_attn.q_proj",
        ".attn.key": ".self_attn.k_proj",
        ".attn.value": ".self_attn.v_proj",
        ".attn_ln": ".self_attn_layer_norm",
        ".attn.out": ".self_attn.out_proj",
        ".cross_attn.query": ".encoder_attn.q_proj",
        ".cross_attn.key": ".encoder_attn.k_proj",
        ".cross_attn.value": ".encoder_attn.v_proj",
        ".cross_attn_ln": ".encoder_attn_layer_norm",
        ".cross_attn.out": ".encoder_attn.out_proj",
        "decoder.ln.": "decoder.layer_norm.",
        "encoder.ln.": "encoder.layer_norm.",
        "token_embedding": "embed_tokens",
        "encoder.positional_embedding": "encoder.embed_positions.weight",
        "decoder.positional_embedding": "decoder.embed_positions.weight",
        #"ln_post": "layer_norm", # disabled by ax
    }

        keys = list(s_dict.keys())
        for key in keys:
            new_key = key
            for v, k in WHISPER_MAPPING.items():
                if k in key:
                    new_key = new_key.replace(k, v)

            print(f"{key} -> {new_key}")

            s_dict[new_key] = s_dict.pop(key)
            
        return s_dict
    
    #fonction transcribe yoruba
    def transcription_yoruba(self, input_file_path, lang):
        """
        Transcribe a video using Whisper.

        Args:
            input_file (str): Path to the video (WAV file).
        return:
            result (dict): Dictionary containing the transcription results.
            complet_chain (str): A string containing the completed transcription chain.
        """
        #model.transcribe("/content/ren_frr.mp4", language="fr", verbose=False)


        if lang == 'yo':
            
            state_dict = self.finetune_model.model.state_dict()
            self.rename_keys(state_dict)
            #model = whisper.load_model("small")
            missing, unexpected = self.model.load_state_dict(state_dict, strict = False)
            if len(missing):
                print("Weight name not found", missing)
                raise

            result = self.model.transcribe(input_file_path, verbose=False)

        elif lang == 'fr':
            result= self.model.transcribe(input_file_path, language="fr", verbose=False)

        elif lang == 'en':
            result = self.model.transcribe(input_file_path, language="en", verbose=False)

        complet_chain = "\n".join(s['text'] for s in result["segments"])

        return result, complet_chain, lang
    
    def generate_sound_yoruba(self, text):
        
        audio = self.model.generate(
        text=text,
        voice=Voice(
            voice_id=self.voice_id,
            settings=VoiceSettings(stability=0.9, similarity_boost=0.9, style=0.0, use_speaker_boost=True)
        )
        )
        
        save(audio, "./outputs/trans.mp3")
        
        return "./outputs/trans.mp3"
    
    def generate_audio_segment(self, result, liste_phrases, langa):

        sidx = 0
        segments = []
        start_times = []

        for s, i in zip(result["segments"], liste_phrases):
            sidx += 1
            start = s['start'] * 1000
            end = s['end'] * 1000
            startTime = ms_to_time_string(ms=start)
            endTime = ms_to_time_string(ms=end)
            if langa == 'fr' or langa == 'en':
                myobj = gTTS(text=i, lang=langa, slow=False)
                with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
                    tmpname = tmp.name
                    myobj.save(tmpname)
                    audio_data = AudioSegment.from_file(tmpname, format="mp3")
            #print(startTime)
            elif langa == 'yo':
                
                audio = self.generate_sound_yoruba(i)
                
                audio_data = AudioSegment.from_file(audio, format="mp3")

            segments.append(audio_data)
            start_times.append(startTime)

        return segments, start_times

        
class DendiLanguageTranscriber(BeninLanguageTranscriber):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language, model)


#fon_transcriber = FonLanguageTranscriber("Fon")
#yoruba_transcriber = YorubaLanguageTranscriber("Yoruba")
#dendi_transcriber = DendiLanguageTranscriber("Dendi")
#others_transcriber = OthersLanguageTranscriber()


def get_gpt4_json_response(prompt):
    
    
    client = OpenAI(
    api_key=os.environ["OPENAI_API_KEY"],
    )
    
    

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
        {
            "role": "user",
            "content": prompt,
        }
    ],
        #response_format={"type": "json_object"}
    )
    
    return response.choices[0].message.content


def generate_prompt_phrase(lang_source, lang_target, doc):

    prompt = f'''

    Traduit moi chacune des phrases du {lang_source} vers le {lang_target} :
    {doc}
    renvoie uniquement les phrases traduite et numérote les.
    exemple: 1. phrase1
             2. phrase2
             '''
             
    return prompt



def generate_prompt_text(lang_source, lang_target, texte):

    prompt =    f'''

    Traduit moi cet texte du {lang_source} vers le {lang_target} :
    {texte}
    renvoie uniquement le texte traduit.

   '''

    return prompt


def translate_gpt(lang_source, lang_target, doc):

    dico_lang = dict([('fr', 'français'), ('yo', 'yoruba'), ('en', 'anglais'), ('den', 'dendi'), ('fon', 'fongbe')])
    lang_source = dico_lang[lang_source]
    lang_target = dico_lang[lang_target]

    prompt = generate_prompt_text(lang_source, lang_target, doc)
    response = get_gpt4_json_response(prompt)


    return response



def translate_gpt_phrase(lang_source, lang_target, doc):

    dico_lang = dict([('fr', 'français'), ('yo', 'yoruba'), ('en', 'anglais'), ('den', 'dendi')])
    lang_source = dico_lang[lang_source]
    lang_target = dico_lang[lang_target]

    prompt = generate_prompt_phrase(lang_source, lang_target, doc)
    response = get_gpt4_json_response(prompt)

    response_modif = re.sub(r'\d+\.', '', response)
    liste_phrases =  response_modif.split('\n')
    
    return liste_phrases

def ms_to_time_string(*, ms=0, seconds=None):
    # Calculate hours, minutes, seconds and milliseconds
    if seconds is None:
        td = timedelta(milliseconds=ms)
    else:
        td = timedelta(seconds=seconds)
    hours, remainder = divmod(td.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    milliseconds = td.microseconds // 1000

    time_string = f"{hours}:{minutes}:{seconds},{milliseconds}"
    return format_time(time_string, ',')




def format_time(s_time="", separate=','):
    if not s_time.strip():
        return f'00:00:00{separate}000'
    s_time = s_time.strip()
    hou, min, sec = "00", "00", f"00{separate}000"
    tmp = s_time.split(':')
    if len(tmp) >= 3:
        hou = tmp[-3].strip()
        min = tmp[-2].strip()
        sec = tmp[-1].strip()
    elif len(tmp) == 2:
        min = tmp[0].strip()
        sec = tmp[1].strip()
    elif len(tmp) == 1:
        sec = tmp[0].strip()

    if re.search(r',|\.', str(sec)):
        sec, ms = re.split(r',|\.', str(sec))
        sec = sec.strip()
        ms = ms.strip()
    else:
        ms = '000'
    hou = hou if hou != "" else "00"
    if len(hou) < 2:
        hou = f'0{hou}'
    hou = hou[-2:]

    min = min if min != "" else "00"
    if len(min) < 2:
        min = f'0{min}'
    min = min[-2:]

    sec = sec if sec != "" else "00"
    if len(sec) < 2:
        sec = f'0{sec}'
    sec = sec[-2:]

    ms_len = len(ms)
    if ms_len < 3:
        for i in range(3 - ms_len):
            ms = f'0{ms}'
    ms = ms[-3:]
    return f"{hou}:{min}:{sec}{separate}{ms}"



# Ecrire les sous titre dans un fichier
def generate_subtitles_raw(result, liste_phrases):

    """
    return -->  [{'line': 1,
        'time': '00:00:00,000 --> 00:00:15,320',
        'text': 'Protégez-vous contre le COVID-19'},
    {'line': 2,
        'time': '00:00:15,440 --> 00:00:20,320',
        'text': 'Renvoyez votre message ci-dessous sur le COVID-19'}
        ]
    """
    raw_subtitles = []
    sidx = -1
    #liste_phrases = tt_modifie.split('\n')
    for s, i in zip(result["segments"], liste_phrases):
        # for segment in result["segments"]



        sidx += 1
        #start = int(segment.words[0].start * 1000)
        #end = int(segment.words[-1].end * 1000)
        start = s['start']* 1000
        end = s['end']* 1000
        # if start == end:
        #     end += 200
        startTime = ms_to_time_string(ms=start)
        endTime = ms_to_time_string(ms=end)
        text = i.strip().replace('&#39;', "'")
        text = re.sub(r'&#\d+;', '', text)
        # No valid characters
        if not text or re.match(r'^[，。、？‘’“”；：（｛｝【】）:;"\'\s \d`!@#$%^&*()_+=.,?/\\-]*$', text) or len(text) <= 1:
            continue
        # Original language subtitles
        s = {"line": len(raw_subtitles) + 1, "time": f"{startTime} --> {endTime}", "text": text}
        raw_subtitles.append(s)

    
    return raw_subtitles



#inserer les sous titre dans la video original
def integrer_sous_titres(source_mp4_path, sous_nom, langue_sous_titres):
    """
    Intègre un fichier de sous-titres dans une vidéo MP4 en utilisant ffmpeg.

    Args:
        source_mp4: Chemin vers le fichier vidéo MP4 source.
        sous_nom: Chemin vers le fichier de sous-titres.
        target_mp4: Chemin vers le fichier MP4 de sortie.
        langue_sous_titres: Code de langue des sous-titres (ex: "fra").
    """

    if isinstance(source_mp4_path, str):
        target_mp4_path = source_mp4_path.split('.')[0].lower() + "_video_avec_sous_titres.mp4"

    commande = [
        "ffmpeg",
        "-y",
        "-i", source_mp4_path,
        "-i", sous_nom,
        "-c", "copy",
        "-c:s", "mov_text",
        "-metadata:s:s:0", f"langue={langue_sous_titres}",
        target_mp4_path
    ]

    subprocess.run(commande)
    #target_mp4_path = source_mp4_path

    return target_mp4_path


def runffprobe(cmd):
    # cmd[-1] = os.path.normpath(cmd[-1])
    try:
        p = subprocess.run( cmd if isinstance(cmd,str) else ['ffprobe'] + cmd,
                           stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE,
                           encoding="utf-8",
                           text=True,
                           check=True,
                           creationflags=0 if sys.platform != 'win32' else subprocess.CREATE_NO_WINDOW)
        if p.stdout:
            return p.stdout.strip()
        raise Exception(str(p.stderr))
    except subprocess.CalledProcessError as e:
        msg = f'ffprobe error:{str(e.stdout)},{str(e.stderr)}'
        msg = msg.replace('\n', ' ')
        raise Exception(msg)
    except Exception as e:
        raise Exception(f'ffprobe except:{str(e)}')
    

def convert_to_milliseconds(time_str):
    """Convertit une chaîne de caractères "HH:MM:SS,mmm" en millisecondes."""
    time_obj = datetime.datetime.strptime(time_str, "%H:%M:%S,%f")
    milliseconds = int((time_obj.hour * 3600 + time_obj.minute * 60 + time_obj.second) * 1000 + time_obj.microsecond / 1000)
    return milliseconds

# Merge audio segments
def merge_audio_segments(segments, start_times, total_duration, mp4name):
    # Create an empty audio segment as the initial segment
    merged_audio = AudioSegment.empty()
    start_times_ms = [convert_to_milliseconds(time_str) if isinstance(time_str, str) else time_str for time_str in start_times]
    print(start_times_ms )
    # Check if silence needs to be added before the first segment
    if start_times_ms[0]!= 0:
        silence_duration = start_times_ms[0]
        silence = AudioSegment.silent(duration=silence_duration)
        merged_audio += silence

    # Concatenate audio segments one by one
    for i in range(len(segments)):
        segment = segments[i]
        start_time = start_times_ms[i]

        # Check if there is a gap between the end time of the previous segment and the start time of the current segment
        if i > 0:
            previous_end_time = start_times_ms[i - 1] + segments[i - 1].duration_seconds * 1000
            silence_duration = start_times_ms[i] - previous_end_time

            # There may be a mismatch between subtitles and voice
            if silence_duration > 0:
                silence = AudioSegment.silent(duration=silence_duration)
                merged_audio += silence
            print(silence_duration)

        # Concatenate the current segment
        merged_audio += segment

    # Check if the total duration exceeds the specified duration and discard the excess part
    if len(merged_audio) > total_duration:
        merged_audio = merged_audio[:total_duration]

    # Export the merged audio
    merged_audio.export(f"./tmp/{mp4name}.wav", format="wav")

    #return merged_audio
    return f"./tmp/{mp4name}.wav"



def delete_voice_video(input_file_path):
    """
    Supprime la piste audio d'une vidéo et enregistre la vidéo sans son.

    Args:
        input_file_path (str): Chemin d'accès au fichier vidéo d'entrée.

    Returns:
        str: Chemin d'accès au fichier vidéo de sortie sans son.
    """

    if isinstance(input_file_path, str):
        output_file_path = input_file_path.split('.')[0].lower() + "_novoice.mp4"

    # Construire la commande FFmpeg
    ffmpeg_command = [
        'ffmpeg',
        '-y',
        '-i', input_file_path,
        '-map', '0:v',  # Copier le flux vidéo
        '-c:v', 'copy',  # Copier le flux vidéo sans recodage
        '-an',  # Supprimer la piste audio
        output_file_path
    ]

    # Exécuter la commande FFmpeg
    process = subprocess.run(ffmpeg_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Afficher la sortie standard et la sortie d'erreur
    out = process.stdout
    err = process.stderr

    # Vérifier les erreurs
    if err:
        print(f"Erreur FFmpeg: {err.decode()}")
    else:
        print("Vidéo créée avec succès")

    return output_file_path





def merge_audio_video(video_file_path, audio_file_path):

    """
      ex:
      video_file = '/content/novoice.mp4'
      audio_file = '/content/tmp/ren_merge_audio.wav'
      output_file = '/content/voiceandvideo_1.mp4'
    """
    if isinstance(video_file_path, str):
      output_file_path = video_file_path.split('.')[0].lower() + "voice_and_video.mp4"

    # Construire la commande FFmpeg
    ffmpeg_command = [
      'ffmpeg',
      '-y',
      '-i', video_file_path,
      '-i', audio_file_path,
      '-c:v', 'copy', # Copier la vidéo
      '-c:a', 'aac', # Encoder l'audio en AAC
      '-map', '0:v:0',
      '-map', '1:a:0',
      output_file_path
    ]

    # Exécuter la commande FFmpeg et capturer la sortie d'erreur
    process = subprocess.run(ffmpeg_command, stderr=subprocess.PIPE)

    # Afficher la sortie d'erreur
    if process.returncode != 0:
        print(f"Erreur FFmpeg: {process.stderr.decode()}")
    else:
        print("Vidéo avec audio créée")
    #output_file_path = video_file_path


    return output_file_path



def get_video_duration(video_file):
    #video_file="/content/ren.mp4"
    # Charger le clip vidéo
    video = VideoFileClip(video_file)

    # Obtenir la durée totale en secondes
    duree_totale = video.duration

    # Convertir la durée totale en millisecondes

    return duree_totale * 1000


def write_srt_file(raw_subtitles, output_file_path ='./subtitles.srt'):

    """
    Ecrire les sous titre dans un fichier srt
    input : raw_subtitles, output_file_path (path/file.srt)

    """
    #output_file_path='./subtitles.srt'
    # Vérifier si le fichier existe déjà
    # Ouvrir le fichier SRT en mode écriture
    with open(output_file_path, 'w', encoding='utf-8') as file:
        # Initialiser le compteur de séquences de sous-titres
        sequence_number = 1

        # Parcourir la liste de données
        for item in raw_subtitles:
            # Formater le temps de début et de fin
            start_time, end_time = item['time'].split(' --> ')

            # Écrire la séquence de sous-titres dans le fichier
            file.write(f"{sequence_number}\n")
            file.write(f"{start_time} --> {end_time}\n")
            file.write(f"{item['text']}\n\n")

            # Incrémenter le compteur de séquences de sous-titres
            sequence_number += 1

    return output_file_path