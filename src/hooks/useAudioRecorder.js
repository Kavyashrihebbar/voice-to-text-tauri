export async function startRecording(onDataAvailable) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();

  mediaRecorder.ondataavailable = (event) => {
    onDataAvailable(event.data);
  };

  return mediaRecorder;
}
