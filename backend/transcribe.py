from speechbrain.inference.ASR import EncoderASR
from torch import cuda
from typing import Union


device = "cuda" if cuda.is_available() else "cpu"

class Transcriber:
    def __init__(self, language:str, model:str) -> None:
        self.language = language
        self.model = model
        

class OthersLanguageTranscriber(Transcriber):
    def __init__(self, model="whisper-1") -> None:
        self.model = model
        
class BeninLanguageTranscriber(Transcriber):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language, model)
        
class FonLanguageTranscriber(BeninLanguageTranscriber):
    
    def __init__(self, language:str, model="speechbrain/asr-wav2vec2-dvoice-fongbe") -> None:
        super().__init__(language, model)
        self.model = EncoderASR.from_hparams(
    source=model,
    savedir=f"pretrained_models/{model.split('/')[-1]}",
    run_opts={"device":device})
        
        
    def transcribe(self, filepath:str):
        trans_fon = self.model.transcribe_file(filepath)
    
        return trans_fon
        
        
class YorubaLanguageTranscriber(BeninLanguageTranscriber):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language, model)
        
class DendiLanguageTranscriber(BeninLanguageTranscriber):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language, model)


fon_transcriber = FonLanguageTranscriber("Fon")
yoruba_transcriber = YorubaLanguageTranscriber("Yoruba")
dendi_transcriber = DendiLanguageTranscriber("Dendi")
others_transcriber = OthersLanguageTranscriber()

def transcribe(filepath: str, language: str = None):
    transcribers = {
        "Fon": fon_transcriber,
        "Yoruba": yoruba_transcriber,
        "Dendi": dendi_transcriber,
        None: others_transcriber
    }
    transcriber = transcribers.get(language, others_transcriber)
    
    return transcriber.transcribe(filepath)
