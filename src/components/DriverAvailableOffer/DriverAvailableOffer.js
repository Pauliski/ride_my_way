import React, { useEffect } from "react";
import noavatar from "../../pictures/noavatar.jpg";
import { MdCall } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import "./DriverAvailableOffer.css";
import Moment from "react-moment";
import axios from "axios";
import {
  acceptOffer,
  endTrip,
  rejectOffer,
  startTrip,
} from "../../store/actions/types/driverAction";
import { useState } from "react";
import swal from "sweetalert";

function DriverAvailableOffer({
  location,
  destination,
  lastName,
  firstName,
  createdAt,
  mobileNumber,
  id,
  status,
  historyId,
}) {
  const [clearButtonDisplay, setClearButtonDisplay] = useState(true);
  const [displayCard, setDisplayCard] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const handleAccept = (historyId) => {
    acceptOffer(historyId);
    setClearButtonDisplay(false);
  };

  const handleStart = (historyId) => {
    startTrip(historyId);
    setOngoing(true);
  };

  const handleTripEnded = (historyId) => {
    endTrip(historyId);
    setDisplayCard(false)
  };

  const handleReject = (historyId) => {
    swal({
      title: "Are you sure you want to reject this offer?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        rejectOffer(historyId);
        setDisplayCard(false);
      }
    });
  };

  useEffect(()=>{
      if(status === 'Accepted'){
          setClearButtonDisplay(false);
      }
      if(status === 'Ongoing'){
        setClearButtonDisplay(false);
        setOngoing(true);
      }
      
  }, [])

  return (
    <div className={`available-offer ${displayCard ? "" : "clear-display"}`}>
      <div className="offer-info pix-name">
        <div style={{ marginRight: "10px" }}>
          <img src={noavatar} alt="" className="profile-img" />
        </div>
        <div>
          {firstName} {lastName}
        </div>
        <div className={`${ongoing ? "ongoing" : "clear-display"}`}>
          Ongoing
        </div>
      </div>
      <div className="offer-info">
        <GoCalendar style={{ color: "red", marginRight: "10px" }} />
        <span>
          <Moment format="dddd, MMMM Do YYYY">{createdAt}</Moment>
        </span>
      </div>
      <div className="offer-info">
        <MdCall style={{ color: "green", marginRight: "10px" }} />
        <span>{mobileNumber}</span>
      </div>
      <div className="offer-info">
        <span>Location:</span>
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          {" "}
          {location}
        </div>
      </div>
      <div className="offer-info">
        <span>Destination:</span>
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          {" "}
          {destination}
        </div>
      </div>
      <div className="offer-info ">
        <button
          className={`btn btn-accept ${
            clearButtonDisplay ? "" : "clear-display"
          }`}
          onClick={() => handleAccept(historyId)}
        >
          Accept
        </button>
        <button
          className={`btn btn-reject ${
            clearButtonDisplay ? "" : "clear-display"
          }`}
          onClick={() => handleReject(historyId)}
        >
          Reject
        </button>
        <button
          className={`btn-start ${
            clearButtonDisplay
              ? "clear-display"
              : ongoing
              ? "clear-display"
              : ""
          }`}
          onClick={() => handleStart(historyId)}
        >
          Start Trip
        </button>
        <button
          className={`btn-start ${ongoing ? "End-trip" : "clear-display"}`}
          onClick={() => handleTripEnded(historyId)}
        >
          End Trip
        </button>
      </div>
    </div>
  );
}

export default DriverAvailableOffer;
