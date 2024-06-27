import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footer">
            <nav className="footer-menu">
                <Link to="/" className="footer-button" onClick={scrollToTop}>Home</Link>
                <button className="footer-button">About Us</button>
                <button className="footer-button">Services</button>
                <button className="footer-button">Contact</button>
                <button className="footer-button">Privacy Policy</button>
            </nav>
            <div className="social-media">
                <a href="https://facebook.com" className="social-media-icon" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" className="social-media-icon" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" className="social-media-icon" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com" className="social-media-icon" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>
            <p className="footer-text">&copy; {new Date().getFullYear()} PROJECT. All rights reserved.</p>
        </div>
    );
}

export { Footer };
