import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeroImage from './hero.png'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Fade direction="left" triggerOnce>
        <img src={HeroImage} alt="Hero" className="hero-image" />
      </Fade>
      <div className="hero-content">
        <Fade direction="up" triggerOnce delay={300}>
          <h1>Welcome to My Project</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={500}>
          <p>Discover amazing features and content.</p>
        </Fade>
        <Fade direction="up" triggerOnce delay={700}>
          <button className="sbutton">Get Started</button>
        </Fade>
      </div>
      <div className="overlay-text">
        <Fade direction="right" triggerOnce delay={300}>
          "Sometimes Our Only Choice Is To Walk Away From Everything We Know" - Jin Sakai
        </Fade>
      </div>
    </div>
  );
};

export default HeroSection;
