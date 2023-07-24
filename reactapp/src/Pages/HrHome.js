import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer";
import menu from '../Asserts/menu.svg';
import signout from '../Asserts/box-arrow-right.svg';
import profile from "../Asserts/person-square.svg";
import ApplyCard from "../Components/ApplyCard";
import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useDispatch } from "react-redux";
import "../Asserts/Sidebar.css";
import { useNavigate } from "react-router-dom";
import landimg2 from "../Asserts/7273245_3610759.svg"
import landimg3 from "../Asserts/undraw_job_offers_re_634p.svg"
import landimg4 from "../Asserts/undraw_people_search_re_5rre.svg"
import HrSidebar from "../Components/HrSidebar";
import {IoMdNotifications} from "react-icons/io";

function HrHome(){
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
      <div class="container-home p-0">
      <div class="row ">
        <div class="col">
        <h1 class="text-center ms-5 mt-5  p-2">Find Job According to Your Preference</h1>
              <p class="text-center h4 img-text">
              Welcome to [Your Job Searching Website]! We are your go-to platform for finding the perfect job. Our extensive database offers a wide range of opportunities across industries, allowing you to discover the right fit for your skills and aspirations. With advanced search and filtering tools, your job search becomes efficient and tailored to your needs. We provide resume building and optimization tools, along with expert advice and resources to support your career growth. Join our inclusive community, connect with professionals, and unlock networking opportunities. We are committed to promoting diversity, equity, and inclusion, ensuring equal access to opportunities for all. Start your journey with us today and take the next step towards a fulfilling career.
</p>
              <Link to ="/postjob" ><div class="btn btn-dark get p-4">Get Started</div></Link>
            </div>
            <div class="col-5">
        <img src={landimg3} class="float-end" height="650px" width="650px"></img>
        </div>
      </div>
      <div class="container-home-2 p-0">
        <div class="row">
            <div class="col-5">
        <img src={landimg2} height="600px" width="600px"></img>
          </div>
          <div class="col">
          <h1 class="text-center ms-5 mt-5 text-white p-2">A StreamLined Hiring Process</h1>
              <p class="text-center h4 text-white img-text">
              Welcome to [Your Job Searching Website]! We are your go-to platform for finding the perfect job. Our extensive database offers a wide range of opportunities across industries, allowing you to discover the right fit for your skills and aspirations. With advanced search and filtering tools, your job search becomes efficient and tailored to your needs. We provide resume building and optimization tools, along with expert advice and resources to support your career growth. Join our inclusive community, connect with professionals, and unlock networking opportunities. We are committed to promoting diversity, equity, and inclusion, ensuring equal access to opportunities for all. Start your journey with us today and take the next step towards a fulfilling career.
</p>
            </div>
          </div>
          </div>
        <div class="container-home-3 p-0">
          <div class="row ">
            <div class="col">
              <h1 class="text-center ms-5 mt-5  p-2">Get Hired By Leading Companies</h1>
              <p class="text-center h4 img-text">
              Welcome to [Your Job Searching Website]! We are your go-to platform for finding the perfect job. Our extensive database offers a wide range of opportunities across industries, allowing you to discover the right fit for your skills and aspirations. With advanced search and filtering tools, your job search becomes efficient and tailored to your needs. We provide resume building and optimization tools, along with expert advice and resources to support your career growth. Join our inclusive community, connect with professionals, and unlock networking opportunities. We are committed to promoting diversity, equity, and inclusion, ensuring equal access to opportunities for all. Start your journey with us today and take the next step towards a fulfilling career.
              
</p>
            </div>
          <div class="col-5">
        <img src={landimg4} className="imgpos"  height="500px" width="500px"></img>
        </div>
        </div>

        </div>
      <div class="container">
      <h1 class="text-center ms-5 mt-5  p-2">About Us</h1>
              <p class="text-center h5 ">
              Welcome to [Your Job Searching Website]! We are your go-to platform for finding the perfect job. Our extensive database offers a wide range of opportunities across industries, allowing you to discover the right fit for your skills and aspirations. With advanced search and filtering tools, your job search becomes efficient and tailored to your needs. We provide resume building and optimization tools, along with expert advice and resources to support your career growth. Join our inclusive community, connect with professionals, and unlock networking opportunities. We are committed to promoting diversity, equity, and inclusion, ensuring equal access to opportunities for all. Start your journey with us today and take the next step towards a fulfilling career.
</p>
          
      <div class="row">
          <div class="col">
        
            <Footer/>
        </div>
        </div>
        </div>
      </div>
      </div>

</div>
    )
}
export default HrHome;
