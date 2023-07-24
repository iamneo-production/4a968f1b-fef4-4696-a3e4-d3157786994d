import React from "react";
import { Routes,Router, Route,Link } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import ReactDOM from "react-dom";
import "../Asserts/Login.css";
import login from "../Asserts/71180283343972.jpg";
  function SignUp(){
    return (
      // <div className="container-box">
        <div className="login-App">
          <div className="appAside">
            <img src={login} height="650px" width="695px"></img>        
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <Link
                to="/" className="pageSwitcherItem">
                Sign In
              </Link>
              <Link exact to="/sign-up" className="pageSwitcherItem-active">
                Sign Up
              </Link>
            </div>

            <div className="formTitle">
              <div className="formTitleLink">
                Sign In
              </div>{" "}
              or{" "}
              <div className="formTitleLink-active" >
                Sign Up
              </div>
              <SignUpForm/> 
            </div>
          </div>
        </div>
        // </div>
      )
  }

export default SignUp;
