import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoryTable from "../../components/driver/DriverHistory/HistoryTable/HistoryTable";
import DriverNavbar from "../../components/driver/DriverNavbar/DriverNavbar";
import DriverSidebar from "../../components/driver/DriverSidebar/DriverSidebar";
import Search from "../../components/Search/Search";
import PaginationTable from "../../components/driver/DriverHistoryPagination/PaginationTable/PaginationTable";

function DriverHistory() {
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };

  // useEffect(() => {
  //   const getHistory = async () => {
  //     try {
  //       const token = localStorage.getItem("driverToken");
  //       // console.log(token);
  //       const res = await axios.get(
  //         `http://localhost:3000/v1/users`,
  //         {
  //           params: {
  //             page: 1,
  //             limit: 7,
  //           },
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
         
  //       );
  //       console.log(token);
  //       if (res.status === 200) {
  //         console.log(res);
  //         setHistory(res.data.offerDetails);
  //         console.log('jjjvhjckjvkvkxc', history)
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getHistory();
  // }, []);

  return (
    <div className="containe">
      <DriverNavbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
        <Search />
      </DriverNavbar>
      <DriverSidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar} />
      <div className="history-table">
        {/* <HistoryTable history={history} /> */}
        <PaginationTable history={history}/>
      </div>
    </div>
  );
}

export default DriverHistory;
