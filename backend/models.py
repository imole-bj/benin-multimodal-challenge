from pydantic import BaseModel

class TranscribeData(BaseModel):
    data: str
    language: str

class TranscribeResponse(BaseModel):
    text: str
    language: str
    
class TranslateData(BaseModel):
    text: str
    src_language: str
    dest_language: str