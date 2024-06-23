import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Divider from "./Divider";
import api from "../../api/api"; // Import the api.js file
import { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MdDangerous } from "react-icons/md";
import PasswordInput from "./PasswordInput";



const Signup = ({ onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [gmailError, setGmailError]  = useState(false);
  const[usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (event) => {
    if (event && event.target && event.target.value) {
      setPassword(event.target.value);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the form from submitting automatically

    try {
      console.log(username, email, password);

      if (!username || !email || !password) {
        toast.error("All fields are required");
        return;
      }

      if (!validateEmail(email)) {
        setEmailError(true);
        toast.error("Invalid email address");
        return;
      }

      if (password.length < 6) {
        setPasswordError(true);
        toast.error("Password must be at least 6 characters long");
        return;
      }


      const responseData = await api.signUp(username, email, password);
      console.log(responseData?.message); // Output the response data
      if(responseData?.message !== `Request failed with status code 400`){
        setGmailError(false)
        setUsernameError(false)
        onLoginClick();
        toast.success(`Sign up Success!!`)
        
      // }else if(responseData?.message !== `Request failed with status code 401`){
      //   setGmailError(true)
      //   setUsernameError(true)
      //   toast.dismiss()
      //   toast.error(`Sign up Failed!!`)

      }else{
        setGmailError(true)
        setUsernameError(true)
        toast.dismiss()
        toast.error(`Sign up Failed!!`)
      }
      


      // Optionally, you can redirect the user to the login page upon successful signup
      //  // Assuming `onLoginClick` is a function passed from the parent component to switch to the login view

    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response?.data?.message){
        toast.error(error.response?.data?.message)
      }
      // Handle signup error, display error message, etc.
    }

  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
    

  };
 
  return (
    <form>
      <h1 className="text">Sign Up</h1>
      <div className="input-box">
        <input type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
        <label class ="xy">Username</label>
        <FaUserCircle className="icon" />
      </div>
      {usernameError && (
      <div className="errorh"><MdDangerous className="iconx"/> Username alredy exists</div>)}
      <div className="input-box">
        <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        <label class ="xy">E-mail</label>
        <MdEmail className="icon" />
      </div>
      {gmailError && <div className="errorh"><MdDangerous className="iconx" /> Email already exists</div>}
      {/* {emailError && <div className="errorh"><MdDangerous className="iconx"/> Invalid email address</div>} */}
      <div className="box">
        {/* <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /> */}
        
        <PasswordInput placeholder="Password" onChange={setPassword} />
        <GiPadlock className="icon" />
        {/* <label class ="xy">Password</label> */}
        
      </div>
      
      {/* <PasswordStrength placeholder="Password" onChange={handleChange} /> */}
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
