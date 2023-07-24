
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import menu from '../Asserts/menu.svg';
import signout from '../Asserts/box-arrow-right.svg';
import profile from "../Asserts/person-square.svg";
import ApplyCard from "../Components/ApplyCard";
import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {IoMdNotifications} from "react-icons/io";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";
import { BsCurrencyRupee } from "react-icons/bs";

function Jobdesc(){

  const [job,setJob]=useState([]);
  const viewjobid=localStorage.getItem('viewjobid');
  console.log(viewjobid);
  const user = useSelector((state)=>state.user);
  const token=localStorage.getItem('token');
      useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get(
              `http://localhost:8181/api/v1/job/get/${viewjobid}`,
              {
                
                headers:{
                  "Authorization":`Bearer ${token}`,
                  "cache-control":"no-cache",
                },
              }
            )
            setJob(response.data);
            console.log(response.data);
          }catch(error){
            console.log("Error fetching Data "+error);
          }
        };
        fetchData();
       },[]);
    return(
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
        {/* <Link to="/dashboard" class="nav-link" >Dashboard</Link> */}
        </div>
      </div>
    </div>
  </div>
    </nav>
        <div class="container container-len border">
            <div class="row p-3 mx-2">
                <div class="row p-2">
                  <div class="col ps-5 fs-5">
                    <div class="card border-0  "> 
                    <div className="job-card mb-0">
          <Link to ="/applyform"> <div class="btn btn-primary p-3 m-2 float-end" >Apply Now</div> </Link>
      <div className="title">{job.position}</div>
                
          
      <div className="company">{job.department}</div>
      <div className="type">{job.mode}</div>
                
        <>
          <div className="location">{job.location}</div>
          {/* <div className="description">{job.description}</div> */}
          <div className="details">
            <span>Salary: <BsCurrencyRupee fontSize="23px"/> {job.salary}</span>
            <span> | </span>
            <span><i class="fa fa-solid fa-briefcase mx-2"> </i>Min Experience: {job.jobminiexp}</span>
            <span> | </span>
            <span>Date Posted: {job.date}</span>
          </div>
        </>
      
    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="row  p-3 mx-2">
            <div class="row fw-bolder fs-3">
               Description :
              </div>
              <div class="row ps-5 fs-5">
              
              {job.description}
               </div>
            </div>
            <div class="row p-3 mx-2">
            <div class="row fw-bolder fs-3">
               Requirements :
              </div>
              <div class="row ps-5 fs-5">
                Cillum veniam aliqua deserunt dolore consectetur qui elit eu. Sunt magna id nisi veniam. Esse ullamco exercitation adipisicing eiusmod ea cillum minim qui veniam sint deserunt sint amet eiusmod. Anim reprehenderit quis in magna sunt commodo anim magna proident irure est anim eiusmod irure. Incididunt in esse nostrud veniam amet dolore cupidatat tempor qui cupidatat.
ute in dolore eiusmod ex. Quis ipsum est incididunt in officia quis pariatur in sit incididunt ad do sint. Incididunt sint cillum elit ea aute culpa.

Cillum tempor minim do esse ad irure et elit Lorem voluptate veniam proident sunt. Do elit fugiat minim do deserunt ad. Eiusmod sunt esse esse enim labore consectetur nisi adipisicing exercitation esse nulla. Mollit ea quis magna consectetur eiusmod ad. Laborum exercitation ea veniam cillum ipsum.
            </div>
            </div>
        </div>
<Footer/>
    </div>
    )
}
export default Jobdesc;