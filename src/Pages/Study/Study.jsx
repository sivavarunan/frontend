import React from 'react';
import './Study.css';
import image1 from './Images/img1.jpg';
import image2 from './Images/img2.jpg';
import image3 from './Images/img3.jpg';
import image4 from './Images/img4.jpg';

const sections = [
  {
    text: 'Discover the latest trends in beauty cosmetics to enhance your natural glow.',
    image: image1
  },
  {
    text: 'Learn about the best skincare routines tailored for your skin type.',
    image: image2
  },
  {
    text: 'Explore the benefits of organic and natural beauty products.',
    image: image3
  },
  {
    text: 'Find out how to maintain a healthy lifestyle with the right healthcare practices.',
    image: image4
  }
];

const Study = () => {
  return (
    <div className="study-container">
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`study-section ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="study-text">{section.text}</div>
          <img src={section.image} alt="Study section" className="study-image" />
        </div>
      ))}
    </div>
  );
}

export default Study;
