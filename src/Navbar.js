import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { SidebarContext } from "./Context/SidebarContext";

const Navbar = () => {
  const navbar = ["Home", "Service", "About", "Contact", "Blog"];
  const { toggle } = useContext(SidebarContext);

  return (
    <div>
      <div className="bar"></div>
      <FaBars className="Fabar" onClick={toggle} />
      <Sidebar navbar={navbar} />
      <ul className="navUl">
        {navbar.map((item, i) => (
          <li key={i} className="navLink">
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
