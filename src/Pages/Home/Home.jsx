import React from 'react'
import Card from './card';
import Parbg from './parallex';
import tree from './tree.jpg'
import river from './river.jpg'

const Home = () => {

  const images = [
      tree,
      river,
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