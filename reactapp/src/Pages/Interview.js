
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useDispatch } from "react-redux";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";
import { useEffect } from "react";
import "../Asserts/landing.css";
import { useState } from "react";
import axios from "axios";
function Interview(){

    const user = useSelector((state)=>state.user);
    const [intCard,setIntCard] = useState([]);
    const dispatch =useDispatch();
    const emailid=localStorage.getItem('emailid');
    const token=localStorage.getItem('token');
    const handleLogout =()=>{
      dispatch({type:"LOGOUT"});
    };
    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await axios.get(
            `http://localhost:8181/api/v1/interview/getbyemail/${emailid}`,

            {
              
              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":"no-cache",
              },
            }
          )
          
          setIntCard(response.data);
          console.log(intCard);
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
        <Link to="/"  onClick={handleLogout}>  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link>  
      </div>
      </div>
      <div class=" navbar-nav container-fluid h4">
      <div class="  nav-link me-auto"> 
        <Sidebar/>
      </div>
        <div class=" navbar-nav ms-auto">   
        <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
        <Link to="/apply" class="nav-link" >Apply for Job</Link>
        <Link to="/dashboard" class="nav-link" >Dashboard</Link>
        </div>
      </div>
    </div>
  </div>
    </nav>

<div className="cont">
  <div class="container border my-5 px-5">
  {intCard.map((job) => (
    <div class="row">

              <div class="col">
        <div class="card my-5 shadow">
            <div class="card-header border-0">
                <h3 class="card-title">{job.department}</h3>
            </div>
                {/* <Link to="/jobdesc" class="reset">   */}
            <div class="card-body pt-0">
                <div class="card-cust">
                    <div class="card-cust-title-wrapper">
                        {/* <div class="comp-prof">
                            
                        </div> */}
                        <div class="card-cust-position">
                            <span class="card-cust-title">Date : {job.date}</span>
                            <span class="card-cust-date">Time : {job.time}</span>
                            <span class="card-cust-date">Link : {job.link}</span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <ol class="requirements list-unstyled">
                      
                        <li class="req-point"><p class="p-1"><span>Position : {job.position}</span></p></li>
                        
                    </ol>
                </div>
            </div>
{/* </Link> */}
        </div>
    </div>
</div>
  ))}
</div>
</div>
</div>

    )
    }

export default Interview;