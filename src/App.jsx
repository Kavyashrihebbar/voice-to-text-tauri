import { useState } from "react";
import { startRecording } from "./hooks/useAudioRecorder";
import { transcribeAudio } from "./services/deepgram";

function App() {
  // State to check whether recording is in progress
  const [recording, setRecording] = useState(false);

  // State to store the transcribed text
  const [text, setText] = useState("");

  // State to store the MediaRecorder instance
  const [recorder, setRecorder] = useState(null);

  // Function to start voice recording
  const start = async () => {
    // Update UI to show recording has started
    setRecording(true);

    // Start recording and receive audio data
    const mediaRecorder = await startRecording(async (audioBlob) => {
      try {
        // Send recorded audio to Deepgram for transcription
        const result = await transcribeAudio(audioBlob);

        // Update the UI with transcribed text
        setText(result);
      } catch (error) {
        // Handle errors during transcription
        console.error(error);
        alert("Transcription failed. Please try again.");
      }
    });

    // Save recorder instance to stop it later
    setRecorder(mediaRecorder);
  };

  // Function to stop voice recording
  const stop = () => {
    // Stop the MediaRecorder if it exists
    recorder?.stop();

    // Update UI to show recording has stopped
    setRecording(false);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* App heading */}
      <h2>Voice to Text App</h2>

      {/* Button to start and stop recording */}
      <button onMouseDown={start} onMouseUp={stop}>
        {recording ? "Recording..." : "Hold to Speak"}
      </button>

      <br /><br />

      {/* Text area to display transcribed text */}
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
