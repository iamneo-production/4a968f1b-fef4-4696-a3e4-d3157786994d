import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";
const InterviewForm = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
    const[interview,setInterview] =useState([]);

    const emailid=localStorage.getItem('emailid');
    const token=localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInterview({
        position:{title},
        link:{link},
        // date:{date},
        department:{department},
        // time:{time},

    }
    )
    try{
        await axios.put(
          `http://localhost:8181/api/v1/interview/put/${email}`,
          interview
          ,
          {
          
            headers:{
              "Authorization":`Bearer ${token}`,
              "cache-control":"no-cache",
            },
          }
        )
        window.alert("Successfully Scheduled")
        
    }catch(error){
          console.log(interview);

        console.log("Error fetching Data "+error);
      }

    console.log("Form submitted:", { title, link, date, department, time, location });
  };

  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="link">
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="department">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </Form.Group>
        <br></br>
      <Button variant="primary" type="submit" >
        Schedule Interview
      </Button>
    </Form>
  );
};

export default InterviewForm;
