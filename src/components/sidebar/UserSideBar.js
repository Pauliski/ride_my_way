import "./usersidebar.css";
import { useHistory } from "react-router";
import {FaTimes} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { isLogout } from "../../features/passenger/userSlice";


const UserSideBar = ({ sidebarOpen, closeSidebar }) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const riderHomeroute = ()=>{
    history.push("/offers")
    // setsidebarOpen(false);
  }
  const riderEditroute = ()=>{
    history.push("/edit-profile")
    // setsidebarOpen(false);
  }
  
  const signOutRideroute = ()=>{
    localStorage.removeItem("jwtToken")
    dispatch(isLogout())
    history.push("/")
    // setsidebarOpen(false);
  }

  return (
    <div className={sidebarOpen ? "usersidebar-responsive" : ""} id="usersidebar">
      <div className="usersidebar-title">
      <div className="usersidebar-img" >
        <i className="fa fa-car" aria-hidden="true"></i>
        <h1>Ride My Way</h1>
      </div>
      <FaTimes onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"/>
        
      </div>

      <div className="usersidebar-menu">
        <div className="usersidebar-link" onClick={riderHomeroute}>
          <i className="fa fa-home"></i>
          <span >Home</span>
        </div>
  
        <div className="usersidebar-link" onClick={riderEditroute}>
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <span >Edit Profile</span>
        </div>
        <div className="usersidebar-link">
          <i className="fa fa-building-o"></i>
          <span onClick={()=>history.push('/passenger/ride/history')}>My Ride History</span>
        </div>

        {/* <div className="Usersidebar__link">
          <i className="fa fa-question"></i>
          <a onClick={searchForRideroute }>Find a Ride</a>
        </div> */}

        <div className="usersidebar-logout">
          <i className="fa fa-power-off"></i>
          <a onClick={signOutRideroute}>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;