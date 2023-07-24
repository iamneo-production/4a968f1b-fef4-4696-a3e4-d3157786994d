
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Asserts/landing.css";
import "../Asserts/Login.css";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import  {useEffect, useState}  from 'react';    
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import {IoMdNotifications} from "react-icons/io";
function Applyform(){
    const navigate=useNavigate();
    const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const viewjobid=localStorage.getItem('viewjobid');
  const emailid=localStorage.getItem('emailid');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateForm()){
      
    const token=localStorage.getItem('token');
      try{
        await axios.put(
            `http://localhost:8181/api/v1/applied/put/${emailid}/${viewjobid}`,{

              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":"no-cache",
              },
            }) 
            navigate("#");
      }catch(error){
      console.log(error);
      }
    }
    
  }
  const handleChange = (e) => {
    
    const { name, value } = e.target;

    if(name === 'fullname') {
      setFullname(value);
      clearError("fullname");
    }
    else if (name=== 'email') {
      setEmail(value);
      clearError("email");
    } else if (name === 'resume') {
      setResume(value);
      clearError("resume");
    }

  };
  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };


  const validateForm = () => {
    const verrors = {};
  
    if (!fullname) {
      verrors.fullname = 'fullname is required';
    }
    if (!email) {
      verrors.email = 'E-mail is required';
    } 
  
    if (!resume) {
      verrors.resume = 'resume is required';
    }
    if(Object.keys(verrors).length>0){
      setErrors(verrors);
      return;
    }
    else{
        return true;
      
    }
    
  };

  const user = useSelector((state)=>state.user);
    return (
        <div>
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
    </div>
    <div class="container-len">
    <div className="forapply">
        <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
            <label className="formFieldLabel" >
              fullname
            </label>
            <input
              type="text"
              id="fullname"
              className="formFieldInput"
              placeholder="Enter your Fullname"
              name="fullname"
              
              value={fullname}
              onChange={handleChange}
            />
            {errors.fullname && <div className="label-error">{errors.fullname}</div>}
          </div>
          <br></br>
          <div className="formField">
            <label className="formFieldLabel" >
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <div className="label-error">{errors.email}</div>}
          </div>
          
          <div className="formField">
          <label className="formFieldLabel" htmlFor="resume">Resume</label>
          <br></br>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
          {errors.resume && <div className="label-error">{errors.resume}</div>}
        </div>
           <br></br>
          <div className="formField">
            <button className="formFieldButton">Apply Now</button>{" "}
          </div>


          
        </form>
      </div>
        
    </div>
<Footer/>
    </div>
    )
}
export default Applyform;