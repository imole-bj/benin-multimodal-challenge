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
