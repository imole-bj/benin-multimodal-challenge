from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
import uvicorn
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
import shutil

version = f"{sys.version_info.major}.{sys.version_info.minor}"

app = FastAPI(title="Dokoun")

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
            
        
        transcribed_text = transcribe(tmp_path)

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

