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
    
    const handleGoogleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        try {
            const response = await axios.post('http://localhost:5500/users', {
                email: credentialResponse.credential,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    
      /* if user exists in db, don't do anything, else post request */
    return(
        <GoogleOAuthProvider clientId={googleClientID}>
            {googleClientID !== "" &&
            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}/>
            }
        </GoogleOAuthProvider>
    )
}

