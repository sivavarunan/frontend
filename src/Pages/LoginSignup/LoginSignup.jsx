import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
// import GoogleLoginComponent from "./GoogleLoginComponent";
import "./Login.css"; 



const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  return (
    <div className="wrapper">
      {action === "Login" ? (
        <Login onSignupClick={() => handleActionChange("Sign Up")} />
      ) : (
        <Signup onLoginClick={() => handleActionChange("Login")} />
      )}
      &nbsp;
      {/* <GoogleLoginComponent/> */}
    </div>
  );
};

export default LoginSignup;
