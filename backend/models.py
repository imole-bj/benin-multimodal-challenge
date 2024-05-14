from pydantic import BaseModel

class TranscribeData(BaseModel):
    data: str

class TranscribeResponse(BaseModel):
    text: str
    language: str