import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css'; 
import animation from '../videoes/animation.mp4';
import { Fade } from 'react-awesome-reveal';

const text = "The World is What We Imagine.. Enjoy every moment of it.";

const VideoSection = () => {
  return (
    <div className="video-section">
      <Fade direction="up" triggerOnce delay={100}>
        <video autoPlay loop className="video">
          <source src={animation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Fade>
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="gradient-text"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoSection;
