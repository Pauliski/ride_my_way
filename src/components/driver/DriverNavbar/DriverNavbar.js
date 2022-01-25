import "./DriverNavbar.css";
// import  "../avatar.svg";
// import { useState } from "react";
import {FaBars} from 'react-icons/fa'
import NoAvatar from '../../../pictures/nopix.png'
import { useSelector } from "react-redux";
const DriverNavbar = ({ sidebarOpen, openSidebar, children }) => {
  const user = useSelector(state => state.driver)
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
        <span>{user.firstName} {user.lastName}</span>
        {/* <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a> */}
        {/* <FaSolarPanel>
          <i className="fa fa-bell" aria-hidden="true"></i>
        </FaSolarPanel> */}
        <span>
          <img width="30" src={user.imageUrl ? user.imageUrl: NoAvatar} style={{marginLeft: '10px'}} alt="avatar" />
        </span>
      </div>
    </nav>
  );
};

export default DriverNavbar;