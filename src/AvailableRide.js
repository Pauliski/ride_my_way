import React, { useContext, useEffect, useState } from "react";
import { driversMessages, messages } from "./Array";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import { Available } from "./Map";
import { AvailableRides } from "./Array";
import Layout2 from "./LayoutTwo";
import { ThemeContext } from "./Context/ThemeContext";
import { getRandomStr } from "./IdGenerator";
import './style.css'

const AvailableRide = () => {
  const [notify, setNotify] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [destination, setDestination] = useState({ from: "", to: "" });
  const [itemList, setItemList] = useState("");

  useEffect(() => {
    const notificationFromStorage = JSON.parse(localStorage.getItem('driversMsg')) || []
    setNotify(notificationFromStorage)
  }, [])
  useEffect(() => {
    localStorage.setItem('driversMsg', JSON.stringify(notify))

  }, [notify])
  const toggleModal = (item) => {
    setShowModal(!showModal);
    setItemList(item);
  };
  const Change = (e)=>{
    setDestination({from: e.target.value, to: destination.to})
  }
  const ChangeTo = e => setDestination({from: destination.from, to: e.target.value})
  const placeOrder = () => {
    const defaultUsersNotification = {
      sender: "Ride-my-way",
      message: `Order Details,  Car Model: ${itemList.carModel} Location: ${destination.from}  to Destination: ${destination.to}. please wait for our drivers confirmatory message`,
      id: getRandomStr(10),
    };
    const defaultDriverNotification={
      sender: "Ride-my-way",
      message: `We have an order for you details, Passengers name: Pauliski, location: ${destination.from},  destinatio: ${destination.to}. please Confirm your availability by clicking the 'Yes' button otherwise click No`,
      id: getRandomStr(10),
    }
    setNotify(prev => [defaultDriverNotification, ...prev])
    // notify.unshift(defaultDriverNotification);
    messages.unshift(defaultUsersNotification);
    navigate("/notification");
  };
  const { toggleTheme, displayTheme, color } = useContext(ThemeContext);
  let theme = color[displayTheme];
  return (
    <Layout2
      toggle={toggleTheme}
      backgroundTheme={theme.background}
      textTheme={theme.text}
      elementTheme={theme.element}
      background={theme.background}
    >
      
      <Available
        items={AvailableRides}
        backgroundColor={theme.background}
        toggleModal={toggleModal}
      />
      {showModal ? (
        <Modal>
         
             From: <input className="modalInput" value={destination.from} onChange={Change} type="text" required />
            <br />
            to: <input className="modalInput" value={destination.to} onChange={ChangeTo} type="text" required/>
            <br />
            <button className="modalButton" onClick={toggleModal}>
              Cancel
            </button>
            <button className="modalButton" onClick={placeOrder}>
              Place Order
            </button>
           
          
        </Modal>
      ) : null}
    </Layout2>
  );
};

export default AvailableRide;
