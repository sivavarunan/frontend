import React from 'react';
import Card from './card';
import HeroImage from './hero.png';
import tree from './tree.jpg';
import river from './river.jpg';
import './Home.css';

const Home = () => {
  const images = [tree, river];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <img src={HeroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to My Project</h1>
          <p>Discover amazing features and content.</p>
          <button className="sbutton">Get Started</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        <Card
          title="Card 1"
          description="This is the first card."
          images={images}
        />
        <Card
          title="Card 2"
          description="This is the second card."
          images={images}
        />
        <Card
          title="Card 3"
          description="This is the third card."
          images={images}
        />
      </div>
    </div>
  );
};

export default Home;
