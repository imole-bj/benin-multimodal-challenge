import { useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';


export default function ChatBox({audiox, setAudiox}){
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    {/*const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
  document.body.appendChild(audio);*/}
    setAudiox([...audiox, {from:"user", url:url},{from:"system", url:url}]);
  };

  return (
    <div className='d-flex justify-content-center bg-primary w-100 p-2 rounded'>
      <AudioRecorder 
      className=""
      showVisualizer="true"
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {/*<button onClick={recorderControls.stopRecording}>Stop recording</button>*/}
    </div>
  )
}