import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import Preloader2 from './Components/Preloader/Preloader2';
import Loading from './Components/Loading/Loading';

const Home = lazy(() => import('./Pages/Home/Home'));
const Study = lazy(() => import('./Pages/Study/Study'));
const About = lazy(() => import('./Pages/About/About'));
const Community = lazy(() => import('./Pages/Community/Community'));
const Store = lazy(() => import('./Pages/Store/Store'));
const LoginSignup = lazy(() => import('./Pages/LoginSignup/LoginSignup'));
const UserSettings = lazy(() => import('./Pages/LoginSignup/User'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/loginsignup';

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/store" element={<Store />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/user" element={<UserSettings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) {
    return <Preloader2 />;
  }

  return (
    <div className={theme === 'dark' ? 'animated-background-dark' : 'animated-background-light'}>
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
