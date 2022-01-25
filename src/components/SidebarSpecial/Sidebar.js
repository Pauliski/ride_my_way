import "./Sidebar.css";
import { useHistory } from "react-router";
import { FaTimes, FaHistory } from "react-icons/fa";
import { AiOutlineHome, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
// import { isLogout } from "../../../features/passenger/driverSlice";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const riderHomeroute = () => {
    history.push("/driver/dashboard");
    // setsidebarOpen(false);
  };
  // const riderEditroute = ()=>{
  //   history.push("/driver/edit-profile")
  //   // setsidebarOpen(false);
  // }

  const signOutRideroute = () => {
    localStorage.removeItem("driverToken");
    // dispatch(isLogout())
    history.push("/");
    // setsidebarOpen(false);
  };

  

  return (
    <div
      className={sidebarOpen ? "sidebar-responsive" : "close-sidebar"}
      id="sidebar"
    >
      <div className="sidebar-title">
        <div className="sidebar-img">
          <i className="fa fa-car" aria-hidden="true"></i>
          <h1>Ride My Way</h1>
        </div>
        <FaTimes
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
        />
      </div>

      <div className="sidebar-menu" onClick={() => closeSidebar()}>
        <div className="sidebar-link" onClick={riderHomeroute}>
          <AiOutlineHome className="fa fa-home" />
          <span>Quick Book</span>
        </div>
        <a href="#need-help">
          <div className="sidebar-link" >
            <AiFillEdit className="fa fa-user-secret" aria-hidden="true" />
            <span>Need Help</span>
          </div>
        </a>
        <div
          className="sidebar-link"
          onClick={() => history.push("/driver/history")}
        >
          <FaHistory className="fa fa-building-o" />
          <span>Amenities</span>
        </div>
        <div
          className="sidebar-link"
          onClick={() => history.push("/driver/ride/request")}
        >
          <i className="fa fa-building-o"></i>
          <span>Passenger Login </span>
        </div>
        <div
          className="sidebar-link"
          onClick={() => history.push("/driver/offer")}
        >
          <i className="fa fa-building-o"></i>
          <span>Driver Login </span>
        </div>
        <div
          className="sidebar-link"
          onClick={() => history.push("/driver/add/offer")}
        >
          <i className="fa fa-building-o"></i>
          <span>Sign Up as Passenger </span>
        </div>
        <div
          className="sidebar-link"
          onClick={() => history.push("/driver/add/offer")}
        >
          <i className="fa fa-building-o"></i>
          <span>Sign Up as Driver </span>
        </div>

        <div className="sidebar-logout" onClick={signOutRideroute}>
          <i className="fa fa-power-off"></i>
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
