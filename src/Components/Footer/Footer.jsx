import React from "react";
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <nav className="footer-menu">
                <button>
                 
                </button>
                <button>
           
                </button>
                <button>
   
                </button>
                <button>
            
                </button>
                <button>
        
                </button>
            </nav>
            <p className="footer-text">&copy; {new Date().getFullYear()} PROJECT. All rights reserved.</p>
        </div>
    );
}

export { Footer };
