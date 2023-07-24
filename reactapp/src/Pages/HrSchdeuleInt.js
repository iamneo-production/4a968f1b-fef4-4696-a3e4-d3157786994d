
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useDispatch } from "react-redux";
import "../Asserts/Sidebar.css";

import HrSidebar from "../Components/HrSidebar";
import {IoMdNotifications} from "react-icons/io";
import Footer from "../Components/Footer";
import InterviewForm from "./InterviewForm";

function HrScheduleInt(){
    const user = useSelector((state)=>state.user);

    const dispatch =useDispatch();

    const handleLogout =()=>{
        dispatch({type:"LOGOUT"});
      };
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
        {/* <Link to="/notification" ><IoMdNotifications color="white" fontSize="50px" class=" mt-2" /></Link> */}
        <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
        <h2 class="nav-item text-white mt-3"  >  {user.username}</h2>
        <Link to="/"  onClick={handleLogout}>  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link>  
      </div>
      </div>
      <div class=" navbar-nav container-fluid h4">
      <div class="  nav-link me-auto"> 
        <HrSidebar/>
      </div>
        <div class=" navbar-nav ms-auto">   
        <Link to="/hrhome" class="nav-link active" aria-current="page">Home</Link>
        <Link to="/postjob" class="nav-link" >Post Jobs</Link>
        {/* <Link to="#" class="nav-link" >Dashboard</Link> */}
        </div>
      </div>
    </div>
  </div>
    </nav>
    <div>
      <div class="container container-len">
        <div class=" container mt-5 ">
          <div className="intcust">

        <InterviewForm/>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
      </div>

    )
}
export default HrScheduleInt;