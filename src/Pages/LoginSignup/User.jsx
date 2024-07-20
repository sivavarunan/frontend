import React, { useState, useEffect } from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const UserSettings = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
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
        setUsername(userData.data.username);
        setEmail(userData.data.email);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/loginsignup');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      if (avatar) {
        formData.append('avatar', avatar);
      }

      const response = await fetch('http://localhost:8080/api/user/update', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setUser(result.data);
        alert('User details updated successfully!');
      } else {
        alert('Error updating user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      const response = await fetch('http://localhost:8080/api/user/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.success) {
        localStorage.removeItem('token');
        navigate('/loginsignup');
      } else {
        alert('Error deleting account');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-settings">
      <h2>User Settings</h2>
      <div className="user-details">
        <div className="avatar">
          {avatarPreview ? (
            <img src={avatarPreview} alt="Avatar Preview" />
          ) : user.avatarUrl ? (
            <img src={user.avatarUrl} alt="User Avatar" />
          ) : (
            <FaUserCircle size={80} color="#ddd" />
          )}
        </div>
        <div className="info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <button className="delete-button" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
      <form className="update-form" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserSettings;
