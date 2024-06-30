import React, { useEffect } from 'react';
import './About.css';
import './animation.css';
import useFadeInOnScroll from './useFadeInOnScroll';

const About = () => {
    const elementsRef = useFadeInOnScroll();

    return (
        <div className="about-container">
            <h1 ref={el => elementsRef.current[0] = el} className="fade-in">About Us</h1>
            <p ref={el => elementsRef.current[1] = el} className="fade-in">Welcome to Beauty Haven, your ultimate destination for premium beauty products. Our mission is to empower individuals to feel confident and beautiful in their own skin. We believe that beauty is more than just skin deep; it's a reflection of inner health and well-being.</p>
            
            <h2 ref={el => elementsRef.current[2] = el} className="fade-in">Our Story</h2>
            <p ref={el => elementsRef.current[3] = el} className="fade-in">Founded in 2023, Beauty Haven was born out of a passion for high-quality, natural, and effective beauty solutions. Our founders, Jane Doe and John Smith, envisioned a place where beauty enthusiasts could discover and enjoy the finest beauty products from around the world. Today, Beauty Haven is proud to offer a diverse range of skincare, makeup, haircare, and wellness products.</p>
            
            <h2 ref={el => elementsRef.current[4] = el} className="fade-in">Our Values</h2>
            <ul ref={el => elementsRef.current[5] = el} className="fade-in">
                <li><strong>Quality:</strong> We are committed to providing products that meet the highest standards of quality and efficacy.</li>
                <li><strong>Sustainability:</strong> We prioritize eco-friendly practices and products that are kind to our planet.</li>
                <li><strong>Inclusivity:</strong> We celebrate diversity and offer products for all skin types, tones, and hair textures.</li>
                <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority. We strive to offer excellent customer service and a seamless shopping experience.</li>
            </ul>
            
            <h2 ref={el => elementsRef.current[6] = el} className="fade-in">Our Products</h2>
            <p ref={el => elementsRef.current[7] = el} className="fade-in">At Beauty Haven, we carefully curate our product selection to ensure that each item is both luxurious and effective. From nourishing skincare to vibrant makeup, our products are designed to enhance your natural beauty and promote self-care. We partner with trusted brands and artisans who share our passion for quality and innovation.</p>
            
            <h2 ref={el => elementsRef.current[8] = el} className="fade-in">Join Our Community</h2>
            <p ref={el => elementsRef.current[9] = el} className="fade-in">We invite you to join the Beauty Haven community, where you can connect with fellow beauty lovers, discover new products, and share your beauty journey. Follow us on social media and subscribe to our newsletter for the latest updates, exclusive offers, and beauty tips.</p>
            
            <p ref={el => elementsRef.current[10] = el} className="fade-in">Thank you for choosing Beauty Haven. We look forward to being a part of your beauty routine!</p>
        </div>
    );
}

export default About;
