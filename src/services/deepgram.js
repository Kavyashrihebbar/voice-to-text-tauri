// Deepgram API key used for authentication
const DEEPGRAM_API_KEY = "2b5f65103c9e1622d92ec4b6976483600aa681c2";

// Function to send recorded audio to Deepgram and get text output
export async function transcribeAudio(audioBlob) {

  // Send audio data to Deepgram Speech-to-Text API
  const response = await fetch(
    "https://api.deepgram.com/v1/listen?model=nova-2&language=en",
    {
      method: "POST", // HTTP method for sending data
      headers: {
        // Authorization header with API key
        "Authorization": `Token ${DEEPGRAM_API_KEY}`,
        // Audio format of the recorded file
        "Content-Type": "audio/webm"
      },
      // Recorded audio data
      body: audioBlob
    }
  );

  // Check if the API response is successful
  if (!response.ok) {
    throw new Error("Deepgram API error");
  }

  // Convert API response to JSON
  const data = await response.json();

  // Extract and return the transcribed text from the response
  return data.results.channels[0].alternatives[0].transcript;
}
