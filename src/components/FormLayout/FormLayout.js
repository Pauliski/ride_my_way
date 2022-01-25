import React, { useContext, useEffect, useState } from "react";
import {  connect } from "react-redux";
import "./FormLayout.css";
import Navbar from "../NavbarSpecial/Navbar"
import Sidebar from "../SidebarSpecial/Sidebar";

const Signup = ({ children, btnText }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);


  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <Navbar openSidebar={openSidebar} color="white" />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />

      <div>
        <div className="form-sections">
          <div className="signup-first-section">
            <div className="first-section">
              <h3 className="signup-rmw-logo">LOGO</h3>
              <div className="welcome-note">
                <h2>Welcome to RMW Transport</h2>
                <button className="signup-driver-btn">{btnText}</button>
              </div>
            </div>
             {children}
           
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.user.isError,
  };
};

export default connect(mapStateToProps)(Signup);
