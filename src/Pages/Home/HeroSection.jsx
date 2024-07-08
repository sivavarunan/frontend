import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import HeroImage from './bg7.png'; 

const text = "Sometimes Our Only Choice Is To Walk Away From Everything We Know - Jin Sakai";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentText = "";
    const intervalId = setInterval(() => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setDisplayedText(currentText);
      } else {
        clearInterval(intervalId);
      }
    }, 100); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-section">
      <Fade direction="down" triggerOnce>
        <img src={HeroImage} alt="Hero" className="hero-image1" />
      </Fade>
      
      <div className="overlay-text">
        <Fade direction="up" triggerOnce delay={100}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="typewriter-text"
          >
            {displayedText.split("").map((char, index) => (
              <span
                key={index}
                className="gradient-text"
                style={{
                  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {char}
              </span>
            ))}
          </motion.div>
        </Fade>
      </div>
    </div>
  );
};

export default HeroSection;
