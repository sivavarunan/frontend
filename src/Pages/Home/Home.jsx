import React from 'react'
import Card from './card';

const Home = () => {

  const images = [
    'https://via.placeholder.com/400x200?text=Image+1',
    'https://via.placeholder.com/400x200?text=Image+2',
    'https://via.placeholder.com/400x200?text=Image+3',
  ];
  return (
    <div>

      <Card
        title="Sample Card"
        description="This is a sample card component with a sliding image carousel."
        images={images}
      />
      
    </div>
    
    
  )
}

export default Home;