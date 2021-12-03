import React from 'react'
import styles from './Cards.module.scss'
import {Link} from 'react-router-dom'


const Cards = ({results, page}) => {

  let display;
console.log(results)
  if( results ){
    display = results.map( x => {
      let {id, name, image, location, status} = x
      return ( 
        
      <Link 
      to={`${page}${id}`}
      style={{textDecoration: "none"}}
      key={id} 
      className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
        <div className={`${styles.cards} d-flex-column justify-content-center`}>
          <img className={`${styles.img} img-fluid`} src={image} alt="" />
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
      </Link> )
    })
  } else{
    display = "We didnt find anyone with that Name. Please try a different search.  "
  }

  console.log(results)
  return <> {display}</>
}

export default Cards
