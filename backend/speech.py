import os
from elevenlabs import Voice, VoiceSettings, play, save
from elevenlabs.client import ElevenLabs

import tempfile
from datetime import timedelta, datetime


class Speaker:
    def __init__(self, language:str) -> None:
        self.language = None
        self.model = None
        self.voice_id = None

    def speak(self, text):
        pass

class FonSpeaker(Speaker):
    def __init__(self, language:str, model, voice_id="jMy9AeK2ICd0fEZFXdly") -> None:
        super().__init__(language, model)
        self.voice_id = voice_id
        self.model = ElevenLabs()
        self.phono = {
            'nɛ':'nin',
            'nɔ':'non',
            'mɛ': 'main',
            'wa':'a',
            'wo':'o',
            'ée': 'éé',
            'ti':'tti',
            'zi':'zzi',
            'yá':'a',
            'hɛ':'hin',
            'ɛ́ɛ': 'èè',
            'mɔ':'mon',
            'oɔ ':'o or ',
            'ε': 'è',
            'ě': 'é',
            ' e ': ' hé ',
            'ɔ': 'or',
            'ó': 'o',
            'j': 'dj',
            'e': 'é',
            'u': 'ou',
            'x': 'h',
            'ɔ́': 'or',
            'ú': 'ou',
            's': 'ss',
            'á': 'a',
            'c':'ch',
            'má':'man',
            'ú': 'ou',
            'ɛ́':'è',
            'ǐ':'i',
            'ɛ̌':'è',
            }
        
        
    def getFrenchPhoneme(self, text:str):
        
        for old, new in self.phono.items():
            text = text.replace(old, new)
        
        return text


    def speak(self, text):
        
        audio = self.client.generate(
        text=text,
        voice=Voice(
            voice_id=self.voice_id,
            settings=VoiceSettings(stability=0.9, similarity_boost=0.9, style=0.0, use_speaker_boost=True)
        )
        )
        
        save(audio, "trans.mp3")
        
        return "./trans.mp3"
        
        
    
class YorubaSpeaker(Speaker):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language)
        self.model = model

    def speak(self, text):
        pass
    
class DendiSpeaker(Speaker):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language)
        self.model = model

    def speak(self, text):
        pass
    
class OthersSpeaker(Speaker):
    def __init__(self, model:str) -> None:
        self.model = model

    def speak(self, text):
        pass