import React, { useState } from "react";
import pass from "./pictures/pass1.png";
import "./style.css";
import {getRandomStr} from './IdGenerator'
import { CardDetails } from "./Array";

const Card = (props) => {
  return (
    <div style={{width: '100%'}} >
      <div className="card-container">
        <div className="card-container-inner">
        {CardDetails.map(item =>(
            <div key={item.id}>
              <div className='card-picture-container'>
            
            <img src={item.passport} alt="" className="card-picture"/>
           
          </div>
          <div className='card-info'>
            <h3 className='card-name'>{item.name}</h3>
            <h4>Contact: {item.contact}</h4>
            <h4>Location: {item.location}</h4>
            <h4>Destination: {item.destination}</h4>
          </div>
          <div className='card-button-container' id={item.id}>
            <button className='card-button ' onClick={props.accept} id={item.id} disabled={props.disable}>Accept</button>
            <button className='card-button card-button2' onClick={props.reject} id={item.id} disabled={props.disable}>Reject</button>
          </div>
            </div>
              
              ))}
          
        </div>
      </div>
    </div>
  );
};

export default Card;
