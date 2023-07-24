import { Link } from "react-router-dom";
import iconin from "../Asserts/instagram.svg";
import iconfb from "../Asserts/facebook.svg";
import icontw from "../Asserts/twitter.svg";
import iconpin from "../Asserts/pinterest.svg";
import iconred from "../Asserts/reddit-logo-2436.svg";

function Footer(){


    return(

        <footer class="footer mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 text-center">
            <div class="footer-site-logo mb-4">
              <Link class="reset" to="#">Application Tracking System</Link>
            </div>
            <ul class="list-unstyled mb-5">
              <li class="d-inline-block m-2"><Link class="reset"  to="#">About</Link></li>
              <li class="d-inline-block m-2" ><Link class="reset" to="#">Services</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">Careers</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">FAQ</Link></li>
              <li class="d-inline-block m-2" ><Link class="reset" to="#">Legal</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">Contact</Link></li>
            </ul>

            <div class="social mb-4 ">
              <h3>Stay in touch</h3>
              <ul class="list-unstyled d-flex justify-content-center ">
                <li class="in"><Link  to="#"><span ><img className="simg" src={iconin}></img></span></Link></li>
                <li class="fb"><Link class="reset" to="#"><span ><img className="simg" src={iconfb}></img></span></Link></li>
                <li class="tw"><Link class="reset" to="#"><span ><img className="simg" src={icontw}></img></span></Link></li>
                <li class="pin"><Link class="reset" to="#"><span><img className="simg" src={iconpin}></img></span></Link></li>
                <li class="pin"><Link class="reset" to="#"><span><img className="simg" src={iconred}></img></span></Link></li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </footer>


    )


}

export default  Footer;