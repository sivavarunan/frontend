import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

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

    return (
        <div className={`navbar ${menu}`}>
            <h1 className="navbar-title">
                <Link to='/' className="link-style" onClick={() => setMenu("Home")}>PROJECT</Link>
            </h1>

            <nav className={`navbar-menu ${menu}`}>
                <button className={menu === "community" ? "active" : ""} onClick={() => setMenu("community")}>
                    <Link to='/community' className="link-style">Community</Link>
                </button>
                <button className={menu === "study" ? "active" : ""} onClick={() => setMenu("study")}>
                    <Link to='/study' className="link-style">Study</Link>
                </button>
                <button className={menu === "store" ? "active" : ""} onClick={() => setMenu("store")}>
                    <Link to='/store' className="link-style">Store</Link>
                </button>
                <button className={menu === "about" ? "active" : ""} onClick={() => setMenu("about")}>
                    <Link to='/about' className="link-style">About</Link>
                </button>
                {isLoggedIn ? (
                    <button className={menu === "usersettings" ? "active" : ""} onClick={() => setMenu("usersettings")}>
                        <Link to='/user' className="link-style">User Settings</Link>
                    </button>
                ) : (
                    <button className={menu === "loginsignup" ? "active" : "loginsignup"} onClick={() => setMenu("loginsignup")}>
                        <Link to='/loginsignup' className="link-style">Login</Link>
                    </button>
                )}
                <button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
            </nav>
        </div>
    );
}

export { Navbar };
