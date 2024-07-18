import React from 'react';
import ImageSlider from '../ImageSlider';
import './CardComponent.css';

const Card = ({ title, description, images }) => {
  return (
    <div className="card">
      <div className="card-body">
        <ImageSlider images={images} />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
