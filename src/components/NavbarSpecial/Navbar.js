import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ openSidebar, color }) => {
  return (
    <div>
      <div className="top-navbar" style={{backgroundColor: color}}>
        <div className="contact-details">
          <div className="hamburger" onClick={() => openSidebar()}>
            <i>
              <FaBars className="fa fa-bars" />
            </i>
          </div>

          <p>contact@rmw.com</p>
          <p>+2347068546905</p>
        </div>
        <div className="login-links-wrapper">
          <Link
            to="/login"
            className="passenger-login-link login-link"
          >
            Passenger Login
          </Link>
          <Link to="/driver/login" className="passenger-login-link login-link">
            Driver Login
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps ={
  openSidebar: ()=>{},
  color: 'lightblue'
}

export default Navbar;
