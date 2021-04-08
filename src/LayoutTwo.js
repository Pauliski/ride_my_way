import React, { useState, useContext } from "react";
import Pauliski from "./Paul.jpg";
import { FaBars } from "react-icons/fa";
import { SidebarContext } from "../src/Context/SidebarContext";
import Sidebar from "./Sidebar";
import { MapList } from "./Map";
import { authNavbar, themeDropdown } from "./Array";
import { DashboardSide} from "./Map";
import { DashboardSidebar } from "./Array";
import './style.css'


const Layout2 = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { toggle } = useContext(SidebarContext);
  

  return (
    <div className="layer2">
      <div className="bar">
        <FaBars className="Fabar" onClick={toggle} />
      </div>
      <Sidebar navbar={authNavbar} />

      <MapList
        items={authNavbar}
        className="navLink"
        color={props.textTheme}
        backgroundColor={props.backgroundTheme}
        ulClassName="navUl"
      >
        <img className="profilePix" alt="trans" src={Pauliski} />
        <button onClick={props.toggle} className='themeChangeButton'>Change Theme</button>
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
            style={{ backgroundColor: `${props.elementTheme}` }}
          >
            {" "}
            + Order{" "}
          </button>
          <DashboardSide items={DashboardSidebar} color={props.textTheme} ulClassName="DashboardSidebar" className='DashboardSidebarList'/>
        </div>
        
        <div className="dashboardSecondtDiv">
        {props.children}
        </div>

        <div
          className="dashboardThirdDiv"
          style={{
            color: `${props.textTheme}`,
            backgroundColor: `${props.backgroundTheme}`,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </div>
  );
};

export default Layout2;
