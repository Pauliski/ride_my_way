import React from "react";
import Pauliski from "./Paul.jpg";
import { AiFillSetting } from "react-icons/ai";
import "./style.css";

const SideIcons = (props) => {
  return (
    <div>
      <div className={`checkSide ${props.showSide ? "false" : ""}`}>
        <img src={Pauliski} alt="" className="picture sidePic" />
        <AiFillSetting className="settings" />
      </div>
    </div>
  );
};

export default SideIcons;
