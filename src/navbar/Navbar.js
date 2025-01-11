

import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      <img src="./Images/icononly_transparent_nobuffer.png"/>
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
      <Link to="/" >Home</Link>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      
      {/* <li>
        <div class="dropdown">
            <button class="dropbtn">Services
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="/notary">Notary Public</a>
            </div>
        </div>
      </li> */}
      
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    
  </div>
</nav>
);
};

export default Navbar;