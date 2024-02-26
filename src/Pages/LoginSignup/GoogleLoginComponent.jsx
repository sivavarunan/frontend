
import React from "react";
import { GoogleLogin } from "react-google-login";
import "./Login.css"; 
import GoogleSignIn from "./GoogleSignIn";

const GoogleLoginComponent = () => {
  const googleLoginSuccess = (response) => {
    console.log("Google login successful", response);
  };
  const googleLoginFailure = (error) => {
    console.error("Google login failed", error);
  };

  return (
    <>
    <GoogleLogin
      render={renderProps => <GoogleSignIn props={renderProps}/>}
      clientId="Your-Google-Client-ID"
      buttonText="Login with Google"
      onSuccess={googleLoginSuccess}
      onFailure={googleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
    </>
  );
};

export default GoogleLoginComponent;
