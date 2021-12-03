import React from 'react'
import schwifty from '../Assets/getschwifty.png'
import { NavLink, Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  return (
    <div>
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div className="container">
  <Link to="/" className="fs-3 ubuntu navbar-brand">
      <img alt="" src={schwifty} width="40%"/>

      </Link>

      <style jsx>
      {`
        button[aria-expanded="false"] > .close{
          display: none;
        }
        button[aria-expanded="true"] > .open{
          display: none;
        }
      `}
    </style>

    <button 
      className="navbar-toggler border-0" 
      type="button" 
      data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
      aria-label="Toggle navigation">
    
      <i className="fas fa-bars open fw-bold text-dark"></i>
      <i className="fas fa-times close fw-bold text-dark"></i>


    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5" >

        <NavLink activeClassName="active" to="/" className="nav-link " aria-current="page" >Characters</NavLink>
        <NavLink to="/location" className="nav-link" >Location</NavLink>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
