import React, { useEffect } from "react";
import noavatar from "../../../pictures/noavatar.jpg";
import { MdCall } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import "./DriverAvailableOffer.css";
import Moment from "react-moment";
import axios from "axios";
import {
  acceptOffer,
  endTrip,
  processTrip,
  rejectOffer,
  startTrip,
} from "../../../store/actions/types/driverAction";
import { useState } from "react";
import swal from "sweetalert";
import { useSelector } from "react-redux";


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
  email
}) {
  const [clearButtonDisplay, setClearButtonDisplay] = useState(true);
  const {firstName: driverFirstName, lastName: driverLastName} = useSelector(state => state.driver)
  const driverName = `${driverFirstName} ${driverLastName}`
  console.log(driverName)
  let rideStatus;
  // const [rideStatus, setRideStatus] = useState({});
  const [displayCard, setDisplayCard] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const handleAccept = (historyId) => {
    // setRideStatus({status: "Accepted" });
    rideStatus = { status: "Accepted" };
    processTrip(historyId, rideStatus, firstName, email, driverName);
    setClearButtonDisplay(false);
  };

  const handleStart = async (historyId) => {
    rideStatus = { status: "Ongoing" };
    await processTrip(historyId, rideStatus);
    setOngoing(true);
  };

  const handleTripEnded = async (historyId) => {
    rideStatus = { status: "Completed" };
    await processTrip(historyId, rideStatus);
    setDisplayCard(false);
  };

  const handleReject = async (historyId) => {
    
    swal({
      title: "Are you sure you want to reject this offer?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        rideStatus = { status: "Rejected" };
       rejectOffer(historyId, rideStatus);
        setDisplayCard(false);
      }
    });
  };

  useEffect(() => {
    console.log(rideStatus, " ====>");
    if (status === "Accepted") {
      setClearButtonDisplay(false);
    }
    if (status === "Ongoing") {
      setClearButtonDisplay(false);
      setOngoing(true);
    }
  }, []);

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
