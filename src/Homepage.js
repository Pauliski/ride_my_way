import React, { useContext } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
import drive from "./driver.mp4";
import { SidebarContext } from "./Context/SidebarContext";
import LayerOne from "./LayerOne";
import auth from "./auth";
import UserSideBar from "./components/sidebar/UserSideBar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";

const Homepage = (props) => {
  const { isOpen } = useContext(SidebarContext);

  return (
<div >
 <LayerOne>
          {/* <Navbar /> */}
         {/* <UserSideBar /> */}
      <main className={isOpen ? "false" : ""}>
        <div>
        <video autoPlay muted loop id="myVideo">
          <source src={drive} type="video/mp4" className="videoSource" />
          Your browser does not support HTML5 video.
        </video>
        <h1 className="diplay">
          <span>Get</span>
          <span> a</span>
          <span> stressfree</span>
          <span> ride</span>
          <div className="joinUs">
            <Link to="/signup">
              <button className="boardButton">Join Us</button>
            </Link>
          </div>
          <div className="joinUs">
            <Link to="/driver/dashboard">
              <button className="boardButton">SIGN UP TO DRIVE</button>
            </Link>
          </div>
          
        </h1>
        {/* <button onClick ={()=>{auth.login(()=>{props.history.push("/app")})}}>Login</button> */}
        </div>
       
       

        {/* <footer> */}
          {/* <div className='footer'>
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
          </div> */}
         <Footer />
        {/* </footer> */}
      </main>
    </LayerOne>

</div>
   
  );
};

export default Homepage;
