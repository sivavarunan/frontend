import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "./Login.css";
import { ImProfile } from "react-icons/im"; 
import { IoMdClose } from "react-icons/io";
import api from "../../api/api"; // Import the api.js file
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

// Modal.setAppElement('#root'); // Set the root element for accessibility

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store user details

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        console.log('Token:', token); // Log the token value
        if (!token) {
          return; // No token available, do nothing
        }
        
        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const userData = await response.json();
        setUser(userData.data); // Update user state with fetched user details
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails(); // Call the fetchUserDetails function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='pop'>
      <button onClick={openModal}><ImProfile size={26} /></button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="content">
          <button onClick={closeModal}><IoMdClose size={26} className='close' /></button>
          {user && ( // Check if user data is available
            <>
              <p>Username: {user.username}</p> {/* Display username */}
              <p>E-mail: {user.email}</p> {/* Display email */}
              {/* Display other user details as needed */}
              <button className="logout-button" onClick={closeModal}>Logout</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
