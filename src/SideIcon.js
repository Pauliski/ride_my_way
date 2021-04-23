import React from 'react';import pass from "./pictures/pass1.png";
import { AiFillSetting } from "react-icons/ai";
import './style.css'


const SideIcons = (props) => {
    return ( 
        <div >
      
        <div className={`checkSide ${props.showSide ? "false" : ""}`}>
          <img src={pass} alt="" className="picture sidePic" />
          <AiFillSetting className="settings" />
        </div>
       
      
      </div>
     );
}
 
export default SideIcons;