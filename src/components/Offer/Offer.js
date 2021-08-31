import React, { useEffect, useState } from "react";
import { Input } from "../../element/Input";
// import { editOfferCall } from "../../store/actions/types/driverAction";
// import { useHistory } from "react-router";

import "./Offer.css";
import Modal from "react-modal";
import OfferModal from "../OfferModal/OfferModal";



function Offer({ location, destination, amount, createdAt, id, deleteOffer }) {
  
  const [isOpen, setIsOpen] = useState(false)
  const [offer, setOffer] = useState({amount, destination, location});
  
  const [valid, setValid] = useState({ destination: true, amount: true, location: true });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValid({ ...valid, [name]: true });
    setOffer({ ...offer, [name]: value });
  };


  const handleEdit = (e) => {
    e.preventDefault();
    setIsOpen(true)
  
  };
 
  const closeModal = ()=>{
    setIsOpen(false)
  }
  useEffect(() => {
   
    console.log(offer)
    console.log(id)
  }, []);

  return (

    <div>
      <div className="offer-container">
        <div className="offer">
          <form onSubmit={handleEdit}>
          Location
            <Input
              name="destination"
              Value={location}
              className="input-disable"
              disabled={true}
            />
            Destination
            <Input
              name="destination"
              Value={destination}
              className="input-disable"
              disabled={true}
            />
            Amount
            <Input
              name="amount"
              Value={amount}
              className="input-disable"
              disabled={true}

            />
            <span>{createdAt}</span>
            <div className="offer-button-container">
              <button
                className="offer-button"
                name={`editBtn-${id}`}
                id={id}
                // type="submit"
                onClick={handleEdit}
              >
                Edit
              </button>
              <span className="offer-button offer-btn" onClick={()=>deleteOffer(id, destination, amount)}>Delete</span>
            </div>
          </form>
        </div>
      </div>
      <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} className="react-modal" overlayClassName="Overlay">
           <OfferModal location={location} destination ={destination} amount={amount} handleChange={handleChange} closeModal={closeModal} id={id} />   
      </Modal>
    </div>
  );
}

export default Offer;
