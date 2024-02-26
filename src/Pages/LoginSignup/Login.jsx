import React, { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Divider from "./Divider";
import api from "../../api/api"; // Import the api.js file

const Login = ({ onSignupClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting automatically

    // Perform login authentication here, you can use API calls similar to the signup component
    try {
      console.log(email, password);
      const responseData = await api.login(email, password);
      console.log(responseData); // Output the response data
      // Optionally, you can redirect the user to the login page upon successful signup
      onLoginClick(); 
      // Assuming `onLoginClick` is a function passed from the parent component to switch to the login view

      // Clear the form fields after logging
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error logging up:", error);
      // Handle signup error, display error message, etc.
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1 className="text">Login</h1>
      <div className="input-box">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MdEmail className="icon" />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <GiPadlock className="icon" />
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="a">Forgot password? </a>
      </div>
      <button type="submit" className="submit gray">
        Login
      </button>
      <Divider />

      <button className="submit" onClick={onSignupClick}>
        Sign up
      </button>
    </form>
  );
};

export default Login;
