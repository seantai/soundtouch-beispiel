import React from "react";
import { PlayerProvider } from "./Player.context";
import LoadButton from "./components/LoadButton.component";
import Player from "./components/Player.component";
import "./styles.css";

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioCtx.createGain();

export default function App() {
  return (
    <div className="App">
      <h1>SoundTouchJS Example with React</h1>
      <p>
        This is a basic example of using the SoundTouchJS PitchShifter object
        for processing audio for key and pitch changes.
      </p>
      <PlayerProvider {...{ audioCtx, gainNode }}>
        <LoadButton />
        <Player />
      </PlayerProvider>
    </div>
  );
}
