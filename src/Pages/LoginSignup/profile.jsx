import React, { useState } from 'react';
import './Login.css';

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-profile-dropdown">
      <div className="profile" onClick={toggleDropdown}>
        <img
          className="avatar"
          src="profile.jpg" 
          alt="Profile"
        />
        <span className="username">John Doe</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Edit Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
