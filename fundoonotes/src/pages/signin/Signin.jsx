
import React,{useState,useEffect} from "react";
import TextField from '@mui/material/TextField';

import "./signin.css"
import logo from './Googlelogo.png'
import { SignInAPI } from "../../Services/UserServices";
function Signin(){
    // let text= document.querySelector()
    const [userDetails, setUserDetails] = useState({
        Email:"",
        Password: "",
      });

      const [EmailValid, setEmailValid]=useState(false);
      const [PasswordValid, setPasswordValid]=useState(false);
      const [EmailErr, setEmailErr]=useState("");
     const [PasswordErr, setPasswordErr]=useState("");

      const OnChangeValues=(event)=>{
        setUserDetails({ ...userDetails, [event.target.name] : event.target.value})
      }
      const validate = (e) => {
        e.preventDefault()

        let emailRegex = RegExp("^[a-z A-Z 0-9 .+_-]+@[a-z A-Z 0-9 -.]+[.][a-z A-Z 0-9 -]{2,}$");
        let passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
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

          if(!(EmailErr && PasswordErr)){
            SignInAPI(userDetails)
          }
    };
    return (<>
    <div className="signin-container">
    <img src={logo} alt="logo" className="logo"/>
    <div className="signinFirst">
    <p className="pSignin">Sign in</p>
     </div>

     <div className="inputclass">
     {/* <input className="classInput"type="text" name="email" placeholder="Enter Email"/> */}
     <TextField className="classInput" id="outlined-basic" label="Email Id" variant="outlined" size="small"  name="Email"
              value={userDetails.Email}
              onChange={OnChangeValues}
              error={EmailValid}
              helperText={EmailErr} />
     <a className= "forgot" href="#">Forgot Email?</a>
     {/* <input className="classInput"type="password" name="email" placeholder="Enter Password"/> */}
     <TextField className="classInput" type="password" id="outlined-basic" label="Password " variant="outlined" size="small"    name="Password"
              value={userDetails.Password}
              onChange={OnChangeValues}
              error={PasswordValid}
              helperText={PasswordErr}/>
     <a className= "forgot" href="#">Forgot Password?</a>
     </div>
     
     
     <div className="Create-Account">
        <a href="#">Create Account</a>
        <button type="submit" className="Buttonclass"><a href="#" onClick={validate}>Login</a></button>
     </div>
     
     
    </div>
    
    </>)
}
export default Signin;