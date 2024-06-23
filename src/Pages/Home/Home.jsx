// src/components/Home.js
import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='homepage'>
      <h1>Welcome to my page</h1>
      <img className='mineimg' src={`${process.env.PUBLIC_URL}/minecraft.png`} alt="Sunset castle" />
    </div>
  );
}

export default Home;
