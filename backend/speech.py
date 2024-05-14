import os

class Speaker:
    def __init__(self, language:str) -> None:
        self.language = None

    def speak(self, text):
        pass

class FonSpeaker(Speaker):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language)
        self.model = model

    def speak(self, text):
        pass
    
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