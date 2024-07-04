import React from 'react';
import ImageSlider from './ImageSlider';
import './CardComponent.css';

const Card = ({ title, description, images }) => {
  return (
    <div className="card">
      {/* <div className="card-header">
        <h2>{title}</h2>
      </div> */}
      <div className="card-body">
        <ImageSlider images={images} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
