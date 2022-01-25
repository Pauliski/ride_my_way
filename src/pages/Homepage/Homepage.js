import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import "./style.css";
// import drive from "./driver.mp4";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/NavbarSpecial/Navbar";
// import Sidebar from "./components/SidebarSpecial/Sidebar"
import Sidebar from "./../../components/SidebarSpecial/Sidebar"
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection";
import QuickBook from "../../components/QuickBook/QuickBook";
import NeedHelp from "../../components/NeedHelp/NeedHelp";


const Homepage = () => {
  // const { isOpen } = useContext(SidebarContext);
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };

  return (
<div >
<Navbar openSidebar={openSidebar} />
<Sidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />
<HomeHeroSection />
<QuickBook />
<NeedHelp />
{/* <Amenities /> */}
<Footer />



      
      
        {/* <video autoPlay muted loop id="myVideo">
          <source src={drive} type="video/mp4" className="videoSource" />
          Your browser does not support HTML5 video.
        </video> */}
        {/* <h1 className="diplay">
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
          
        </h1> */}
        {/* <button onClick ={()=>{auth.login(()=>{props.history.push("/app")})}}>Login</button> */}
    
        
   

</div>
   
  );
};

export default Homepage;
