import React from "react";
import "../App.css";
import Button from "./Button";

import "./HeroSection.css";

function HeroSection() {

  
  
  return (
    <div className="hero-container">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/poster-b85ee.appspot.com/o/new.mp4?alt=media&token=b6cf4bb2-3a69-4657-9b65-3750e1e7c7aa"
        autoPlay
        loop
        muted
      />
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
