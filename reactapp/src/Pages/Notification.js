import ApplyCard from "../Components/ApplyCard";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../Asserts/landing.css";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";
import React, { useState } from "react";
import Footer from "../Components/Footer";
function Notification(){
    const [notification,setNotification] = useState([]);
    const token=localStorage.getItem('token');
    const emailid=localStorage.getItem('emailid');
      useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get(
              `http://localhost:8181/api/v1/notification/getbyemail/${emailid}`,

              {
                
                headers:{
                  "Authorization":`Bearer ${token}`,
                  "cache-control":"no-cache",
                },
              }
            )
            
            setNotification(response.data);
            console.log(response.data);
          }catch(error){
            console.log("Error fetching Data "+error);
          }
        };
        fetchData();
       },[]);
            
    
          const user = useSelector((state)=>state.user);
    return (
        <div class="container-fluid px-0 ">
    <nav class="navbar navbar-expand-lg navbar-dark bg-black shadow py-3 my-0 h3 fixed-top" >
  <div class="container-fluid px-0">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-md-column " id="navbarNavAltMarkup">
    <div class=" navbar-nav container-fluid h4">
      <div class="  nav-link me-auto"> 
        
      <a class="navbar-brand" href="#">ATS</a>
        </div>
      <div class="navbar-nav ms-auto " >
        <Link to="/notification" ><IoMdNotifications color="white" fontSize="50px" class=" mt-2" /></Link>
        <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
        <h2 class="nav-item text-white mt-3"  >  {user.username}</h2>
        <Link to="/">  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link>  
      </div>
      </div>
      <div class=" navbar-nav container-fluid h4">
      <div class="  nav-link me-auto"> 
        <Sidebar/>
      </div>
        <div class=" navbar-nav ms-auto">   
        <Link to="/home" class="nav-link " >Home</Link>
        <Link to="/apply" class="nav-link" >Apply for Job</Link>
        <Link to="/dashboard" class="nav-link" >Dashboard</Link>
        </div>
      </div>
    </div>
  </div>
  </nav>

<div class="container-len">
  <div class="container apply-container border my-5 px-5">
<div class="row">
              <div class="col">
            {notification.map((job) =>(
        <div class="card my-5 shadow">
            <div class="card-header border-0">
                <h3 class="card-title fw-bold fs-3">{job.title}</h3>
                <h5 class="ms-auto">- {job.date}</h5>
                
            </div>
                <Link to="#" class="reset">  
            <div class="card-body pt-0">
                <div class="card-cust">
                    <div class="card-cust-title-wrapper">
                        
                        <div class="card-cust-position">
                            <span class="card-cust-title fw-bold fs-4">{job.department}</span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <ol class="requirements list-unstyled">
                        <li class="req-point"><p class="p-3 fs-4"><span>{job.description} </span></p></li>
                           
                    </ol>
                </div>
            </div>
</Link>
        </div>
        ))}
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>

    )
}
export default Notification;