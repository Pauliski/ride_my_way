import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router } from "@reach/router";
import Homepage from "./Homepage";
import SidebarContextProvider from "./Context/SidebarContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import ThemeContextProvider from "./Context/ThemeContext";
import AvailableRide from "./AvailableRide";
import RecentTrip from "./RecentTrip";
import DriverNotification from "./DriverNotification";
import DriverDashboard from "./DriverDashboard";
import Check from "./Check";
import Chart from "./Chart";
import SideIcon from "./SideIcon";
import Card from "./Card";
import RecentTemplate from "./RecentTemplate";
import DriverSignup from "./DriverSignup";
import SignupUpload from "./SignupUpload";


ReactDOM.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <ThemeContextProvider>
        <Router>
          <Dashboard exact path="/dashboard" />
          <Dashboard exact path="/notification" />
          <AvailableRide exact path='/availablerides' />
          <Chart path="/chart" />
          <RecentTrip exact path='/recenttrips' />
          {/* <DriverDashboard exact path='/driver/dashboard' /> */}
          <DriverDashboard exact path='/driver/notification' />
          <Check exact path='/driver/dashboard' />
          <Card exact path='/card' />
          <RecentTemplate path='/hello' />
          <DriverSignup path='/driver/signup' />
          <SignupUpload path='/driver/signuppages' />

        </Router>
      </ThemeContextProvider>
      <Router>
      <Homepage exact path="/" />
      <Homepage exact path="/home" />
      <Login exact path="/login" />
      <Signup exact path="/signup" />
      </Router>
    </SidebarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
