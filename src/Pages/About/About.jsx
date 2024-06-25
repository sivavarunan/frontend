import React from 'react';
import Parbg from './parallex';

// import './parallex.css';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is the About page content.</p>
            <Parbg /> {/* Render the Parbg component here */}
        </div>
    );
}

export default About;
