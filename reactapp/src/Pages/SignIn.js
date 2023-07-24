import React, { Component } from "react";
import { Routes,Router, Route,Link } from "react-router-dom";
import SignInForm from "../Components/SignInForm";
import ReactDOM from "react-dom";
import {RiAdminFill} from "react-icons/ri";
import "../Asserts/Login.css";
import login from "../Asserts/9319773_4136916.jpg";
  function SignIn(){
    return (
      // <div className="container-box">
        <div className="login-App">
          <div className="appAside">
          <img src={login} height="650px" width="695px"></img>
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <Link
                to="/" className="pageSwitcherItem-active text-reset">
                Sign In
              </Link>
              <Link exact to="/sign-up" className="pageSwitcherItem text-reset">
                Sign Up
              </Link>
            </div>

            <div className="formTitle">
              <div className="formTitleLink-active">
                Sign In
              </div>{" "}
              or{" "}
              <div  className="formTitleLink" >
                Sign Up
              </div>
              <br/>
              <br/>
              <Link to ="/hrsignin"  className="reset" ><RiAdminFill/> Sign-in as Admin ?</Link>
              <br/>
              <SignInForm/>
            </div>
          </div>
        </div>
        // </div>
      )
  }

export default SignIn;
