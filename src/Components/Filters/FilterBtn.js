import React from 'react'

export const FilterBtn = () => {
  return (
    <div>
      <div className="form-check">

        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>

        
        <label class="btn btn-outline-success" for="flexRadioDefault1">Checked success radio</label>

      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="btn btn-outline-success"  for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  )
}

export default FilterBtn;