import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import { isLogout } from "./features/passenger/userSlice";
import "./style.css";
import { navigate } from "@reach/router";

const Layout2 = (props) => {
  const history = useHistory()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [isDropdown, setIsDropdown] = useState(false);
  const { toggle } = useContext(SidebarContext);
  const handleLogout = (e)=>{
      e.preventDefault()
      dispatch(isLogout())
      history.push("/")
  }
  return (
    <div className="layer2" style={{backgroundColor: `${props.background}`}}>
      
     
      <div className="Fabar">
        <FaBars style={{float: 'right', paddingTop: '5PX', marginRight: '5px'}}  onClick={toggle} />
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
       <div style={{display: "flex", alignItems: "center"}}>
         <img className="profilePix" alt="trans" src={Pauliski} />
        <span style={{ color: `${props.textTheme}` }}>{user.lastName}</span>
       </div>
        
        <IoMdArrowDropdown className="dropdown-arrow-menu"
          style={{ color: `${props.textTheme}` }}
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
          <span onClick={handleLogout}>Logout</span>
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

        <div className="dashboardSecondDiv"><div className='space'></div>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout2;
