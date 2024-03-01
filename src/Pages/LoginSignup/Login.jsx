import React, { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Divider from "./Divider";
import api from "../../api/api"; // Import the api.js file
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Home from "../Home/Home";

const Login = ({ onSignupClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting automatically

    try {     
      console.log(email, password);

      if (!email || !password) {
        toast.error("All fields are required");
        return;
      }

      const responseData = await api.login(email, password);
      // console.log(responseData); // Output the response data
      console.log(responseData?.message); // Output the response data
      if(responseData?.message !== `Request failed with status code 401`){
        toast.success(`Login Success!!`)
        navigate('/');
      }

      // Optionally, you can redirect the user to the login page upon successful signup
      // onLoginClick(); 
      // Assuming `onLoginClick` is a function passed from the parent component to switch to the login view

      // Clear the form fields after logging
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error("Error logging up:", error);
      if (error.response?.data?.message){
        toast.error(error.response?.data?.message)
      }
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
