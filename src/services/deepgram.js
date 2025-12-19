const DEEPGRAM_API_KEY = "2b5f65103c9e1622d92ec4b6976483600aa681c2";

export async function transcribeAudio(audioBlob) {
  const response = await fetch(
    "https://api.deepgram.com/v1/listen?model=nova-2&language=en",
    {
      method: "POST",
      headers: {
        "Authorization": `Token ${DEEPGRAM_API_KEY}`,
        "Content-Type": "audio/webm"
      },
      body: audioBlob
    }
  );

  if (!response.ok) {
    throw new Error("Deepgram API error");
  }

  const data = await response.json();

  return data.results.channels[0].alternatives[0].transcript;
}
