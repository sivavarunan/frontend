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
        <h2>Watch Our Animation</h2>
        <p>Enjoy this mesmerizing animation loop.</p>
      </div>
    </div>
  );
};

export default VideoSection;
