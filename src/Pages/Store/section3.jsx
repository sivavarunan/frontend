import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './section3.css';

const Section3 = () => {
  const handleNextClick = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  };

  const handlePrevClick = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="containerx">
      <div className="slide">
        <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)', borderRadius: '20px' }}>
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)', borderRadius: '20px' }}>
          <div className="content">
            <div className="name">Finland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)', borderRadius: '20px' }}>
          <div className="content">
            <div className="name">Iceland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)', borderRadius: '20px' }}>
          <div className="content">
            <div className="name">Australia</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)', borderRadius: '20px' }}>
          <div className="content">
            <div className="name">Netherland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)', borderRadius: '20px' }}>
          <div className="content">
            <div className="name">Ireland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <button className="next" onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Section3;
