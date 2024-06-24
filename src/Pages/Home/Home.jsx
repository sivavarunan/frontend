import React from 'react'
import Card from './card';
import Parbg from './parallex';
import tree from './tree.jpg'

const Home = () => {

  const images = [
      tree,
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
      {/* <Parbg /> */}
    </div>
    
  
  )
}

export default Home;