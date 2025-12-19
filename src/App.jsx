import { useState } from "react";
import { startRecording } from "./hooks/useAudioRecorder";
import { transcribeAudio } from "./services/deepgram";

function App() {
  const [recording, setRecording] = useState(false);
  const [text, setText] = useState("");
  const [recorder, setRecorder] = useState(null);

  const start = async () => {
    setRecording(true);

    const mediaRecorder = await startRecording(async (audioBlob) => {
      try {
        const result = await transcribeAudio(audioBlob);
        setText(result);
      } catch (error) {
        console.error(error);
        alert("Transcription failed. Please try again.");
      }
    });

    setRecorder(mediaRecorder);
  };

  const stop = () => {
    recorder?.stop();
    setRecording(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Voice to Text App</h2>

      <button onMouseDown={start} onMouseUp={stop}>
        {recording ? "Recording..." : "Hold to Speak"}
      </button>

      <br /><br />

      <textarea
        rows="5"
        cols="50"
        value={text}
        placeholder="Transcribed text will appear here..."
        readOnly
      />
    </div>
  );
}

export default App;
