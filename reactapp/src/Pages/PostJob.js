import React, { useState } from 'react';
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";
import Footer from '../Components/Footer';
import "../Asserts/postjob.css";
import HrSidebar from "../Components/HrSidebar";
import axios from 'axios';
const PostJob = () => {
    const user = useSelector((state)=>state.user);
    const [formData, setFormData] = useState({
      position: '',
      department: '',
      location: '',
      description: '',
      jobminiexp: '',
      salary: '',
      mode: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
      if (formData.position.trim() === '') {
        newErrors.position = 'position is required';
        isValid = false;
      }
  
      if (formData.department.trim() === '') {
        newErrors.department = 'department is required';
        isValid = false;
      }
  
      if (formData.location.trim() === '') {
        newErrors.location = 'Location is required';
        isValid = false;
      }
  
  
      if (formData.description.trim() === '') {
        newErrors.description = 'Description is required';
        isValid = false;
      }
  
      if (formData.jobminiexp.trim() === '') {
        newErrors.jobminiexp = 'Minimum Experience is required';
        isValid = false;
      }
  
      if (formData.salary.trim() === '') {
        newErrors.salary = 'Salary is required';
        isValid = false;
      }
  
      if (formData.department.trim() === '') {
        newErrors.department = 'Department is required';
        isValid = false;
      }
  
      if (formData.mode.trim() === '') {
        newErrors.mode = 'Mode is required';
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Submit the form or perform further actions
        console.log('Form submitted:', formData);
        // Reset the form
        setFormData({
          position: '',
          department: '',
          location: '',
          description: '',
          jobminiexp: '',
          salary: '',
          mode: '',
        });
        setErrors({});
      }
      const token=localStorage.getItem('token');
      try{
        const response=await axios.post(
            "http://localhost:8181/api/v1/job/post",formData,{

              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":"no-cache",
              },
            }) 
      window.alert("Job Posted");
      }catch(error){
      console.log(error);
      }
    }
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

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
          {/* <Link to="/notification" ><IoMdNotifications color="white" fontSize="50px" class=" mt-2" /></Link> */}
            <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
            <h2 class="nav-item text-white mt-3"  >  {user.username}</h2>
            <Link to="/">  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link> 
          </div>
          </div>
          <div class=" navbar-nav container-fluid h4">
          <div class="  nav-link me-auto"> 
            <HrSidebar/>
          </div>
            <div class=" navbar-nav ms-auto">   
            <Link to="/hrhome" class="nav-link " >Home</Link>
            <Link to="/postjob" class="nav-link" >Post Jobs</Link>
            {/* <Link to="/dashboard" class="nav-link" >Dashboard</Link> */}
            </div>
          </div>
        </div>
      </div>
        </nav>
        <div className="container-len">
          <div className="post-job-card">
            <h2>Post a Job</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Position:</label>
                <input type="text" name="position" placeholder='position' value={formData.position} onChange={handleChange} />
                {errors.position && <div className="error">{errors.position}</div>}
              </div>
              <div className="form-group">
                <label>Department:</label>
                <input type="text" name="department" placeholder='department' value={formData.department} onChange={handleChange} />
                {errors.department && <div className="error">{errors.department}</div>}
              </div>
              <div className="form-group">
                <label>Location:</label>
                <input type="text" name="location" placeholder='Location' value={formData.location} onChange={handleChange} />
                {errors.location && <div className="error">{errors.location}</div>}
              </div>
                
              <div className="form-row">
            <div className="form-group">
                <label>Minimum Experience:</label>
                <input type="number" name="jobminiexp" placeholder='Minimum-Experience' value={formData.jobminiexp} onChange={handleChange} />
                {errors.jobminiexp && <div className="error">{errors.jobminiexp}</div>}
                </div>
                
              </div>
              {/* Add Salary Field */}
              <div className="form-group">
                <label>Salary:</label>
                <input type="text" name="salary" placeholder='Salary' value={formData.salary} onChange={handleChange} />
                {errors.salary && <div className="error">{errors.salary}</div>}
              </div>
              {/* Add Department Field */}
              
              {/* Add Mode Field */}
              <div className="form-group">
                <label>Mode:</label>
                
              <select
                name="mode"
                value={formData.degree}
                onChange={handleChange}
                style={{width:"76%", padding:"12px",fontSize:"15px", fontWeight:"bolder", color:"black"}}
              >
                <option value="" style={{fontSize:"15px", fontWeight:"bolder", color:"black"}}>Select Mode of Job</option>
                <option value="PartTime" style={{fontSize:"15px", fontWeight:"bolder", color:"black"}}>PartTime</option>
                <option value="FullTime"style={{fontSize:"15px", fontWeight:"bolder", color:"black"}}>FullTime</option></select>
                {errors.mode && <div className="error">{errors.mode}</div>}
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input type="text" name="description" placeholder='Job-Description' value={formData.description} onChange={handleChange} />
                {errors.description && <div className="error">{errors.description}</div>}
              </div>
              <button type="submit" className="cta-button">Post Job</button>
            </form>
          </div>
          </div>
        <Footer/>
        </div>
        
      );
    };
export default PostJob;