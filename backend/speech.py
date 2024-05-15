import os
from elevenlabs import Voice, VoiceSettings, play, save
from elevenlabs.client import ElevenLabs

import tempfile
from datetime import timedelta, datetime


class Speaker:
    def __init__(self, language:str) -> None:
        self.language = None
        self.model = None

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
        self.voice_id = voice_id
        
        
    def getFrenchPhoneme(self, text:str):
        
        for old, new in self.phono.items():
            text = text.replace(old, new)
        
        return text


    def speak(self, text):
        
        pn_text = self.getFrenchPhoneme(text)
        
        audio = self.model.generate(
        text=pn_text,
        voice=Voice(
            voice_id=self.voice_id,
            settings=VoiceSettings(stability=0.9, similarity_boost=0.9, style=0.0, use_speaker_boost=True)
        )
        )
        
        save(audio, "./outputs/trans.mp3")
        
        return "./outputs/trans.mp3"
        
        
    
class YorubaSpeaker(Speaker):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language)
        self.model = model

    def speak(self, text):
        pass
    
class DendiSpeaker(Speaker):
    def __init__(self, language:str, model, voice_id="UP1EujEcpLOHlLj5G0tb") -> None:
        super().__init__(language, model)
        self.voice_id = voice_id
        self.model = ElevenLabs()

    def speak(self, text):
        
        audio = self.model.generate(
        text=text,
        voice=Voice(
            voice_id=self.voice_id,
            settings=VoiceSettings(stability=0.9, similarity_boost=0.9, style=0.0, use_speaker_boost=True)
        )
        )
        
        save(audio, "./outputs/trans.mp3")
        
        return "./outputs/trans.mp3"
    
class OthersSpeaker(Speaker):
    def __init__(self, language:str, model:str) -> None:
        super().__init__(language, model)
        self.voice_id = "oWAxZDx7w5VEj9dCyTzz"
        self.model = ElevenLabs()

    def speak(self, text):
        
        audio = self.model.generate(
        text=text,
        voice=Voice(
            voice_id=self.voice_id,
            settings=VoiceSettings(stability=0.9, similarity_boost=0.9, style=0.0, use_speaker_boost=True)
        )
        )
        
        save(audio, "./outputs/trans.mp3")
        
        return "./outputs/trans.mp3"
    
    
    
def convert_to_wav(input_file_path):
  """
  Converts an audio file to WAV format.

  Args:
      input_file (str): Path to the input audio file.
      output_file (str): Path to the output WAV file.
  """
  if isinstance(input_file_path, str):
      output_file_path = input_file_path.split('.')[0].lower() + "_audio.wav"

  try:
      result = subprocess.run(
          ["ffmpeg", "-y", "-i", input_file_path, "-acodec", "pcm_s16le", output_file_path],
          capture_output=True,  # Capture la sortie standard et la sortie d'erreur
          text=True           # Décode la sortie en texte
      )
  except subprocess.CalledProcessError as e:
      print(f"Erreur ffmpeg: {e}")
      print(f"Sortie standard: {e.stdout}")
      print(f"Sortie d'erreur: {e.stderr}")
  else:
      print("Conversion réussie!")


  return output_file_path


def remove_silence_from_end(input_file_path, silence_threshold=-50.0, chunk_size=10, is_start=True):
    """
    Removes silence from the end of an audio file.

    :param input_file_path: path to the input mp3 file
    :param silence_threshold: the threshold in dBFS considered as silence
    :param chunk_size: the chunk size to use in silence detection (in milliseconds)
    :return: path to the output mp3 file without silence at the end
    """
    # Load the audio file
    format = "wav"
    if isinstance(input_file_path, str):
        format = input_file_path.split('.')[-1].lower()
        if format in ['wav', 'mp3','m4a']:
            audio = AudioSegment.from_file(input_file_path, format=format if format in ['wav','mp3'] else 'mp4')
        else:
            # Convert to mp3
            try:
                audio.export(input_file_path + ".mp3", format="mp3")
                input_file_path = input_file_path + ".mp3"
            except Exception as e:
                print("Error:", e)
                return input_file_path

    else:
        audio = input_file_path

    # Detect non-silent chunks
    nonsilent_chunks = detect_nonsilent(
        audio,
        min_silence_len=chunk_size,
        silence_thresh=silence_threshold
    )

    # If we have nonsilent chunks, get the start and end of the last nonsilent chunk
    if nonsilent_chunks:
        start_index, end_index = nonsilent_chunks[-1]
    else:
        # If the whole audio is silent, just return it as is
        return input_file_path

    # Remove the silence from the end by slicing the audio segment
    trimmed_audio = audio[:end_index]
    if is_start and nonsilent_chunks[0] and nonsilent_chunks[0][0] > 0:
        trimmed_audio = audio[nonsilent_chunks[0][0]:end_index]

    # Export the trimmed audio to mp3 format using ffmpeg-python
    output_file_path = input_file_path
    if isinstance(input_file_path, str):
        output_file_path = input_file_path.split('.')[0].lower() + "_trimmed.wav"
        (
            ffmpeg
            .input(input_file_path)
            .output(output_file_path, format='wav')
            .run()
        )
    return output_file_path