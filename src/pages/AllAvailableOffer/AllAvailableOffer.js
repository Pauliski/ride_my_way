import React, { useEffect, useState } from "react";
import axios from "axios";
import DriverAvailableOffer from "../../components/driver/DriverAvailableOffer/DriverAvailableOffer";
import Search from "../../components/Search/Search";
import DriverSidebar from "../../components/driver/DriverSidebar/DriverSidebar";
import './AllAvailableOffer.css'
import DriverNavbar from "../../components/driver/DriverNavbar/DriverNavbar";

function AllAvailableOffer() {
    const [offers, setOffers] = useState([])
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    }
  useEffect(() => {
    const getOffers = async () => {
      try {
        const token = localStorage.getItem("driverToken")
        console.log(token)
        const res = await axios.get(
          `http://localhost:3000/v1/all-offers`,
         {
           headers:{
             "Authorization": `Bearer ${token}`
           }
         }
        );
        console.log(res)
        console.log(token)
        if(res.status ===200){
          console.log(res)
        setOffers(res.data.offers)
        }
        console.log(res)
      } catch (error) {
          console.log(error)
      }
    };
    getOffers()
  }, []);
  return(
      <div className="containe">
        <DriverNavbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
                  <Search />
              </DriverNavbar>
              <DriverSidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar}/>
          <div className="display-all">
            {offers.map(item =>(
                <DriverAvailableOffer location={item.location} passengerId={item.passengerId} destination={item.destination} firstName={item.firstName} lastName={item.lastName} createdAt={item.createdAt} mobileNumber={item.mobileNumber} id={item.offerId} key={item.HistoryId} historyId={item.HistoryId} status={item.status} email={item.email} />
            
                
            ) )}
        </div>
      </div>
      
  ) 
}

export default AllAvailableOffer;
