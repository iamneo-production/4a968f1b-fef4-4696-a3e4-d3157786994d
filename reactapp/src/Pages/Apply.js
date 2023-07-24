import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

import ApplyCard from "../Components/ApplyCard";
import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {IoMdNotifications} from "react-icons/io";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";

function Apply(){
  
  const user = useSelector((state)=>state.user);
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
          <Link to="/apply" class="nav-link active" aria-current="page" >Apply for Job</Link>
          <Link to="/dashboard" class="nav-link" >Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
      </nav>
      <div class="container-len ">
        
        
        <ApplyCard/>

      </div>
      <Footer/>
      </div>

    )
}
export default Apply;