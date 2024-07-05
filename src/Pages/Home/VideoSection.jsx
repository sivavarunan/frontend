import React from 'react';
import './VideoSection.css'; 
import animation from './videoes/animation.mp4'
import Typewriter from 'react-typewriter-effect';
import { Fade } from 'react-awesome-reveal';


const VideoSection = () => {
  return (
    <div className="video-section">
      <video autoPlay loop  className="video">
        <source src={animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <Fade direction="up" triggerOnce delay={100}>
          <Typewriter
            text="The World is What We Imagine..
            Enjoy every moment of it."
            typeSpeed={100}
            startDelay={100}
            cursorColor="white"
          />
        </Fade>
      </div>
    </div>
  );
};

export default VideoSection;
