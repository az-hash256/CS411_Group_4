import { React, useEffect, useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from "@react-oauth/google";


export const Login = () => {
    const [googleClientID, setGoogleClientID] = useState("");


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
        } catch (error) {
          console.log(error);
        }
      };
    
    const handleGoogleError = () => {
        console.log('Login Failed');
      };
      /* if user exists in db, don't do anything, else post request */
    return(
        <GoogleOAuthProvider clientId={googleClientID}>
            {googleClientID !== "" &&
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}/>
            }
        </GoogleOAuthProvider>
    )
}

