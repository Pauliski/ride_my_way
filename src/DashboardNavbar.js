import React, { useContext } from "react";
import { Link } from "@reach/router";
import { FaBars } from "react-icons/fa";
import { ThemeContext } from "../src/Context/ThemeContext";
import {authNavbar} from './Array'

const DashboardNavbar = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div>
      <div className="bar">
        <FaBars className="Fabar" />
      </div>

      <ul className="navUl" style={{ backgroundColor: light.background }}>
        {authNavbar.map((item) => (
          <li key={item} className="navLink">
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <h3>annonymous@example.com</h3>
      <button>Log Out</button>
    </div>
  );
};

export default DashboardNavbar;
