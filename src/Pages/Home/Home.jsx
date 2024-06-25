import React from 'react';
import Card from './card';
import HeroImage from './hero.png';
import HeroImage1 from './hero1.png';
import tree from './tree.jpg';
import river from './river.jpg';
import './Home.css';
import { FaCogs, FaUsers, FaMobile } from 'react-icons/fa';
import VideoSection from './VideoSection';

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
      <div>
        {/* Video Section */}
        <VideoSection />
      </div>



      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature">
          <FaCogs size={36} />
          <h3>Customizable</h3>
          <p>Customize your experience with ease.</p>
        </div>
        <div className="feature">
          <FaUsers size={36} />
          <h3>Community</h3>
          <p>Join a vibrant community of users.</p>
        </div>
        <div className="feature">
          <FaMobile size={36} />
          <h3>Responsive</h3>
          <p>Works seamlessly on all devices.</p>
        </div>

      </div>
      {/* Second Hero Section */}
      <div className="hero-section2">
        <img src={HeroImage1} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default Home;
