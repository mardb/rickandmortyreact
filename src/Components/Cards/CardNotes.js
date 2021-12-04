import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardNotes = () => {
  const [posts, setPosts] = useState([]);

  let [fetchedData, updateFetchedData] = useState([]);

  let { id } = useParams();
  let { userId, title, body } = fetchedData;
  let formApi = `https://jsonplaceholder.typicode.com/posts/${id} `;
  useEffect(() => {
    (async function () {
      let data = await fetch(formApi).then((res) => res.json());
      updateFetchedData(data);
      console.log(data);
    })();
  }, [formApi]);
  // ----------------**FETCH**------------------------------

//----------------****POST REQUEST****----------------------
const jsonPost =()=> {
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

//PUT request
const editPost = () => {

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }).then(res => console.log(res)),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}


  return (
    <div className="mb-3 container">
      {/* <h6>
 {body}
 </h6> */}
      <div className="">
        <span className="fw-bold mb3">Title: </span>
        {/* {title} */}
      </div>
      <div className="">
        <span className="fw-bold mb3">Note: </span>
        {/* {body} */}
      </div>

      <div className="mb-3 container">
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
        <div className="collapse  justify-content-end" id="navbarNavAltMarkup">
          {/* ---------- */}
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Add Notes:
              </label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
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
  );
};

export default CardNotes;
