# Voice-to-Text Desktop Application (Tauri + Deepgram)

A cross-platform desktop application that converts voice input into text using **Tauri** and **Deepgram Speech-to-Text API**.  
This project is a functional prototype inspired by **Wispr Flow**, focusing on the **core voice-to-text workflow** rather than visual polish.

The goal of this project is to demonstrate practical skills in building AI-powered desktop applications using modern tools.

---

## Features

- Push-to-talk voice recording
- Microphone permission handling
- Audio capture from system microphone
- Speech-to-text transcription using Deepgram
- Display of transcribed text
- Clear start/stop recording controls
- Basic error handling for API and permission failures

---

## Tech Stack

- **Tauri** – Cross-platform desktop framework
- **React + Vite** – Frontend user interface
- **Deepgram API** – Speech-to-text transcription
- **Rust** – Backend runtime used by Tauri

---

## Project Structure

```text
voice-to-text-tauri/
├── src/
│   ├── hooks/
│   │   └── useAudioRecorder.js   # Audio capture logic
│   ├── services/
│   │   └── deepgram.js           # Deepgram API integration
│   ├── App.jsx                   # Main UI and workflow
│   └── main.jsx                  # Application entry point
├── src-tauri/
│   └── tauri.conf.json           # Tauri configuration
├── public/
├── package.json
└── README.md
```

---


## **Setup Instructions**

### Prerequisites

- Node.js (v18 or higher)
- Rust (stable toolchain)
- Tauri CLI

Install Tauri CLI:

```bash
npm install -D @tauri-apps/cli
```
 
---

## **Install Dependencies**

```bash
npm install
```
---

## Configuration

To use the Deepgram API, you need to provide your API key.

1. Create a `.env` file in the root directory of the project:

```bash
touch .env
```

2. Add your Deepgram API key to the .env file:

```bash
VITE_DEEPGRAM_API_KEY=your_deepgram_api_key_here
```

---

## Run the Application (Development)

```bash
npm run tauri dev
```

## Usage

1. Launch the desktop application.
2. Click and hold the **Push-to-Talk** button.
3. Speak into your microphone.
4. Release the button to stop recording.
5. View the transcribed text displayed in the app.

---

## Architecture & Design Decisions

- **Separation of Concerns:**
  - UI logic is handled in React components.
  - Audio recording logic is isolated in a custom hook.
  - Transcription logic is separated into a service layer.

- **Technology Choices:**
  - `MediaRecorder` API is used for microphone audio capture.
  - Deepgram REST API is used for transcription to keep the implementation simple and reliable.

- **Design Focus:**
  - Prioritized core functionality and workflow over UI polish.

---

## Known Limitations

- Transcription is near real-time, not true live streaming.
- Deepgram API key is exposed on the client side (acceptable for demo purposes only).
- Minimal UI styling.
- No advanced noise cancellation or audio preprocessing.

---

## Demo Video

Demo video link: (https://drive.google.com/file/d/1nzQEGjmTd3x7S9z0CMNpUtnpC8z4PQM_/view?usp=drive_link)

---

## Evaluation Notes

### This project prioritizes:

- Functionality over visual polish

- Clean and maintainable code

- Clear user workflow

- Practical AI integration
  

The implementation demonstrates problem-solving ability, product thinking, and real-world desktop application development using modern tools.

---

## Author
Kavyashri Hebbar
