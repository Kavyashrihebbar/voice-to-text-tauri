// Function to start audio recording from the microphone
export async function startRecording(onDataAvailable) {
  // Request permission and get access to the user's microphone
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  // Create a MediaRecorder instance using the audio stream
  const mediaRecorder = new MediaRecorder(stream);

  // Start recording audio
  mediaRecorder.start();

  // This event fires whenever audio data is available
  mediaRecorder.ondataavailable = (event) => {
    // Send the recorded audio chunk to the callback function
    onDataAvailable(event.data);
  };

  // Return the MediaRecorder instance so it can be stopped later
  return mediaRecorder;
}
