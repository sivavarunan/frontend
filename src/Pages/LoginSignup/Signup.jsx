import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Divider from "./Divider";
import api from "../../api/api"; // Import the api.js file
import { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Signup = ({ onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [gmailError, setGmailError]  = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the form from submitting automatically

    try {
      console.log(username, email, password);
      const responseData = await api.signUp(username, email, password);
      console.log(responseData?.message); // Output the response data
      if(responseData?.message !== `Request failed with status code 400`){
        setGmailError(false)
        onLoginClick();
        toast.success(`Login Success!!`)
      }else{
        setGmailError(true)
        toast.dismiss()
        toast.error(`Login Failed!!`)

      }

      // Optionally, you can redirect the user to the login page upon successful signup
      //  // Assuming `onLoginClick` is a function passed from the parent component to switch to the login view

    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error, display error message, etc.
    }
  };

  return (
    <form>
      <h1 className="text">Sign Up</h1>
      <div className="input-box">
        <input type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
        <FaUserCircle className="icon" />
      </div>
      <div className="input-box">
        <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        <MdEmail className="icon" />
      </div>
      {gmailError && (
      <div className="input-box">Email already exists</div>)}
      <div className="input-box">
        <input type="password" placeholder="Password" required  onChange={e => setPassword(e.target.value)} />
        <GiPadlock className="icon" />
      </div>
      <div>
        <button type="button" className="submit gray" onClick={handleSignup}>
          Sign up
        </button>
        <Divider />
        <button type="button" className="submit" onClick={onLoginClick}>
          Log in
        </button>
      </div>

    </form>
  );
};

export default Signup;
