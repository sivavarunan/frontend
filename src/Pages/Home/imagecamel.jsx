import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ImageCarousel.css';
import HeroImage from './hero.png';
import HeroImage1 from './hero1.png';
import mc1 from './mc1.png';
import mc2 from './mc2.png';
import aw1 from './aw1.png';
import aw2 from './aw2.png';

const images = [
  aw1,
  aw2,
  HeroImage,
  HeroImage1,
  mc1,
  mc2
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const track = document.getElementById('image-track');
    let mouseDownAt = 0;
    let prevPercentage = 0;
    let percentage = 0;

    const handleMouseDown = (e) => {
      mouseDownAt = e.clientX;
    };

    const handleMouseUp = () => {
      mouseDownAt = 0;
      prevPercentage = percentage;
    };

    const handleMouseMove = (e) => {
      if (mouseDownAt === 0) return;
      
      const mouseDelta = mouseDownAt - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const newPercentage = (mouseDelta / maxDelta) * -100;
      percentage = Math.max(Math.min(prevPercentage + newPercentage, 0), -100);

      track.style.transform = `translate(${percentage}%, -50%)`;

      const images = track.getElementsByClassName("carousel-image");
      const nextPercentage = -percentage / 2;
      for (const image of images) {
        image.style.objectPosition = `${nextPercentage}% 50%`;
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDoubleClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveIndex(null);
  };

  return (
    <div id="image-track" className="carousel-container">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`carousel-${index}`}
          className={`carousel-image ${activeIndex === index ? 'active' : ''}`}
          draggable="false"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          onDoubleClick={() => handleDoubleClick(index)}
          whileHover={{ scale: 1.1 }}
        />
      ))}

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <motion.img
            src={images[activeIndex]}
            alt={`popup-${activeIndex}`}
            className="modal-image"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
