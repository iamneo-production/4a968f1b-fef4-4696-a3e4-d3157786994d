import React from 'react';
import './index.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Apply from './Pages/Apply';
import Help from './Pages/Help';
import Dashboard from './Pages/Dashboard';
import "./Asserts/Login.css";
import Jobdesc from './Pages/Jobdesc';
import Applyform from './Pages/Applyform';
import Saved from './Pages/Saved';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import Interview from './Pages/Interview';
import HrSignIn from './Pages/HrSignIn';
import HrHome from './Pages/HrHome';
import PostJob from './Pages/PostJob';
import HrScheduleInt from './Pages/HrSchdeuleInt';
import Applied from './Pages/Applied';
import Feedback from './Pages/Feedback';


function App() {
  return (
    <div className="none">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/apply" element={<Apply/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/jobdesc" element={<Jobdesc/>} />
            <Route path="/applyform" element={<Applyform/>} />
            <Route path="/saved" element={<Saved/>} />
            <Route path="/notification" element={<Notification/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/interview" element={<Interview/>} />
            <Route path="/hrsignin" element={<HrSignIn/>} />
            <Route path="/hrhome" element={<HrHome/>} />
            <Route path="/postjob" element={<PostJob/>} />
            <Route path="/hrscheduleinterview" element={<HrScheduleInt/>} />
            <Route path="/appliedjobs" element={<Applied/>} />
            <Route path="/feedback" element={<Feedback/>} />
        </Routes>
        
     </BrowserRouter>
    </div>
  );
}

export default App;