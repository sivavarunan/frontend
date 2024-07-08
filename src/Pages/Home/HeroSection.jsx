import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeroImage from './bg7.png'; 
import Typewriter from 'react-typewriter-effect';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Fade direction="down" triggerOnce>
        <img src={HeroImage} alt="Hero" className="hero-image1" />
      </Fade>
      
      <div className="overlay-text">
        <Fade direction="up" triggerOnce delay={100}>
        <Typewriter
            text="Sometimes Our Only Choice Is To Walk Away From Everything We Know - Jin Sakai"
            typeSpeed={100}
            startDelay={100}
            cursorColor="white"
          />
        </Fade>
      </div>
      
    </div>
  );
};

export default HeroSection;
