import React, { useEffect, useState } from "react";
import axios from 'axios'
import HistoryTable from "../../components/driver/DriverHistory/HistoryTable/HistoryTable";
import UserSideBar from "../../components/sidebar/UserSideBar";
import Search from "../../components/Search/Search";
import Navbar from "../../components/navbar/navbar";
import PassengerHistoryTable from "../../components/passenger/PassengerHistory/PassengerHistoryTable/PassengerHistoryTable";

function DriverHistory() {
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        const getHistory = async () => {
          try {
            const token = localStorage.getItem("jwtToken");
            console.log(token);
            const res = await axios.get(
              `http://localhost:3000/v1/passenger/ride-history`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(token);
            if (res.status === 200) {
              setHistory(res.data.offerDetails);

            }
            
          } catch (error) {
            console.log(error);
          }
        };
        getHistory();
      }, []);
  
  return (
    <div className="containe">
      <Navbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
        <Search />
      </Navbar>
      <UserSideBar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />
      <div className="history-table">
        <PassengerHistoryTable history={history} />
      </div>
      
    </div>
  );
}

export default DriverHistory;
