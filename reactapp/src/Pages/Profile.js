import ApplyCard from "../Components/ApplyCard";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../Asserts/landing.css";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import "../Asserts/profile.css";
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";

import Footer from "../Components/Footer";

import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { RiCalendarLine, RiMedalLine, RiUserStarLine } from 'react-icons/ri';

function Profile() {
    const user = useSelector((state)=>state.user);
    const [profileData, setProfileData] = useState({
    fname: '',
    lname: '',
    address: '',
    email: '',
    contactno: '',
    degree: '',
    specialization: '',
    cgpa: 0,
    miniexp: 0,
    skills: ['React, JavaScript, HTML, CSS'],
    passyr: 2003
    });

    const token=localStorage.getItem('token');
    const emailid=localStorage.getItem('emailid');
      
    
    const [editMode, setEditMode] = useState(false);
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    };
    
    const handleEditClick = () => {
    setEditMode(true);
    };
    const id=localStorage.getItem('id');
    const handleSaveClick = async() => {

        try{
          await axios.put(
            `http://localhost:8181/api/v1/user/put/${id}`,
            profileData,
            {
              
              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":"no-cache",
              },
            }
          )
          
        
          console.log(profileData);
        }catch(error){
          console.log(id);
          console.log("Error fetching Data "+error);
        }
        setEditMode(false);
      };
      useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get(
              `http://localhost:8181/api/v1/user/getemail/${emailid}`,
              {
                
                headers:{
                  "Authorization":`Bearer ${token}`,
                  "cache-control":"no-cache",
                },
              }
            )
            localStorage.setItem('id',response.data.id);
            setProfileData({
              fname:response.data.fname,
              lname:response.data.lname,
              address:response.data.address,
              email:response.data.email,
              contactno:response.data.contactno,
              degree:response.data.degree,
              specialization:response.data.specialization,
              cgpa:response.data.cgpa,
              passyr:response.data.passyr,
              skills:['React, JavaScript, HTML, CSS'],
              miniexp:response.data.miniexp,

            })
          
            console.log(response.data);
          }catch(error){
            console.log(emailid);
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
            <Link to="/dashboard" class="nav-link" >Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
        </nav>
            <div class="container container-len">
    
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile">
          <div className="profile-section">
            <label><FaUser className="icon" /> First Name:</label>
            {editMode ? (
              <input
                type="text"
                name="fname"
                value={profileData.fname}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.fname}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaUser className="icon" /> Last Name:</label>
            {editMode ? (
              <input
                type="text"
                name="lname"
                value={profileData.lname}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.lname}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaMapMarkerAlt className="icon" /> Address:</label>
            {editMode ? (
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.address}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaEnvelope className="icon" /> Email:</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.email}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaPhone className="icon" /> Contact Number:</label>
            {editMode ? (
              <input
                type="text"
                name="contactno"
                value={profileData.contactno}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.contactno}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaGraduationCap className="icon" /> Degree:</label>
            {editMode ? (
              <input
                type="text"
                name="degree"
                value={profileData.degree}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.degree}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiUserStarLine className="icon" /> Specialization:</label>
            {editMode ? (
              <input
                type="text"
                name="specialization"
                value={profileData.specialization}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.specialization}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiMedalLine className="icon" /> CGPA:</label>
            {editMode ? (
              <input
                type="number"
                name="cgpa"
                step="0.01"
                min="0"
                max="10"
                value={profileData.cgpa}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.cgpa}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiCalendarLine className="icon" /> Work Experience:</label>
            {editMode ? (
              <input
                type="text"
                name="miniexp"
                value={profileData.miniexp}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.miniexp}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiUserStarLine className="icon" /> Skills:</label>
            {editMode ? (
              <input
                type="text"
                name="skills"
                value={profileData.skills}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.skills.join(', ')}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiCalendarLine className="icon" /> Passing Year:</label>
            {editMode ? (
              <input
                type="text"
                name="passyr"
                value={profileData.passyr}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.passyr}</span>
            )}
          </div>
          <div className="profile-buttons">
            {editMode ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;