
import React from 'react';
import './BentoGrid.css'; 
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';

const BentoGrid = () => {
  return (
    <div className="bento">
      <div className="wrap">
        <div className="grid1">
        <img src={img5} alt="Item 1" />
        </div>
        <div className="grid2">
        <img src={img1} alt="Item 1" />
        </div>
        <div className="grid3">
        <img src={img3} alt="Item 3" />
        </div>
        <div className="grid4"></div>
        <div className="grid5"> </div>
        <div className="grid6"></div>
        <div className="grid7">
        <img src={img2} alt="Item 2" />
        </div>
        <div className="grid8"></div>
        <div className="grid9"></div>
     
        <div className="grid10">  <img src={img6} alt="Item 1" /></div>
        <div className="grid11"></div>
      </div>
    </div>
  );
};

export default BentoGrid;
