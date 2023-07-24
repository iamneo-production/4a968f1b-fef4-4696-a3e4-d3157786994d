
import landimg2 from "../Asserts/7273245_3610759.svg"
import landimg3 from "../Asserts/undraw_job_offers_re_634p.svg"
import landimg4 from "../Asserts/undraw_people_search_re_5rre.svg"
function Landing(){
    return(

        <div>
      <div class="container-home p-0">
      <div class="row px-0">
        <div class="col px-0">
        <img src={landimg3} class="float-end" height="650px" width="650px"></img>
        </div>
      </div>
      <div class="container-home-2 p-0">
        <div class="row px-0">
          <div class="col px-0">
        <img src={landimg2} height="600px" width="600px"></img>
          </div>
          </div>
          </div>
        <div class="container-home-3 p-0">
          <div class="row px-0">
          <div class="col px-0">
        <img src={landimg4} class="float-end mt-5" height="500px" width="500px"></img>
        </div>
        </div>

        </div>
      </div>
        
      </div>
    )
}
export default Landing;