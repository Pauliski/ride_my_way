import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
  } from "react-icons/fa";
  import './Footer.css'


function Footer() {
    return (
        <div>
            <div className='footer'>
            <div>
            <h3>
              About Us
            </h3>
            <h4>How it works</h4>
            <h4>Testimonials</h4>
            <h4>Career</h4>
            <h4>Investors</h4>
            <h4>Terms of Service</h4>
          </div>

          <div>
            <h3>Contact Us</h3>
            <h4>Contact</h4>
            <h4>Support</h4>
            <h4>Destination</h4>
            <h4>Sponsor</h4>
          </div>
          <div className="socialMedia">
            <h3>Social Media</h3>
            <h4>
              <FaFacebookF />
            </h4>
            <h4>
              {" "}
              <FaTwitter />{" "}
            </h4>
            <h4>
              <FaLinkedin />
            </h4>
            <h4>
              <FaYoutube />
            </h4>
            <h4>
              <FaInstagram />
            </h4>
          </div>
          </div>
        </div>
    )
}

export default Footer
