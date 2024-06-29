import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Study from "./Pages/Study/Study";
import About from "./Pages/About/About";
import Community from "./Pages/Community/Community";
import Store from "./Pages/Store/Store";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import { ToastContainer } from "react-toastify";
import { Footer } from "./Components/Footer/Footer";
import User from "./Pages/LoginSignup/User";
import UserSettings from "./Pages/LoginSignup/User";

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/loginsignup";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/store" element={<Store />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/User" element={<UserSettings />} />

      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <AppContent />
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}

export default App;
