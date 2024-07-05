import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeroImage from './hero.png'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Fade direction="down" triggerOnce>
        <img src={HeroImage} alt="Hero" className="hero-image" />
      </Fade>
      
      <div className="overlay-text">
        <Fade direction="up" triggerOnce delay={100}>
          "Sometimes Our Only Choice Is To Walk Away From Everything We Know" - Jin Sakai
        </Fade>
      </div>
      
    </div>
  );
};

export default HeroSection;
