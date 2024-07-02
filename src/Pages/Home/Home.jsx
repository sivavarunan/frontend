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
import useOnScreen from './UseOnScreen';
import ImageCarousel from './imagecamel';
import BentoGrid from './BentoGrid/BentoGrid';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  const featureRef = useRef();
  const isVisible = useOnScreen(featureRef, '50px');

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <Fade direction="left" triggerOnce>
          <img src={HeroImage} alt="Hero" className="hero-image" />
        </Fade>
        <div className="hero-content">
          <Fade direction="up" triggerOnce delay={300}>
            <h1>Welcome to My Project</h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={500}>
            <p>Discover amazing features and content.</p>
          </Fade>
          <Fade direction="up" triggerOnce delay={700}>
            <button className="sbutton">Get Started</button>
          </Fade>
        </div>
        <div className="overlay-text">
          <Fade direction="right" triggerOnce delay={300}>
            "Sometimes Our Only Choice Is To Walk Away From Everything We Know" - Jin Sakai
          </Fade>
        </div>
      </div>

      {/* Bento Grid */}
      <div>
      <Fade direction="left" triggerOnce delay={100}>
      <BentoGrid />
      </Fade>
      </div>

      {/* Video Section */}
      <div>
      <Fade direction="up" triggerOnce delay={100}>
      <VideoSection />
      </Fade>
      </div>
      <Fade direction="right" triggerOnce delay={100}>
      <div className='image-section'>
      
        <ImageCarousel />
        
      </div>
      </Fade>

      {/* Cards Section */}
      <div ref={featureRef} className={`card-section ${isVisible ? 'animate' : ''}`}>
        <Fade cascade direction="up" triggerOnce>
          <div className="card-container">
            <Card title="Card 1" className="card1" description="This is the first card." images={[mc1, mc2]} />
            <Card title="Card 2" className="card2" description="This is the second card." images={[tree, river]} />
            <Card title="Card 3" className="card3" description="This is the third card." images={[aw1, aw2]} />
          </div>
        </Fade>
      </div>

      {/* Feature Section */}
      <div ref={featureRef} className={`feature-section ${isVisible ? 'animate' : ''}`}>
        <Fade cascade direction="up" triggerOnce>
          <div className="feature">
            <FaCogs size={36} />
            <h3>Customizable</h3>
            <p>Customize your experience with ease.</p>
          </div>
        </Fade>
        <Fade cascade direction="up" triggerOnce delay={200}>
          <div className="feature">
            <FaUsers size={36} />
            <h3>Community</h3>
            <p>Join a vibrant community of users.</p>
          </div>
        </Fade>
        <Fade cascade direction="up" triggerOnce delay={400}>
          <div className="feature">
            <FaMobile size={36} />
            <h3>Responsive</h3>
            <p>Works seamlessly on all devices.</p>
          </div>
        </Fade>
      </div>

      {/* Second Hero Section */}
      <div className="hero-section-2">
        <Fade direction="right" triggerOnce>
          <img src={HeroImage1} alt="Hero" className="hero-image" />
        </Fade>
        <div className="overlay-text">
          <Fade direction="left" triggerOnce delay={300}>
            The path to victory is paved with sacrifice and perseverance
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
