import React, { useRef } from 'react';
import HeroImage1 from './Images/hero2.png';
import './Home.css';
import { FaCogs, FaUsers, FaMobile } from 'react-icons/fa';
import VideoSection from './VideoSection/VideoSection';
import ImageCarousel from './imagecamel';
import BentoGrid from './BentoGrid/BentoGrid';
import { Fade } from 'react-awesome-reveal';
import HeroSection from './HeroSection/HeroSection';
import Section2 from './Section-2/section-2';


const Home = () => {
  const featureRef = useRef();

  return (
    <div>
     <HeroSection />
      <div>
      <div className="section">
        <Fade direction="up" triggerOnce delay={300}>
          <h1>Welcome to My Project</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={500}>
          <p>Discover amazing features and content.</p>
        </Fade>
        <Fade direction="up" triggerOnce delay={700}>
        <div className="sbutton-button-container">
        <span data-title="Get Started"><button className="sbutton">Get Started</button></span>
      </div>
        </Fade>
      </div>
      </div>

      {/* Bento Grid */}
      
      <div>
      <Fade direction="left" triggerOnce delay={100}>
      <BentoGrid />
      </Fade>
      </div>

      <Fade cascade direction="up" triggerOnce>
      <Section2 />
      </Fade>
      
      {/* Cards Section */}
        {/* <Fade cascade direction="up" triggerOnce>
          <div className="card-container">
            <Card title="Card 1" className="card1" description="This is the first card." images={[mc1, mc2]} />
            <Card title="Card 2" className="card2" description="This is the second card." images={[tree, river]} />
            <Card title="Card 3" className="card3" description="This is the third card." images={[aw1, aw2]} />
          </div>
        </Fade> */}

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


      {/* Feature Section */}
      <div ref={featureRef} className={`feature-section `}>
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
      <div className="hero-section">
        <Fade direction="up" triggerOnce>
          <img src={HeroImage1} alt="Hero" className="hero-image" />
        </Fade>
        <div className="overlay-text-2">
          <Fade direction="up" triggerOnce delay={300}>
            The path to victory is paved with sacrifice and perseverance
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
