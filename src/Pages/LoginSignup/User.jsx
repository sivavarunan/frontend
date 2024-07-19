import React, { useState, useEffect } from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 

const UserSettings = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

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

  if (!user) {
    return <div>Loading...</div>;
  }
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/loginsignup');
  };

  return (
    <div className="user-settings">
      <h2>User Settings</h2>
      <div className="user-details">
        <div className="avatar">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="User Avatar" />
          ) : (
            <FaUserCircle size={80} color="#ddd" />
          )}
        </div>
        <div className="info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
