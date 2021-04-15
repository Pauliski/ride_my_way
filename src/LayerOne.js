import React, { useContext } from "react";
import { Link } from "@reach/router";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { SidebarContext } from "./Context/SidebarContext";
import {navbar} from './Array'

const Layout1 = (props) => {
  const { toggle } = useContext(SidebarContext);
  return (
    <div>
      <div className="bar">
        
      </div>
      <FaBars className="Fabar" onClick={toggle} />
      <Sidebar navbar={navbar} />
      <ul className="navUl">
        {navbar.map((item) => (
          <li key={item} className="navLink">
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout1;
