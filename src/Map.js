import { Link } from "@reach/router";
import React from "react";
import "./style.css";

export const Map = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <Link key={item} to={`/${item.toLowerCase()}`}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export const MapList = (props) => {
  return (
    <ul
      className={props.ulClassName}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      {props.items.map((item) => (
        <li key={item} className={props.className}>
          <Link
            to={`/${item.toLowerCase()}`}
            style={{
              color: `${props.color}`,
              backgroundColor: `${props.backgroundColor}`,
            }}
          >
            {item}
          </Link>
        </li>
      ))}
      {props.children}
    </ul>
  );
};

export const DashboardSide = (props) => {
  return (
    <ul
      className={props.ulClassName}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      {props.items.map((item) => (
        <li key={item.text} className={props.className}>
          <Link
            to={`/${item.text.toLowerCase().replace(/ /g, "")}`}
            style={{
              color: `${props.color}`,
              backgroundColor: `${props.backgroundColor}`,
            }}
          >
            {item.icon}
            {item.text}
          </Link>
        </li>
      ))}
      {props.children}
    </ul>
  );
};

export const Available = (props) => {
  return (
    <div className="AvailableContainer">
      {props.items.map((item) => (
        <div key={item.id} className="AvailableContent">
          <div>
            <img src={item.src} alt="pix" className="AvailableRidePix" />
          </div>
          <div>
            <h3>Driver's Name: {item.name} </h3>
            <h4>Id: {item.id}</h4>
            <h4>Location: {item.location}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export const MapRecentTrips = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.name} className='tripDetails'>
          <div className='firstChild'>
            <img src={item.src} alt="hello" className="drivers" />{" "}
            <div>Driver's name: {item.name} </div>
            <div>id: {item.id} </div>
          </div>

          <div className='secondChild'>
            <div>
              {item.location}
              <span className='location'>{item.trip}</span>
            </div>
            <div>
              {item.drive}
              <span className='road'>Road</span>
            </div>
            <div>
              {item.depart}
              <span className='date'>Departing: 26/3/2021 - 8:17 PM</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
