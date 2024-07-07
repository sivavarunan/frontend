import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const isLoginPage = location.pathname === '/loginsignup';
    if (isLoginPage) {
        return null;
    }

    return (
        <div className="navbar">
            <h1 className="navbar-title">
                <Link to='/' className="link-style">PROJECT</Link>
            </h1>

            <nav className="navbar-menu">
                <Link to='/community' className={`link-style ${location.pathname === '/community' ? 'active' : ''}`}>Community</Link>
                <Link to='/study' className={`link-style ${location.pathname === '/study' ? 'active' : ''}`}>Study</Link>
                <Link to='/store' className={`link-style ${location.pathname === '/store' ? 'active' : ''}`}>Store</Link>
                <Link to='/about' className={`link-style ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                {isLoggedIn ? (
                    <Link to='/user' className={`link-style ${location.pathname === '/user' ? 'active' : ''}`}>User Settings</Link>
                ) : (
                    <Link to='/loginsignup' className={`link-style ${location.pathname === '/loginsignup' ? 'active' : ''}`}>Login</Link>
                )}
                <button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
            </nav>
        </div>
    );
}

export { Navbar };
