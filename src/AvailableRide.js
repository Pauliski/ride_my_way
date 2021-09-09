import React, { useContext, useEffect, useState } from "react";
import { driversMessages, messages } from "./Array";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import { Available } from "./Map";
import { AvailableRides, displayCarDetails } from "./Array";
import Layout2 from "./LayoutTwo";
import { ThemeContext } from "./Context/ThemeContext";
import { getRandomStr } from "./IdGenerator";
import Datalist from "./Datalist";
import CardBody from './CardBody'
import './style.css'
import Navbar from "./components/navbar/navbar";
import UserSideBar from "./components/sidebar/UserSideBar";

const AvailableRide = () => {
  // const [notify, setNotify] = useState([])
  // const [showModal, setShowModal] = useState(false);
  // const [destination, setDestination] = useState({ from: "", to: "" });
  // const [itemList, setItemList] = useState("");

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  // useEffect(() => {
  //   const notificationFromStorage = JSON.parse(localStorage.getItem('driversMsg')) || []
  //   setNotify(notificationFromStorage)
  // }, [])

  // const toggleModal = (item) => {
  //   setShowModal(!showModal);
  //   setItemList(item);
  // };
  // const Change = (e)=>{
  //   setDestination({from: e.target.value, to: destination.to})
  // }
  // const handleChange = (e)=>{
  //   const {value, name} = e.target
  // }

  // const ChangeTo = e => setDestination({from: destination.from, to: e.target.value})
  // const placeOrder = () => {
  //   const defaultUsersNotification = {
  //     sender: "Ride-my-way",
  //     message: `Order Details,  Car Model: ${itemList.carModel} Location: ${destination.from}  to Destination: ${destination.to}. please wait for our drivers confirmatory message`,
  //     id: getRandomStr(10),
  //   };
  //   const defaultDriverNotification={
  //     sender: "Ride-my-way",
  //     message: `We have an order for you details, Passengers name: Pauliski, location: ${destination.from},  destinatio: ${destination.to}. please Confirm your availability by clicking the 'Yes' button otherwise click No`,
  //     id: getRandomStr(10),
  //   }
  //   setNotify(prev => [defaultDriverNotification, ...prev])
  //   // notify.unshift(defaultDriverNotification);
  //   messages.unshift(defaultUsersNotification);
  //   navigate("/notification");
  // };
  // const { toggleTheme, displayTheme, color } = useContext(ThemeContext);
  // let theme = color[displayTheme];

  return (
    <div className="containe">
       {/* <Layout2
      toggle={toggleTheme}
      backgroundTheme={theme.background}
      textTheme={theme.text}
      elementTheme={theme.element}
      background={theme.background}
    > */}
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <UserSideBar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />
     <CardBody />
      {/*  */}
    {/* </Layout2> */}
    </div>

  );
};

export default AvailableRide;
