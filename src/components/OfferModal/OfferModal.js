import React, { useState } from "react";
import { Input } from "../../element/Input";
import { editOfferCall } from "../../store/actions/types/driverAction";


import "./OfferModal.css";
import { useDispatch } from "react-redux";

function OfferModal({ id, closeModal, amount, destination, location }) {
  const dispatch = useDispatch()
  const [trip, setTrip] = useState({location, destination, amount})
  const [valid, setValid] = useState({location: true, destination: true, amount: true });
  const destinationError = /^[a-zA-Z0-9\-]{2,}/g;
  const amountError = /^[0-9]{2,}$/;

  const handleOnBlur = (e) => {
    const { value, name } = e.target;
    if (name === "destination" || name === 'location')
      setValid({ ...valid, [name]: destinationError.test(value) });
    if (name === "amount")
      setValid({ ...valid, [name]: amountError.test(value) });
  };
  const handleChange = (e)=>{
    console.log(id)
    const {name, value} = e.target;
    setTrip(prev => {
      return {...prev, [name]: value}
    })
    setValid(prev => {
      return {...prev, [name]: true}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    editOfferCall(id, trip, dispatch);

  };
  

  return (
    <div>
      <div className="offer-container">
        <div className="offer-modal">
          <form onSubmit={handleSubmit}>
          Location
            <div style={{ color: "red" }}>
              {!valid.location ? "invalid location" : ""}
            </div>
            <Input
              name="location"
              Value={trip.location}
              onBlur={handleOnBlur}
              onChange={handleChange}
            />
            Destination
            <div style={{ color: "red" }}>
              {!valid.destination ? "invalid destination" : ""}
            </div>
            <Input
              name="destination"
              Value={trip.destination}
              onBlur={handleOnBlur}
              onChange={handleChange}
            />
            Amount
            <div style={{ color: "red" }}>
              {!valid.amount ? "invalid amount" : ""}
            </div>
            <Input
              name="amount"
              Value={trip.amount}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <div style={{display: 'flex'}}>
              <div className="offer-button-container">
                <button
                  className="offer-button-modal"
                  name="save"
                  id={id}
                  type="submit"
                >
                  Save
                </button>
              </div>
              <div className="offer-button-container">
                <button
                  className="offer-button-modal cancel"
                  name="save"
                  id={id}
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
