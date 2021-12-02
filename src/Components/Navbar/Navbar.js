import React from 'react'
import schwifty from '../Assets/getschwifty.png'

const Navbar = () => {
  return (
    <div>
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <h1 className="fs-3 ubuntu navbar-brand">

      <img alt="" src={schwifty} width="40%"/>

      </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        <a href="" className="nav-link active" aria-current="page" href="#">Characters</a>
        <a href="" className="nav-link" href="#">Location</a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
