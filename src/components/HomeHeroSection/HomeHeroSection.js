import React from "react";
import "./HomeHeroSection.css";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <div>
      <div className="hero-section-wrapper">
        <div>
          <div>Logo</div>
          <div>Ride-My-Way Transport</div>
        </div>
        <div className="links-buttons-wrapper">
          <>
            <a href="#quick-book" className="smooth-link">Quick Book</a>
            <a href="#need-help" className="smooth-link">Need Help</a>
            <a className="smooth-link">Amenties</a>
          </>
          <div>
            <Link to='/signup'>
              <button className="signup-button">Passenger Sign Up</button>
            </Link>
            <Link to='/driver/signup'>
             <button className="signup-button">Driver Sign Up</button>
            </Link>
           
          </div>
        </div>
      </div>

      <section className="image-container">
          <div className="overlay"></div>
      </section>
    </div>
  );
};

export default HomeHeroSection;
