import React from 'react';
import "./Login.css";
import { Button } from "@mui/material";
// import Button from "@mui/material/Button";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../firebase";
import Logo_img from "../../img/Linkedin_logo.png"
const Login = ({ setUser }) => {

  const signIn = () => {

    signInWithPopup(auth, provider).then( (result) => {
      setUser(result.user);
    })
    .catch((err) => {
        console.log(err);
    });

  };


  return (
    <div className='login'>

      <div className='login__logo'>
        <img
          src={Logo_img}
          alt="fblogo"
        />

        <Button onClick={signIn}> Sign In With Google  </Button>
      </div>

    </div>
  );
};

export default Login;
