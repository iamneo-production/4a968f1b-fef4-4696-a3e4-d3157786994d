import  { Link }  from "react-router-dom";
import  {useEffect, useState}  from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignInForm() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((state)=>state.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const response=await axios.post(
            "http://localhost:8181/api/v1/auth/authenticate",
            {
          email:email,
          password:password
        }
        ).then((response)=>{
            console.log(response.data);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('emailid',email);
            console.log(localStorage.getItem('token'));
          })
      
      validateForm();
      
        
        
      }catch(error){
      window.alert("Invalid Credentials");
      console.log(error);
      
    }
    
  }
  const handleChange = (e) => {
    
    const { name, value } = e.target;

    if(name === 'username') {
      setUsername(value);
      clearError("username");
    }
    else if (name=== 'email') {
      setEmail(value);
      clearError("email");
    } else if (name === 'password') {
      setPassword(value);
      clearError("password");
    }

  };
  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };


  const validateForm = () => {
    const verrors = {};
  
    if (!username) {
      verrors.username = 'Username is required';
    }
    if (!email) {
      verrors.email = 'E-mail is required';
    } 
  
    if (!password) {
      verrors.password = 'Password is required';
    }
    if(Object.keys(verrors).length>0){
      setErrors(verrors);
      return;
    }
    else{
      const user={
        username,
      }
      dispatch(
        {type:"LOGIN",payload:user}
        
      );
        navigate("/home");
      
    }
    
  };

  


    return (
      
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
            <label className="formFieldLabel" >
              Name
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter your name"
              name="username"
              
              value={username}
              onChange={handleChange}
            />
            {errors.username && <div className="label-error">{errors.username}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <div className="label-error">{errors.email}</div>}
          </div>

          <div className="formField">
            <label className="formFieldLabel" >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {errors.password && <div className="label-error">{errors.password}</div>}
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/sign-up" className="formFieldLink reset">
              Create an account
            </Link>
          </div>


          
        </form>
      </div>
    );
  }

export default SignInForm;



