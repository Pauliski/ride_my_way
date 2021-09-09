import React, { useEffect, useState } from "react";
import DriverSidebar from "../../components/DriverSidebar/DriverSidebar";
import Offer from "../../components/Offer/Offer";
import Search from "../../components/Search/Search";
import axios from "axios";
import "./MyOffer.css";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import {
  setOffer,
  setOfferdeleted,
} from "../../features/passenger/driverSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteOfferCall } from "../../store/actions/types/driverAction";
import swal from "sweetalert";

function MyOffer() {
  const allOffers = useSelector((state) => state.driver.offer);
  const dispatch = useDispatch();
  // const [offers, setOffers] = useState([]);
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  const deleteOffer = (id, destination, amount) => {
    swal({
      title: "Are you sure you want to delete this offer?",
      icon: "warning",
      dangerMode: true,
      buttons:true, 
    }).then(
    function(isConfirm){
      if (isConfirm) {
        const remainingOffer = allOffers.filter((item) => item.id !== id);
          dispatch(setOffer({ offers: remainingOffer }));
          dispatch(setOfferdeleted({ offer: { id, destination, amount } }));
          deleteOfferCall(id);          
      } 
    });
    
  };
  useEffect(() => {
    const getMyOffer = async () => {
      try {
        const token = localStorage.getItem("driverToken");
        const res = await axios.get(`http://localhost:3000/v1/offers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          console.log(res.data);
          // setOffers(res.data.offers);
          dispatch(setOffer({ offers: res.data.offers }));
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    getMyOffer();
  }, []);
  return (
    <div className="containe">
      <DriverNavbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
        <Search />
      </DriverNavbar>
      <DriverSidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />
      <div className="driver-offers">
        {allOffers.map((item) => (
          <Offer
            location={item.location}
            destination={item.destination}
            amount={item.amount}
            key={item.id}
            id={item.id}
            createdAt={item.created_at}
            deleteOffer={deleteOffer}
          />
        ))}
      </div>
    </div>
  );
}

export default MyOffer;
