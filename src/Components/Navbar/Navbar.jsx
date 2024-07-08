import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';

const Navbar = ({ toggleTheme, theme }) => {
    const [menu, setMenu] = useState("closed");
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

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
    };

    const toggleOverlay = () => {
        setMenu(menu === "closed" ? "open" : "closed");
    };

    return (
        <div className={`navbar ${menu}`}>
            <h1 className="navbar-title">
                <Link to='/' className="link-style" onClick={() => handleMenuClick("Home")}>PROJECT</Link>
            </h1>

            <button className="menu-toggle-button" onClick={toggleOverlay}>
                <FiMenu />
            </button>

            <nav className={`navbar-menu ${menu}`}>
                <button className={menu === "community" ? "active" : ""} onClick={() => handleMenuClick("community")}>
                    <Link to='/community' className="link-style">Community</Link>
                </button>
                <button className={menu === "study" ? "active" : ""} onClick={() => handleMenuClick("study")}>
                    <Link to='/study' className="link-style">Study</Link>
                </button>
                <button className={menu === "store" ? "active" : ""} onClick={() => handleMenuClick("store")}>
                    <Link to='/store' className="link-style">Store</Link>
                </button>
                <button className={menu === "about" ? "active" : ""} onClick={() => handleMenuClick("about")}>
                    <Link to='/about' className="link-style">About</Link>
                </button>
                {isLoggedIn ? (
                    <button className={menu === "usersettings" ? "active" : ""} onClick={() => handleMenuClick("usersettings")}>
                        <Link to='/user' className="link-style">User Settings</Link>
                    </button>
                ) : (
                    <button className={menu === "loginsignup" ? "active" : "loginsignup"} onClick={() => handleMenuClick("loginsignup")}>
                        <Link to='/loginsignup' className="link-style">Login</Link>
                    </button>
                )}
                <button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
            </nav>

            <div className={`navbar-overlay ${menu}`}>
                <div className="overlay-content">
                    <button className="close-overlay" onClick={toggleOverlay}>×</button>
                    <Link to='/community' className="link-style" onClick={() => handleMenuClick("community")}>Community</Link>
                    <Link to='/study' className="link-style" onClick={() => handleMenuClick("study")}>Study</Link>
                    <Link to='/store' className="link-style" onClick={() => handleMenuClick("store")}>Store</Link>
                    <Link to='/about' className="link-style" onClick={() => handleMenuClick("about")}>About</Link>
                    {isLoggedIn ? (
                        <Link to='/user' className="link-style" onClick={() => handleMenuClick("usersettings")}>User Settings</Link>
                    ) : (
                        <Link to='/loginsignup' className="link-style" onClick={() => handleMenuClick("loginsignup")}>Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export { Navbar };
