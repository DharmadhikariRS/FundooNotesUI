
import React,{useState,useEffect}from "react"
import Signup from "./Signup"
  
export function RegexSignUp(value,setValue,valid,setValid,err,setErr){
// const [err,setErr]=useState("")
  // const[value,setValue]=useState("")
  // const[valid,setValid]=useState(false)
  validate();
  const validate=(e)=>{
   let nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
    setValue(e.target.value)
    setErr("Enter correct name")
  if (nameRegex.test(value)) {
   setValid(true)
   setErr("")
    }else{
      setValid(false)
    }
// Signup.validCall(value,valid,err)
  }
// validcall(value,err);
}