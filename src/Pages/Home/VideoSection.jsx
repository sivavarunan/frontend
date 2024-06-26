import React from 'react';
import './VideoSection.css'; 
import animation from './videoes/animation.mp4'


const VideoSection = () => {
  return (
    <div className="video-section">
      <video autoPlay loop  className="video">
        <source src={animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h2>The World is What We Imagine..</h2>
        <p>Enjoy every moment of it.</p>
      </div>
    </div>
  );
};

export default VideoSection;
