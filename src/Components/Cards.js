import React from 'react'
import styles from './Cards.module.scss'
const Cards = ({results}) => {

  let display;
console.log(results)
  if( results ){
    display = results.map( x => {
      let {id, name, image, location, status} = x
      return( <div key={id} className="col-4 position-relative">
        <div className="">
          <img src={image} alt="" className="img-fluid"/>
          <div className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6">Last Known Location: </div>
              <div className="fs-5">{location.name}</div>
    
            </div>
          </div>
        </div>
        <span class="position-absolute badge bg-danger">{status}</span>
      </div> )
    })
  } else{
    display = "We didnt find anyone with that Name. Please try a different search.  "
  }

  console.log(results)
  return <> {display}</>
}

export default Cards
