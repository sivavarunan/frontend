import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
// import Popup from '../../Pages/LoginSignup/popup';
import Panel from '../../Pages/LoginSignup/Panel';

const Navbar = () => {
    const [menu, setMenu] = useState("closed");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const toggleMenuOpen = () => setMenu(menu === 'open' ? 'closed' : 'open');

    const isLoginPage = location.pathname === '/loginsignup';
    if (isLoginPage) {
        return null;
    }

    return (
        <div className={`navbar ${menu}`}>
            
            {/* <div className="navbar-overlay" onClick={toggleMenuOpen}></div> */}
            {/* <button type="button" className="navbar-burger" onClick={toggleMenuOpen}> */}
                {/* <span className="material-icons">menu</span> */}
            {/* </button> */}

            <h1 className="navbar-title">
                <Link to='/' className="link-style">PROJECT</Link>
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
                {isLoggedIn ? (
                    <button> <Panel />
                </button>
                ) : (
                        <button className={menu === "loginsignup" ? "active" : "loginsignup"} onClick={() => setMenu("loginsignup")}>
                            <Link to='/loginsignup' className="login-style">Login
                            </Link></button>
                )}
            </nav>
        </div>
    );
}

export { Navbar };
