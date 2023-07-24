import React, { Component } from "react";
import { Routes,Router, Route,Link } from "react-router-dom";
import HrSignInForm from "../Components/HrSignInForm";
import ReactDOM from "react-dom";
import {FiUser} from "react-icons/fi"
import "../Asserts/Login.css";
import login from "../Asserts/10798281_19362653.jpg"
  function HrSignIn(){
    return (
      // <div className="container-box">
        <div className="login-App">
          <div className="appAside">
          <img className="hrimg" src={login} height="600px" width="750px"></img>
            </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <Link
                to="/sign-in" className="pageSwitcherItem-active text-reset">
                Sign In
              </Link>
              <Link exact to="/" className="pageSwitcherItem text-reset">
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
              <Link to="/sign-in" class="reset"><FiUser/>Sign-in as User ?</Link>
              <br/>
              <HrSignInForm/>
            </div>
          </div>
        </div>
        // </div>
      )
  }

export default HrSignIn;
