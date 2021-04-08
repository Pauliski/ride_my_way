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


ReactDOM.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <ThemeContextProvider>
        <Router>
          <Dashboard exact path="/dashboard" />
          <Dashboard exact path="/notification" />
          <AvailableRide exact path='/availablerides' />
          <RecentTrip exact path='/recenttrips' />
        </Router>
      </ThemeContextProvider>
      <Router>
        <Homepage path="/ride_my_way" />
        <Homepage path="/home" />
        <Homepage exact path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    </SidebarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
