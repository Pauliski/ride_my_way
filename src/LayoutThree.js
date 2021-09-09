import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./pictures/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Pauliski from "./Paul.jpg";
import { authNavbar, themeDropdown } from "./Array";
import { MapList } from "./Map";
import { Link } from "react-router-dom";
import "./style.css";

const LayoutThree = (props) => {
  const [toggleSideIcon, setToggleSideIcon] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  // const { toggle } = useContext(SidebarContext);
  // const toggle = () => {
  //   setToggleSideIcon(!toggleSideIcon);
  // };

  return (
    <div className="documentBody">
      <div>
        <div className="layoutThreeContainer">
          <div className="layout-top">
            <img src={logo} alt="" className="logo" />
            <div style={{ marginTop: "1.5rem" }}>Ride-my-way</div>
            <div className="icon-toggle">
              {" "}
              <FaBars onClick={props.toggle} className="toggleBar" />{" "}
            </div>
          </div>

          <div className="layer3navbarlinks">
            <div style={{ position: "absolute", right: "4.5em" }}>
              <IoMdNotificationsOutline
                style={{ marginRight: "6.5rem", fontSize: "1.5rem" }}
              />
              <div
                style={{
                  marginTop: "-2em",
                  marginLeft: "1.2em",
                  color: "#fff",
                  fontWeight: "bold",
                  backgroundColor: "red",
                  textAlign: "center",
                  borderRadius: "5px",
                  position: "absolute",
                  width: "1rem",
                }}
              >
                3
              </div>
            </div>

            {/* <MapList
        items={authNavbar}
        className="navLink"
        color={props.textTheme}
        backgroundColor={props.backgroundTheme}
        ulClassName="navUl"
      > */}

            {/* </MapList> */}

            {/* i just drop it here */}
            <div>
              <span>Pauliski</span>

              <img
                className="profilePix"
                alt="trans"
                src={Pauliski}
                onMouseEnter={() => setIsDropdown(!isDropdown)}
                onMouseLeave={() => setIsDropdown(false)}
              />
              <IoMdArrowDropdown
                style={{ color: `${props.textTheme}`, marginRight: "10px" }}
                onMouseEnter={() => setIsDropdown(!isDropdown)}
                 onMouseLeave={() => setIsDropdown(false)}
              />

              <div
                className={`dropdown-content ${
                  isDropdown ? "dropdown-content-show" : ""
                }`}
                style={{
                  color: "white",
                  backgroundColor: "black",
                }} onMouseEnter={() => setIsDropdown(true)}
                onMouseLeave={() => setIsDropdown(false)}
              >
                <Link to="/profile">Update Profile</Link>
                <Link to="/">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default LayoutThree;
