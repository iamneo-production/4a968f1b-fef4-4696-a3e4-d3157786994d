import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
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
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Feedback = () => {
    const token=localStorage.getItem('token');
    const emailid=localStorage.getItem('emailid');
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState([]);
  const user = useSelector((state)=>state.user);

    const dispatch =useDispatch();

    const handleLogout =()=>{
      dispatch({type:"LOGOUT"});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newFeedback = {
          email,
          feedback,
          id: new Date().getTime(), 
        };

        setSubmittedFeedback([...submittedFeedback, newFeedback]);
        try{
            const response=await axios.post( `http://localhost:8080/api/v1/feed/addFeedback`,
            newFeedback,
            {
              headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                "Authorization":`Bearer ${token}`,
                "cache-control":"no-cache",
              },
            })
            
          }catch(error){
            console.log(error);
          }
          setEmail('');
          setFeedback('');
          }

    useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get(
              `http://localhost:8080/api/v1/feed/getFeedback`,
              {
                
                headers:{
                  "Authorization":`Bearer ${token}`,
                  "cache-control":"no-cache",
                },
              }
            )
            localStorage.setItem('id',response.data.id);
            setSubmittedFeedback(response.data);
          
            console.log(response.data);
          }catch(error){
            console.log(submittedFeedback);
            console.log("Error fetching Data "+error);
          }
        };
        fetchData();
       },[]);
    
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
    <div class="container container-len ">
        <div class="intcust">
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="feedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </Form.Group>
<br></br>
      <Button variant="primary" type="submit" className="w-100">
        Submit Feedback
      </Button>
    </Form>
    </div>
    <br></br>
    <div class="intcust">
    <h3>PREVIOUS FEEDBACKS :</h3>
    <br></br>
    {submittedFeedback.map((job) => (
        <div className="p-4 border rounded">
        <h4 class="ms-4">{job.feedback}</h4>
        <br></br>
        </div>
    ))}
    </div>
    </div>
    </div>
  );
};

export default Feedback;
