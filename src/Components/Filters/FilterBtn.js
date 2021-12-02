import React from 'react'

export const FilterBtn = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
        .x:checked + label{
          background-color: #20c997;
          color: black;
        }

        input[type="radio"]{
          display:none;
        }
      `}
      </style>
      <div className="form-check">

        <input 
        onClick={()=>{
          setPageNumber(1);
          task(items)
        }}
        className="form-check-input x" 
        type="radio" 
        name={ name }
        id={`${name}-${index}`} 
        />

        
        <label class="btn btn-outline-success" for={`${name}-${index}`} >
          {items}
          </label>

      </div>
    </div>
  )
}

export default FilterBtn;