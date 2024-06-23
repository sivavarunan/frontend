import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS file
import { Link, useLocation } from 'react-router-dom';
import Popup from '../../Pages/LoginSignup/popup';
import Panel from '../../Pages/LoginSignup/Panel';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const location = useLocation();

    useEffect(() => {
        // Check if user is logged in by checking the presence of token in local storage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const toggleMenuOpen = () => setMenu(menu === 'open' ? 'closed' : 'open');

    // Check if the user is on the login/signup page
    const isLoginPage = location.pathname === '/loginsignup';

    // Render null if the user is on the login/signup page
    if (isLoginPage) {
        return null;
    }

    return (
        <div className={`navbar ${menu}`}>
            <div className="navbar-overlay" onClick={toggleMenuOpen}></div>
            <button type="button" className="navbar-burger" onClick={toggleMenuOpen}>
                <span className="material-icons">menu</span>
            </button>
           
            <h1 className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>
                <Link to='/' className="link-style">MATRIX</Link>
            </h1>

            <nav className="navbar-menu">

                <button className={menu === "community" ? "active" : ""} onClick={() => setMenu("community")}>
                    <Link to='/community' className="link-style">Community</Link>
                </button>
                <button className={menu === "study" ? "active" : ""} onClick={() => setMenu("study")}>
                    <Link to='/study' className="link-style">Study</Link>
                </button>
                <button className={menu === "store" ? "active" : ""} onClick={() => setMenu("store")}>
                    <Link to='/store' className="link-style">Store</Link>
                </button>
               
                {/* Conditionally render login button or Panel component based on login status */}
                {isLoggedIn ? (
                    <Panel />
                ) : (
                    <div className="nav-login">
                        <Link to='/loginsignup' className="login-style"><button>Login</button></Link>
                    </div>
                )}
            </nav>
        </div>
    );
}

export { Navbar };
