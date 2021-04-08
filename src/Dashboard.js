import React, { useContext, useState } from "react";
// import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa';
import "./style.css";
// import DashboardNavbar from './DashboardNavbar'
import Layout2 from "./LayoutTwo";
import { ThemeContext } from "./Context/ThemeContext";
import Notification from "./Notification";

const Dashboard = () => {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Layout2
      backgroundColor={theme.background}
      color={theme.text}
      toggle={toggleTheme}
      textTheme={theme.text}
      backgroundTheme={theme.background}
      elementTheme={theme.element}
    >
        <div className="dashboardSecondtDiv">
        <Notification />
        </div>
    </Layout2>
  );
};

export default Dashboard;
