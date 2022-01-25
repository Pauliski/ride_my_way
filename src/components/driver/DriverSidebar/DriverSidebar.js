import "./DriverSidebar.css";
import { useHistory } from "react-router";
import {FaTimes, FaHistory} from 'react-icons/fa'
import {AiOutlineHome, AiFillEdit} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { isLogout } from "../../../features/passenger/driverSlice";


const DriverSidebar = ({ sidebarOpen, closeSidebar }) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const riderHomeroute = ()=>{
    history.push("/driver/dashboard")
    // setsidebarOpen(false);
  }
  // const riderEditroute = ()=>{
  //   history.push("/driver/edit-profile")
  //   // setsidebarOpen(false);
  // }
  
  const signOutRideroute = ()=>{
    localStorage.removeItem("driverToken")
    dispatch(isLogout())
    history.push("/")
    // setsidebarOpen(false);
  }

  return (
    <div className={sidebarOpen ? "usersidebar-responsive" : ""} id="usersidebar">
      <div className="usersidebar-title">
      <div className="usersidebar-img">
        <i className="fa fa-car" aria-hidden="true"></i>
        <h1>Ride My Way</h1>
      </div>
      <FaTimes onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"/>
      </div>

      <div className="usersidebar-menu">
        <div className="usersidebar-link" onClick={riderHomeroute}>
          <AiOutlineHome className="fa fa-home" />
          <span>Home</span>
        </div>
  
        <div className="usersidebar-link" onClick={()=>history.push('/driver/edit/profile')}>
          <AiFillEdit className="fa fa-user-secret" aria-hidden="true" />
          <span >Edit Profile</span>
        </div>
        <div className="usersidebar-link" onClick={()=>history.push('/driver/history')}>
          <FaHistory className="fa fa-building-o" />
          <span>My Ride History</span>
        </div>
        <div className="usersidebar-link" onClick={()=>history.push('/driver/ride/request')}>
          <i className="fa fa-building-o"></i>
          <span>Ride request </span>
        </div>
        <div className="usersidebar-link" onClick={()=>history.push('/driver/offer')}>
          <i className="fa fa-building-o"></i>
          <span >My Offers </span>
        </div>
        <div className="usersidebar-link" onClick={()=>history.push('/driver/add/offer')}>
          <i className="fa fa-building-o"></i>
          <span >Add Offers </span>
        </div>


        <div className="usersidebar-logout" onClick={signOutRideroute}>
          <i className="fa fa-power-off"></i>
          <span >Log out</span>
        </div>
      </div>
    </div>
  );
};

export default DriverSidebar;