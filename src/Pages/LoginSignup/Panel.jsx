import React, { useState, useEffect } from 'react';
import './Login.css';
import { ImProfile } from "react-icons/im"; 
import { IoMdClose } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Panel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook to use navigation

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        if (!token) {
          return;
        }
        
        const response = await fetch('http://localhost:8080/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            "token": token
          }
        });
        const userData = await response.json();
        setUser(userData.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
 
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/loginsignup'); // Redirect to login page
  };

  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={togglePanel}><ImProfile size={26} /></button>
      <div className="content">
        <button onClick={togglePanel} className='close'><IoMdClose size={26} /></button>
        {user && (
          <>
            <p>Username: {user.username}</p>
            <p>E-mail: {user.email}</p>
            <p>Points: </p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Panel;
