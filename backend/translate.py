from typing import Union

class Translator:
    def __init__(self, src_language:str, dest_language:str):
        self.src_language = src_language
        self.dest_language = dest_language
        
class BeninLanguagesTranslator(Translator):
    def __init__(self, src_language:str, dest_language:str):
        super().__init__(src_language, dest_language)

class FonYorubaTranslator(BeninLanguagesTranslator):
    def __init__(self):
        self.src_language = "Fon"
        self.dest_language = "Yoruba"
    
    def translate(self, text:str):
        pass
    
class YorubaFonTranslator(BeninLanguagesTranslator):
    def __init__(self):
        self.src_language = "Yoruba"
        self.dest_language = "Fon"
    
    def translate(self, text:str):
        pass

class FonDendiTranslator(BeninLanguagesTranslator):
    def __init__(self):
        self.src_language = "Fon"
        self.dest_language = "Dendi"
    
    def translate(self, text:str):
        pass
    
class DendiFonTranslator(BeninLanguagesTranslator):
    def __init__(self):
        self.src_language = "Dendi"
        self.dest_language = "Fon"
    
    def translate(self, text:str):
        pass
    
class YorubaDendiTranslator(BeninLanguagesTranslator):
    def __init__(self):
        self.src_language = "Yoruba"
        self.dest_language = "Dendi"
    
    def translate(self, text:str):
        pass
    
class YorubaFonTranslator(BeninLanguagesTranslator):
    def __init__(self):
        self.src_language = "Dendi"
        self.dest_language = "Yoruba"
    
    def translate(self, text:str):
        pass
    

class BeninOthersLanguagesTranslator(Translator):
    def __init__(self, src_language:str, dest_language:str, model:str):
        super().__init__(src_language, dest_language)
        self.model = model
        
class FonFrenchTranslator(BeninOthersLanguagesTranslator):
    def __init__(self):
        self.src_language = "Fon"
        self.dest_language = "French"
    
    def translate(self, text:str):
        pass
    
class FrenchFonTranslator(BeninOthersLanguagesTranslator):
    def __init__(self):
        self.src_language = "French"
        self.dest_language = "Fon"
    
    def translate(self, text:str):
        pass
    
class FonEnglishTranslator(BeninOthersLanguagesTranslator):
    def __init__(self):
        self.src_language = "Fon"
        self.dest_language = "English"
    
    def translate(self, text:str):
        pass
    
class EnglishFonTranslator(BeninOthersLanguagesTranslator):
    def __init__(self):
        self.src_language = "English"
        self.dest_language = "Fon"
    
    def translate(self, text:str):
        pass