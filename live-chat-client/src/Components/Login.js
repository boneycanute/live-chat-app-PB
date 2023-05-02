import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Button, TextField } from "@mui/material";

function Login() {
  const [login, setLogin] = useState(false);
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="welcome-logo" />
      </div>
      {login && (
        <div className="login-box">
          <p className="login-text">Login to your Account</p>
          <TextField
            id="standard-basic"
            label="Enter User Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            color="secondary"
          />
          <Button variant="outlined" color="secondary">
            Login
          </Button>
          <p>
            Dont have an Account ?{" "}
            <span
              className="hyper"
              onClick={() => {
                setLogin(false);
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
      )}
      {!login && (
        <div className="login-box">
          <p className="login-text">Create your Account</p>
          <TextField
            id="standard-basic"
            label="Enter User Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="standard-basic"
            label="Enter Email Address"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            color="secondary"
          />
          <Button variant="outlined" color="secondary">
            Sign Up
          </Button>
          <p>
            Already have an Account ?{" "}
            <span
              className="hyper"
              onClick={() => {
                setLogin(true);
              }}
            >
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
