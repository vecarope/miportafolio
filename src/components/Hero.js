import React from "react";
import { Button } from "./Button";
import '../styleSheet/Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <video src="/video/video.mp4" autoPlay loop muted />
      <h1>HOLA/HELLO!</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Descargar Curriculum
        </Button>
      </div>
    </div>
  );
}

export default Hero;
