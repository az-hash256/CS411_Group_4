import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from "@react-oauth/google";

export const Login = ({ onLogin, onLogout }) => {
  const [googleClientID, setGoogleClientID] = useState("");
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn") === "true");

  useEffect(() => {
    async function getID() {
      const response = await axios.get('http://localhost:5500/login/init');
      setGoogleClientID(response.data);
      console.log(response)
    }
    getID();
  }, []);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:5500/auth/google', {
        idToken: credentialResponse.credential
      });
      console.log(response.data);
      setLoggedIn(true);
      sessionStorage.setItem("loggedIn", "true");
      onLogin();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    setLoggedIn(false);
    sessionStorage.setItem("loggedIn", "false");
    onLogout();
  }

  const handleGoogleError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <GoogleOAuthProvider clientId={googleClientID}>
          {googleClientID !== "" &&
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError} />
          }
        </GoogleOAuthProvider>
      )}
    </div>
  )
}