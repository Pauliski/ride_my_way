import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
import Pauliski from "./Paul.jpg";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { SidebarContext } from "../src/Context/SidebarContext";
import Sidebar from "./Sidebar";
import { MapList } from "./Map";
import { authNavbar, themeDropdown } from "./Array";
import { DashboardSide } from "./Map";
import { DashboardSidebar } from "./Array";
import logo from './pictures/logo.png'
import "./style.css";

const Layout2 = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { toggle } = useContext(SidebarContext);

  return (
    <div className="layer2" style={{backgroundColor: `${props.background}`}}>
      
      <div className="bar">
        <FaBars className="Fabar" onClick={toggle} />
      </div>
     
      <Sidebar navbar={authNavbar}>
        <div className="changeColorButton"><button onClick={props.toggle} >
          Change Theme
        </button></div>
        
      </Sidebar>
      
      <MapList
        items={authNavbar}
        className="navLink"
        color={props.textTheme}
        backgroundColor={props.backgroundTheme}
        ulClassName="navUl"
      >
         {/* <div className='logo'>
        <img src={logo} alt="hello" style={{width: '50px', height: '40px'}}/>
        <p>Ride-my-way</p>
      </div> */}
       
        <img className="profilePix" alt="trans" src={Pauliski} />
        <IoMdArrowDropdown
          style={{ color: `${props.textTheme}`, marginRight: "160px" }}
          onClick={() => setIsDropdown(!isDropdown)}
        />
       
        
        <div
          className={`dropdown-content ${
            isDropdown ? "dropdown-content-show" : ""
          }`}
          style={{
            color: `${props.textTheme}`,
            backgroundColor: `${props.backgroundTheme}`,
          }}
        >
          <Link to="/profile">Update Profile</Link>
          <Link to="/">Logout</Link>
        </div>
      </MapList>

      <div className="dashboardContainer">
      
        <div
          className="dashboardFirstDiv"
          style={{
            color: `${props.textTheme}`,
            backgroundColor: `${props.backgroundTheme}`,
          }}
        >
          <button
            className="orderButton"
            style={{
              backgroundColor: `${props.elementTheme}`,
              color: `${props.textTheme}`,
              border: `1px solid ${props.textTheme}`,
            }}
          >
            {" "}
            + Order{" "}
          </button>
          <DashboardSide
            items={DashboardSidebar}
            color={props.textTheme}
            ulClassName="DashboardSidebar"
            className="DashboardSidebarList"
          >
            <button onClick={props.toggle} className="themeChangeButton">
              Change Theme
            </button>
          </DashboardSide>
        </div>

        <div className="dashboardSecondtDiv">{props.children}</div>

        <div
          className="dashboardThirdDiv"
          style={{
            color: `${props.textTheme}`,
            backgroundColor: `${props.backgroundTheme}`,
          }}
        >
          Place Your advert here
         
         
        </div>
      </div>
    </div>
  );
};

export default Layout2;
