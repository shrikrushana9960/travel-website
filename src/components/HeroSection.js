import React from "react";
import "../App.css";
import Button from "./Button";

import "./HeroSection.css";

function HeroSection() {
const arr = ["/new.mp4", "/kong.mp4", "/video-1.mp4", "/video-2.mp4"];
  const source = arr[Math.floor(Math.random() * arr.length)];
  
  return (
    <div className="hero-container">
      <video src={source} autoPlay loop muted />
      <h1>Movie AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          path="/services/avenger"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/sign-up"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
