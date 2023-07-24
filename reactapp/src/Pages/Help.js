import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";

import "../Asserts/Sidebar.css";

import landimg2 from "../Asserts/7273245_3610759.svg"
import landimg3 from "../Asserts/undraw_job_offers_re_634p.svg"
import landimg4 from "../Asserts/undraw_people_search_re_5rre.svg"
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";
import Footer from "../Components/Footer";
function Help(){
  const user = useSelector((state)=>state.user);
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
          <Link to="/home" class="nav-link">Home</Link>
          <Link to="/apply" class="nav-link" >Apply for Job</Link>
          <Link to="/dashboard" class="nav-link" >Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
      </nav>
      <div>
        </div>
        <div class="container-len">
        Sint sint eiusmod minim id ipsum esse. Sint quis ea sint sit incididunt laboris. Proident excepteur sunt magna aliquip cupidatat aliqua officia enim irure incididunt in id aliqua amet. Exercitation fugiat mollit officia aliqua magna irure sit id aliqua deserunt in. Consectetur mollit ad esse velit consequat pariatur ea esse ut. Tempor culpa qui consectetur enim proident occaecat aliquip. Amet fugiat in velit aliquip excepteur magna culpa commodo commodo do et.

In dolore officia sint quis ea et eu amet occaecat id ea eu voluptate. Ipsum pariatur ex officia ea duis laborum duis laboris consectetur mollit nulla Lorem mollit aute. Exercitation anim est tempor fugiat duis nisi incididunt. Veniam et esse aute aliqua culpa sint laboris in laboris sint adipisicing. Pariatur dolore reprehenderit incididunt ad consequat voluptate dolore.

Aliquip anim pariatur nulla consectetur culpa laborum anim occaecat dolore in aliqua exercitation. Cillum laborum anim enim officia id amet tempor exercitation proident veniam reprehenderit tempor. Dolor dolor irure enim magna magna do aliqua enim non proident quis cupidatat est quis.

Eu veniam est aute dolore proident minim ullamco occaecat irure eu. Consectetur et sit magna irure deserunt veniam laboris duis. Consectetur deserunt exercitation ut deserunt tempor voluptate deserunt cillum voluptate quis. Ut eiusmod deserunt ullamco cupidatat ad culpa exercitation do non officia mollit eiusmod. Elit sit duis nulla tempor. Elit duis officia aliquip irure. Anim ad nostrud ex magna non.

Labore voluptate velit ad ullamco sint ipsum aute dolor sunt excepteur sint laboris. Laboris cillum qui dolor fugiat voluptate esse veniam in. Esse cillum et voluptate nisi consectetur aliquip culpa est irure culpa cupidatat occaecat pariatur. Amet consectetur mollit voluptate non aliquip qui magna anim. Elit consectetur ut ex adipisicing veniam. Adipisicing adipisicing dolor ad eu veniam elit laboris quis consectetur consectetur tempor proident anim excepteur. Exercitation laboris est ad sint tempor aute sit sit tempor ad elit.

Deserunt adipisicing dolore laboris anim ex in ad in dolor fugiat. Sint mollit duis et irure aliqua in aliqua. Nostrud cillum incididunt laborum fugiat ea in pariatur velit occaecat.

Incididunt nisi nisi cillum consectetur culpa nostrud aute qui voluptate sint duis do. Voluptate officia do deserunt ea do incididunt laborum commodo dolore sint eiusmod ex. Occaecat veniam ad aute cillum consectetur ullamco consequat adipisicing laborum voluptate.

Sit nulla fugiat consectetur sit aliquip est sint aliqua. Labore veniam enim est minim incididunt exercitation duis aute eiusmod. Minim Lorem eu ipsum incididunt mollit elit pariatur sit officia quis laboris irure. Quis laborum ex incididunt nostrud id cillum exercitation cillum. Nostrud amet dolore deserunt aliquip nulla eiusmod aliquip dolor. Occaecat labore quis quis consequat non labore excepteur elit.
</div>
<br></br>
<div class="container" >
      <div class="row fw-bold fs-4 justify-content-center">

    Contact our support through : help@gmail.com
      </div>
      <br></br>
      <div class="row fw-medium fs-5 justify-content-center">

    To Subscribe to our newsletter
      </div>
      <center>
        <form>
  <label >Email</label>
  <input type="email"></input>
  <button type="submit" class="btn btn-primary">
      Submit
  </button>
  </form>
  </center>
</div>
        <Footer/>
        </div>

    )
}
export default Help;