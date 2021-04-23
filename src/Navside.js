import React from 'react';
import pass from "./pictures/pass1.png";
import { AiFillSetting } from "react-icons/ai";
import './style.css'

const Navside = (props) => {

    return ( 
       <div className='checksideContainer'>
        <div className={`checkSide2 ${props.toggleSideIcon ? 'false' : ''}`}>
         
        <div className="imgContainer">
          <img src={pass} alt="" className="picture sidePic2" />
          <div>
            <span>Pauliski</span>{" "}
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div className="online"></div>
              <span>Online</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <AiFillSetting className="settings" />
          <span style={{ marginTop: "30px" }}>Settings</span>
        </div>
      </div>
      </div>
     );
}
 
export default Navside;