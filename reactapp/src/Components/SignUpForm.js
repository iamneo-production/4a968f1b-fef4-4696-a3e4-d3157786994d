import  {Link}  from "react-router-dom";
import  { useState}  from 'react';
import axios from 'axios';

 
function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resadd, setResadd] = useState("");
  const [degree, setDegree] = useState("");
  const [special, setSpecial] = useState("");
  const [year, setYear] = useState(0);
  const [mob, setMob] = useState("");
  const [cgpa, setCgpa] = useState(0);
  const [miniexp, setMiniexp] = useState(0);
  const [box, setBox] = useState(false);
  const [errors, setErrors] = useState({});
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
     await axios.post("http://localhost:8181/api/v1/auth/register",
      {
      fname:fname,
      lname:lname,
      email:email,
      password:password,
      address:resadd,
      degree:degree,
      specialization:special,
      passyr:year,
      contactno:mob,
      cgpa:cgpa,
      miniexp:miniexp

      }
    );
    validateForm();
    
  }
  const handleChange = (e) => {
    
    const { name, value } = e.target;


  
  if (name === 'fname') {
      setFname(value);
      clearError("fname");
    }
    else if(name === 'lname') {
      setLname(value);
      clearError("lname");
    }
    else if (name=== 'email') {
      setEmail(value);
      clearError("email");
    } else if (name === 'password') {
      setPassword(value);
      clearError("password");
    }
    else if (name === 'resadd') {
      setResadd(value);
      clearError("resadd");
    }
    else if (name === 'degree') {
      setDegree(value);
      clearError("degree");
    }
    else if (name === 'special') {
      setSpecial(value);
      clearError("special");
    }
    else if (name === 'year') {
      setYear(value);
      clearError("year");
    }
    else if (name === 'mob') {
      setMob(value);
      clearError("mob");
    }
    else if (name === 'cgpa') {
      setCgpa(value);
      clearError("cgpa");
    }
    else if (name === 'miniexp') {
      setMiniexp(value);
      clearError("miniexp");
    }
    else if (name === 'box') {
      setBox(value);
      clearError("box");
    }
    
  };
  
  
  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };


  const validateForm = () => {
    let errors = {};
    
    if (!fname) { 
      errors.fname = 'First Name is required';
    }
    if (!lname) {
      errors.username = 'Last Name is required';
    }
    if (!resadd) {
      errors.resadd = 'Residential Address is required';
    }
    if (!email) {
      errors.email = 'E-mail is required';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!degree) {
      errors.degree = 'Degree is required';
    }
    if (!special) {
      errors.special = 'Specialization is required';
    }
    if (!year) {
      errors.year = 'Year of Passing is required';
    }
    if (!mob) {
      errors.mob = 'Mobile Number is required';
    }
    if (!cgpa) {
      errors.cgpa = 'CGPA is required';
    }
    if (!miniexp) {
      errors.miniexp = 'Minimum Experience is required';
    }
    if (!box) {
      errors.box = 'CheckBox is required';
    }
    if(Object.keys(errors).length>0){
      setErrors(errors);
      return;
    }
    else{
      window.location.href="/";
    }
  };

  
  
  return(
    
    <div className="formCenter">

        <form onSubmit={handleSubmit} className="formFields">
          <div className="field-split">
          <div className="formField">
            <label className="formFieldLabel" >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="fname"
              
              value={fname}
              onChange={handleChange}
            />
            {errors.fname && <div className="label-error">{errors.fname}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className="formFieldInput"
              placeholder="Enter your Last Name"
              name="lname"
              
              value={lname}
              onChange={handleChange}
            />
            {errors.lname && <div className="label-error">{errors.lname}</div>}
          </div>
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              Residential Address
            </label>
            <input
              type="text"
              id="resadd"
              className="formFieldInput"
              placeholder="Enter your Residential Address"
              name="resadd"
              
              value={resadd}
              onChange={handleChange}

            />
            {errors.resadd && <div className="label-error">{errors.resadd}</div>}
          </div>
          <div className="field-split">
          
          <div className="formField">
            <label className="formFieldLabel" >
              Year of Passing
            </label>
            <input
              type="number"
              id="year"
              className="formFieldInput"
              placeholder="Enter your Year of Passing"
              name="year"
              min="2000"
              max="2022"
              value={year}
              onChange={handleChange}
            />
            {errors.year && <div className="label-error">{errors.year}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Mobile No
            </label>
            <input
              type="text"
              id="mob"
              className="formFieldInput"
              placeholder="Enter your Mobile Number"
              name="mob"
              
              value={mob}
              onChange={handleChange}
            />
            {errors.mob && <div className="label-error">{errors.mob}</div>}
          </div>
          </div>
        <div className="field-split">
          <div className="formField">
            <label className="formFieldLabel" >
              Degree
            </label>
            <select
              className="formFieldInput"
              placeholder="Enter your Degree"
              name="degree"
              value={degree}
              onChange={handleChange}
            >

                <option value="">Select Degree</option>
                <option value="Associate of Arts (AA)">Associate of Arts (AA)</option>
                <option value="Associate of Science (AS)">Associate of Science (AS)</option>
                <option value="Associate of Applied Science (AAS)">Associate of Applied Science (AAS)</option>
                <option value="Bachelor of Arts (BA)">Bachelor of Arts (BA)</option>
                <option value="Bachelor of Science (BS)">Bachelor of Science (BS)</option>
                <option value="Bachelor of Fine Arts (BFA)">Bachelor of Fine Arts (BFA)</option>
                <option value="Master of Arts (MA)">Master of Arts (MA)</option>
                <option value="Master of Science (MS)">Master of Science (MS)</option>
                <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                <option value="Master of Fine Arts (MFA)">Master of Fine Arts (MFA)</option>
                <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
                <option value="Doctor of Medicine (MD)">Doctor of Medicine (MD)</option>
                <option value="Juris Doctor (JD)">Juris Doctor (JD)</option>
                <option value="Bachelor of Laws (LLB)">Bachelor of Laws (LLB)</option>
                <option value="Bachelor of Engineering (BE)">Bachelor of Engineering (BE)</option>
                <option value="Bachelor of Technology (BTech)">Bachelor of Technology (BTech)</option>
                <option value="Master of Engineering (ME)">Master of Engineering (ME)</option>
                <option value="Master of Technology (MTech)">Master of Technology (MTech)</option>

            </select>
            {errors.degree && <div className="label-error">{errors.degree}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              Specialization
            </label>
            <input
              type="text"
              id="special"
              className="formFieldInput"
              placeholder="Enter your Specialization"
              name="special"
              
              value={special}
              onChange={handleChange}
            />
            {errors.special && <div className="label-error">{errors.special}</div>}
          </div>
        </div>
        <div className="field-split">
          
          <div className="formField">
            <label className="formFieldLabel" >
              CGPA
            </label>
            <input
              type="number"
              id="cgpa"
              className="formFieldInput"
              placeholder="Enter your cgpa of Passing"
              name="cgpa"
              min="0.00"
              step="0.01"
              max="10.00"
              value={cgpa}
              onChange={handleChange}
            />
            {errors.cgpa && <div className="label-error">{errors.cgpa}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Minimum Experience
            </label>
            <input
              type="number"
              id="miniexp"
              className="formFieldInput"
              placeholder="Enter your Minimum Experience"
              name="miniexp"
              
              value={miniexp}
              onChange={handleChange}
            />
            {errors.miniexp && <div className="label-error">{errors.miniexp}</div>}
          </div>
          </div>
          <div className="field-split">
          <div className="formField">
            <label className="formFieldLabel">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your Email-Address"
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
          
          </div>
          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="box"
                
                onChange={handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink ">
                terms of service
              </a>
            </label>
            {errors.box && <div className="label-error">{errors.box}</div>}
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/" className="formFieldLink reset ">
                  I'm already a member
            </Link>
          </div>
          
        </form>
      </div>

);
}

export default SignUp

