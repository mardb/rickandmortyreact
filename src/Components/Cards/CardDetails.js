import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data.results);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status === 'Dead') {
            return <span className="badge bg-danger fs-5">{status}</span>;
          } else if (status === 'Alive') {
            return <span className="badge bg-success fs-5">{status}</span>;
          } else {
            return <span className="badge bg-secondary">{status}</span>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Type: </span>
            {type === '' ? 'unknown' : type}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          {/*  */}
          <div className="container">
            <button
              className="border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-edit open"></i>
              <i className="fas fa-times close fw-bold text-dark"></i>
            </button>
            <div
              className="collapse  justify-content-end"
              id="navbarNavAltMarkup"
            >
              {/* ---------- */}
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Add Notes:
                  </label>
                  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
                  <div id="emailHelp" className="form-text">
                    Wubba Lubba Dub Dub!
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Single Card goes here - {id} */}
    </div>
  );
};

export default CardDetails;
