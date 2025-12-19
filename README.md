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

voice-to-text-tauri/
├── src/
│ ├── hooks/
│ │ └── useAudioRecorder.js # Audio capture logic
│ ├── services/
│ │ └── deepgram.js # Deepgram API integration
│ ├── App.jsx # Main UI and workflow
│ └── main.jsx # Application entry point
├── src-tauri/
│ └── tauri.conf.json
├── public/
├── package.json
└── README.md


---

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- Rust (stable toolchain)
- Tauri CLI

Install Tauri CLI:

```bash
npm install -D @tauri-apps/cli
