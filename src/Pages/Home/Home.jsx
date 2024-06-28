import React, { useRef } from 'react';
import Card from './card';
import HeroImage from './hero.png';
import HeroImage1 from './hero1.png';
import tree from './tree.jpg';
import river from './river.jpg';
import mc1 from './mc1.png';
import mc2 from './mc2.png';
import aw1 from './aw1.png';
import aw2 from './aw2.png';
import './Home.css';
import { FaCogs, FaUsers, FaMobile } from 'react-icons/fa';
import VideoSection from './VideoSection';
import useOnScreen from './useOnScreen';
import ImageCarousel from './imagecamel';

const Home = () => {
  const featureRef = useRef();
  const isVisible = useOnScreen(featureRef, '50px');

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
        <div className="overlay-text">"Sometimes Our Only Choice Is To Walk Away From Everything We Know" - Jin Sakai</div>
      </div>

      {/* Cards Section */}
      <div ref={featureRef} className={`card-section ${isVisible ? 'animate' : ''}`}>
        <div className="card-container">
          <Card title="Card 1" className="card1" description="This is the first card." images={[mc1, mc2]} />
          <Card title="Card 2" className="card2" description="This is the second card." images={[tree, river]} />
          <Card title="Card 3" className="card3" description="This is the third card." images={[aw1, aw2]} />
        </div>
      </div>

      {/* Video Section */}
      <VideoSection />
     <div className='image-section'>
        <ImageCarousel />
        </div>
      {/* Feature Section */}
      <div ref={featureRef} className={`feature-section ${isVisible ? 'animate' : ''}`}>
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
      <div className="hero-section-2">
        <img src={HeroImage1} alt="Hero" className="hero-image" />
        <div className="overlay-text">The path to victory is paved with sacrifice and perseverance</div>
      </div>
    </div>
  );
};

export default Home;
