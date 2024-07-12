import React, { useState, useEffect } from 'react';
import './section-2.css';

const images = [
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Slider = () => {
  const [slides, setSlides] = useState(images);

  const rotate = () => {
    const lastChild = slides[slides.length - 1];
    const newSlides = [lastChild, ...slides.slice(0, slides.length - 1)];
    setSlides(newSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotate();
    }, 4000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="container">
      <div className="slider">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`box${index + 1} ${index === 0 ? 'firstSlide' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
