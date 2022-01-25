import React from "react";
import {BiPhoneCall} from 'react-icons/bi'
import { HiMail} from 'react-icons/hi'
import "./NeedHelp.css";

const NeedHelp = () => {
  return (
    <div id="need-help" className="need-help-outter">
      <div className="need-help-wrapper">
        <div>
          <img src="photos/customer.png" alt="" className="need-help-image" />
        </div>
        <div className="need-help-details">
          <div className="need-help-title">
            <h1 className="need-help-header">Need Help?</h1>
            <h4 className="need-help-subheader">
              To speak with our customer care representative
            </h4>
          </div>
          <div className="need-help-mobile">
            <div className="need-help-mobile-icon"><BiPhoneCall /></div>
            <div>
              <h4 className="need-help-number">+2347068546905</h4>
              <h4 className="need-help-number">+2348187726949</h4>
            </div>
          </div>
          <div className="need-help-mail"> 
            <div className="need-help-mobile-icon"><HiMail /></div>
            <div>contact@rmwtransport.com</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
