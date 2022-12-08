
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { RegexSignUp } from "./RegexSignUp";
import "./signup.css";
import logo from "./Googlelogo.png";
import acclogo from "./Googleaccount.svg";
import axios from "axios"
import { SignUpAPI } from "../../Services/UserServices";
function Signup() {
  const [userDetails, setUserDetails] = useState({
    FirstName: "",
    LastName: "",
    Email:"",
    Password: "",
    ConfirmPassword:""
  });

  const [FnameValid, setFnameValid]=useState(false);
  const [LnameValid, setLnameValid]=useState(false);
  const [EmailValid, setEmailValid]=useState(false);
  const [PasswordValid, setPasswordValid]=useState(false);
  const [ConfirmPasswordValid, setConfirmPasswordValid]=useState(false);

  const [FnameErr, setFnameErr]=useState("");
  const [LnameErr, setLnameErr]=useState("");
  const [EmailErr, setEmailErr]=useState("");
  const [PasswordErr, setPasswordErr]=useState("");
  const [ConfirmPasswordErr, setConfirmPassworErr]=useState("");

  const OnChangeValues=(event)=>{
    setUserDetails({ ...userDetails, [event.target.name] : event.target.value})
  }
  
    //  https://jsonplaceholder.typicode.com/posts"
  const validate = (e) => {
    e.preventDefault()
    console.log(userDetails)
    let nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
    let emailRegex = RegExp("^[a-z A-Z 0-9 .+_-]+@[a-z A-Z 0-9 -.]+[.][a-z A-Z 0-9 -]{2,}$");
    let passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    if (
      !nameRegex.test(userDetails.FirstName) &&
      userDetails.FirstName !== ""
    ) {
      setFnameErr( "Invalid Firstname" );
      setFnameValid(true)
    } else {
      setFnameErr( "" );
      setFnameValid(false)
    }
    if (
      !nameRegex.test(userDetails.LastName) &&
      userDetails.LastName !== ""
    ) {
      setLnameErr( "Invalid LastName" );
      setLnameValid(true)
    } else {
      setLnameErr( "" );
      setLnameValid(false)
    }
   
  if (
    !emailRegex.test(userDetails.Email) &&
    userDetails.Email !== ""
  ) {
    setEmailErr( "Invalid Email" );
    setEmailValid(true)
  } else {
    setEmailErr("" );
    setEmailValid(false)
  }
  if (
    !passwordRegex.test(userDetails.Password) &&
    userDetails.Password !== ""
  ) {
    setPasswordErr( "Invalid Password" );
    setPasswordValid(true)
  } else {
    setPasswordErr("" );
    setPasswordValid(false)
  }
  if (
    !(userDetails.ConfirmPassword===userDetails.Password) &&
    userDetails.ConfirmPassword !== ""
  ) {
    setConfirmPassworErr( "Password not match" );
    setConfirmPasswordValid(true)
  } else {
    setConfirmPassworErr("" );
    setConfirmPasswordValid(false)
  }
  
  if(!(FnameErr && LnameErr &&EmailErr&&PasswordErr && ConfirmPasswordErr)){
    SignUpAPI(userDetails);
  }
 };
  return (
    <>
      <div className="Main-Container">
        <div className="ContainerFirst">
          <div className="logoclass">
            <img src={logo} alt="logo" className="logo1" />
          </div>
          <p className="Pclass">Create your Google account</p>
          <div className="flexDiv">
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              size="small"
              className="signup-input"
              name="FirstName"
              value={userDetails.FirstName}
              onChange={OnChangeValues}
              error={FnameValid}
              helperText={FnameErr}
              
            />
         
            {/* <span>{err}</span> */}
            <TextField
              id="outlined-basic1"
              label="Last name"
              variant="outlined"
              size="small"
              className="signup-input"
              name="LastName"
              value={userDetails.LastName}
              onChange={OnChangeValues}
              error={LnameValid}
              helperText={LnameErr}
          
            />
            {/* <input type="text" name="Last name" placeholder="Last name" className="signup-input "/> */}
          </div>
          {/* <div className="errorblock">
               <Box  component="span">{msg.FirstName}</Box>
               </div> */}
          <div className="EmailInput">
            {/* <input className="EmailInputTag"type="text" name="Email" placeholder="Email Id"/> */}
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              size="small"
              className="EmailInputTag"
              name="Email"
              value={userDetails.Email}
              onChange={OnChangeValues}
              error={EmailValid}
              helperText={EmailErr}
            />
          </div>
          <div className="flexDiv">
            {/* <input type="text" name="Password" placeholder="Password" className="signup-input "/> */}
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              size="small"
              className="signup-input "
              name="Password"
              value={userDetails.Password}
              onChange={OnChangeValues}
              error={PasswordValid}
              helperText={PasswordErr}

            />
            {/* <input type="text" name="Confirm Password" placeholder="Confirm Password" className="signup-input "/> */}
            <TextField
              id="outlined-basic"
              type="password"
              label="Confirm password"
              variant="outlined"
              size="small"
              className="signup-input "
              name="ConfirmPassword"
              value={userDetails.ConfirmPassword}
              onChange={OnChangeValues}
              error={ConfirmPasswordValid}
              helperText={ConfirmPasswordErr}
            />
          </div>

          <div className="SignIn">
            <a href="#" >Sign in instead</a>
            <button type="submit" className="ButtonCreate">
              <a href="#" onClick={validate}>Create</a>
            </button>
          </div>
        </div>

        <div className="containerSecond">
          <img className="acclogo" src={acclogo} alt="acclogo" />
        </div>
      </div>
    </>
  );
};
export default Signup;


