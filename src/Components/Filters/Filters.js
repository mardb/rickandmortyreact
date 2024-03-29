import React from 'react'
import Status from './Category/Status'
// import Location from './Category/Location'

const Filters = ({setStatus, setPageNumber}) => {

  let clear = ()=>{
    setStatus("");
    setPageNumber("");
    window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2 primary">Filter</div>
      <div 
      onClick={clear}
      style={{cursor: "pointer"}} className="text-center text-decoration-underline mb-3"> Clear Filter </div>
    {/* Bootstrap Accordeon */}
    <div className="accordion" id="accordionExample">
  <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
  {/* <Location/> */}
  
  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
</div>

    </div>
  )
}

export default Filters
