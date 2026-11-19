import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-container" aria-labelledby="hero-heading">
      <video
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <h1 id="hero-heading">ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
