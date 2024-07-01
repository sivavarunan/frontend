import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import slide1 from './Images/color.jpg';
import slide2 from './Images/lipstick.jpg';
import slide3 from './Images/liquid.jpg';

const slides = [slide1, slide2, slide3];
const captions = ['Caption for Slide 1', 'Caption for Slide 2', 'Caption for Slide 3'];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <div className="caption">{captions[currentSlide]}</div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
