import React from "react";
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
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
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
        theme="dark"
      />
    </div>
  );
}

export default App;
