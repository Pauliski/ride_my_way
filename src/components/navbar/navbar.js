import React, {useState} from 'react'
import "./navbar.css";
// import  "../avatar.svg";
// import { useState } from "react";
import { useHistory } from 'react-router';
import {FaBars} from 'react-icons/fa'
import { useSelector } from "react-redux";
const Navbar = ({ sidebarOpen, openSidebar, children }) => {
  const history = useHistory()
  const user = useSelector(state => state.user)
  
//   const [sidebarOpen, setsidebarOpen] = useState(false);
//   openSidebar = () => {
//    setsidebarOpen(true);
//  };
//   closeSidebar = () => {
//    setsidebarOpen(false);
//  };

  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={() => openSidebar()}>
        <i><FaBars className="fa fa-bars"  /></i>
        
      </div>

      <div className="navbar-left">
        {children}
      </div>
      <div className="navbar-right">
        <span onClick={()=>history.push('/edit-profile')}>{user.firstName} {user.lastName}</span>
        {/* <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a> */}
        <a href="#!">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <img width="30" src="/assets/mykel.jpg" alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;