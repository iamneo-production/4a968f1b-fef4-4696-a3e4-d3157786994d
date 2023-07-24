import { Link } from "react-router-dom";
import "../Asserts/card.css";
function Dashcard(){
    return (
<div class="container shadow my-5 mx-5 px-5">
    <div class="row justify-content-center ">
        <div class="col-4 m-5 ms-0 ">
            <Link to ="/appliedjobs" class="reset">
            <div class="card bg-c-blue text-white shadow">
                <div class="card-block">
                    <h3 class="mb-4">Jobs Applied</h3>
                    <h1><i class="fa fa-solid fa-plus float-start"></i><span class="float-end">486</span></h1>
                </div>
            </div>
            </Link>
        </div>
        
        <div class="col-4 m-5 me-0">
            <div class="card bg-c-green text-white shadow ">
                <div class="card-block">
                    <h3 class="mb-4">Interviews Attended</h3>
                    <h1><i class="fa fa-rocket float-start"></i><span class="float-end">486</span></h1>
                </div>
            </div>
        </div>
        
        <div class="col-4 m-5 ms-0">
        <Link to ="/interview" class="reset">
            <div class="card bg-c-yellow text-white shadow">
                <div class="card-block">
                    <h3 class="mb-4">Scheduled Interviews</h3>
                    <h1><i class="fa fa-solid fa-calendar float-start"></i><span class="float-end">486</span></h1>
                    
                </div>
            </div>
            </Link>
        </div>
        
        <div class="col-4 m-5 me-0">
            <div class="card bg-c-pink text-white shadow">
                <div class="card-block">
                    <h3 class="mb-4">Job Offers</h3>
                    <h1><i class="fa fa-credit-card float-start"></i><span class=" float-end">486</span></h1>
                </div>
            </div>
        </div>
	</div>
</div>


    )
}
export default Dashcard;