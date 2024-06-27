import React, { useState, useEffect } from 'react';
import './User.css';

const UserSettings = () => {
  const [user, setUser] = useState(null);

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

  return (
    <div className="user-settings">
      <h2>User Settings</h2>
      <div className="user-details">
        <div className="avatar">
          <img src={user.avatarUrl} alt="User Avatar" />
        </div>
        <div className="info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
