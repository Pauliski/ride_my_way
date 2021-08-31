import React, { useEffect, useState } from "react";
import axios from 'axios'
import HistoryTable from "../../components/DriverHistory/HistoryTable/HistoryTable";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import DriverSidebar from "../../components/DriverSidebar/DriverSidebar";
import Search from "../../components/Search/Search";

function DriverHistory() {
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        const getHistory = async () => {
          try {
            const token = localStorage.getItem("driverToken");
            console.log(token);
            const res = await axios.get(
              `http://localhost:3000/v1/driver/ride-history`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(token);
            if (res.status === 200) {
              console.log(res);
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
      <DriverNavbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
        <Search />
      </DriverNavbar>
      <DriverSidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />
      <div className="history-table">
        <HistoryTable history={history} />
      </div>
      
    </div>
  );
}

export default DriverHistory;
