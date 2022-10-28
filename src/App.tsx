import React from "react";
import "./App.css";
import {
  WavyButton,
  BlobButton,
  CurtainButton,
  TwoCurtainButton,
  SlideEffectButton,
} from "@ankitbhatt10050/react-component-library";

function App() {
  return (
    <div className="container">
      <WavyButton label="Wavy Button"></WavyButton>
      <BlobButton label="Blob Button"></BlobButton>
      <CurtainButton label="Curtain Button"></CurtainButton>
      <TwoCurtainButton label="Wavy Button"></TwoCurtainButton>
      <SlideEffectButton label="Slide Button"></SlideEffectButton>
    </div>
  );
}

export default App;
