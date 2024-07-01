import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import slide1 from './Images/bg.jpg';
import slide2 from './Images/lipstick.jpg';
import slide3 from './Images/liquid.jpg';
import slide4 from './Images/brush.jpg';
import slide5 from './Images/qutex.jpg';
import slide6 from './Images/color.jpg';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
const captions = [
  'Caption for Slide 1',
  'Caption for Slide 2',
  'Caption for Slide 3',
  'Caption for Slide 4',
  'Caption for Slide 5',
  'Caption for Slide 6'
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${slide})` }}>
            <div className="caption">{captions[index]}</div>
          </div>
        ))}
      </div>
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
