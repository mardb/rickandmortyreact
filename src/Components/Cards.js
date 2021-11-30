import React from 'react'
import styles from './Cards.module.scss'



const Cards = ({results}) => {

  let display;
console.log(results)
  if( results ){
    display = results.map( x => {
      let {id, name, image, location, status} = x
      return( <div key={id} className="col-4 mb-4 position-relative">
        <div className={`${styles.cards}`}>
          <img className={`${styles.img}`} src={image} alt="" className="img-fluid"/>
          <div style={{padding: "10px"}} className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6">Last Known Location: </div>
              <div className="fs-5">{location.name}</div>
    
            </div>
          </div>
        </div>
{/* IIFE */}
        {(()=>{
          if( status === "Dead"){
            return(
              <span className={`${styles.badge} position-absolute badge bg-danger`}>{status}</span>
            )
          }
          else if(status === "Alive"){
            return(
              <span className={`${styles.badge} position-absolute badge bg-success`}>{status}</span>
            )
          } else {
            return(
              <span className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</span>
            )
          }
        })()}

        {/* <span className={`${styles.badge} position-absolute badge bg-success`}>{status}</span> */}
      </div> )
    })
  } else{
    display = "We didnt find anyone with that Name. Please try a different search.  "
  }

  console.log(results)
  return <> {display}</>
}

export default Cards