

import React from "react";
import '../Asserts/JobCard.css';
import { Link, useNavigate } from "react-router-dom";
import {BsCurrencyRupee} from "react-icons/bs";
import { useState,useEffect } from "react";
import {TbTextPlus} from "react-icons/tb"
import {TbChecks} from "react-icons/tb";


import axios from "axios";
function SavedCard(){

  const [applyJob,setApplyJob]=useState([]);
  const navigate=useNavigate();
          
      const token=localStorage.getItem('token');
      const emailid=localStorage.getItem('emailid');
      useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get(
              `http://localhost:8181/api/v1/savedjob/getbyemail/${emailid}`,

              {
                
                headers:{
                  "Authorization":`Bearer ${token}`,
                  "cache-control":"no-cache",
                },
              }
            )
            
            setApplyJob(response.data);
            setFilteredJobs(response.data);
            console.log(filteredJobs);
          }catch(error){
            console.log("Error fetching Data "+error);
          }
        };
        fetchData();
       },[]);
      const handleBookmarkToggle = async (job) => {
        //   try{
        //       await axios.put(
        //           `http://localhost:8181/api/v1/savedjob/getbyemail/${emailid}/${job.id}`,
        //           job,
        //           {
                      
        //               headers:{
        //                   "Authorization":`Bearer ${token}`,
        //                   "cache-control":"no-cache",
        //                 },
        //             }
        //             )
                    
                    
        //         }catch(error){
        //             console.log(job);
        //             console.log("Error fetching Data "+error);
        //         }
            const updatedJobs = filteredJobs.map( (j) => {
            if (j.id === job.id) {
            return { ...j, isSaved: !j.isSaved };
          }
          return j;
        });
    
        setFilteredJobs(updatedJobs);
      };
      
      const [searchQuery, setSearchQuery] = useState('');
      const [filteredJobs, setFilteredJobs] = useState(applyJob);
    
      const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const filtered = applyJob.filter((job) => {
          if (!job) return false; 
          const position = job.position.toLowerCase();
          const department = job.department.toLowerCase();
          const location = job.location.toLowerCase();
    
          return position.includes(query) || department.includes(query) || location.includes(query);
        });
    
        setFilteredJobs(filtered);
      };

  return(
    <div>
    <div class="input-group justify-content-center">
        <div class="form-outline">
          <input id="search-input" type="search"  class="form-control" placeholder="Search" 
          value={searchQuery}
          onChange={handleSearchChange} />
        </div>
        <button id="search-button" type="button" class="btn btn-primary">
        <i class="fa fa-search"></i>
        </button>
    </div>

  <div class=" apply-container border my-5 px-4">
  <div className="container mt-5">
      <div className="row">
        {filteredJobs.map((job, index) => (
          <div key={index} className="col-md-6 mb-4">
            <h3 class="float-end me-3 mt-2" onClick={() => handleBookmarkToggle(job)}>

                       {job.isSaved ? (<TbTextPlus size="35px"/>)
                     :
                      
                      ( <TbChecks size="35px"/>) 
                        }</h3>
            <div class="reset" onClick={()=>{
                  localStorage.setItem('viewjobid',job.id)
                  navigate("/jobdesc")
                  
                  }}>
            <div className="job-card ">
      <div className="title">{job.position}</div>
      <div className="company">{job.department}</div>
      <div className="type">{job.mode}</div>
                
        <>
          <div className="location">{job.location}</div>
          {/* <div className="description">{description}</div> */}
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
        ))}
      </div>
    </div>
</div>
</div>
  );
}
export default SavedCard;
