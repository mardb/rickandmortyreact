import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const CardDetails = () => {
  let{id} = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let {name, image, location, origin, gender, species, status, type} = fetchedData


  let api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
  ( async function () {
    let data  = await fetch(api).then((res) => res.json())
    updateFetchedData(data);
    console.log(data.results)
  })();
}, [api]);
  
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">
          {name}
        </h1>
        <img src={image} alt="" className="img-fluid" />
        {(()=>{
          if( status === "Dead"){
            return(
              <span className="badge bg-danger fs-5">{status}</span>
            )
          }
          else if(status === "Alive"){
            return(
              <span className="badge bg-success fs-5">{status}</span>
            )
          } else {
            return(
              <span className="badge bg-secondary">{status}</span>
            )
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender:</span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species:</span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Type:</span>
            {type === "" ? "unknown" : type }
          </div>
          <div className="">
            <span className="fw-bold">Location:</span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin:</span>
            {origin?.name}
          </div>
        </div>
      </div>
      {/* Single Card goes here - {id} */}
    </div>
  )
}

export default CardDetails
