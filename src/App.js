import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import ThemeContextProvider from "./Context/ThemeContext";
import AvailableRide from "./AvailableRide";
import RecentTrip from "./RecentTrip";
import DriverDashboard from "../src/components/DriverDashboard/DriverDashboard";
import Card from "./Card";
import RecentTemplate from "./RecentTemplate";
import SignupUpload from "./SignupUpload";
import ProtectedRoute from "./validation/ProtectedRoute";
import EditProfile from "./pages/EditProfile/EditProfile";
import Upload from "./pages/ImageUpload/ImageUpload";
import Offer from "./components/Offer/Offer";
import DisplayOffer from "./components/DisplayOffer/DisplayOffer";
import AllOffers from "./pages/AllOffers/AllOffers";
import DriverRegister from "./components/DriverRegister/DriverRegister";
import AllAvailableOffer from "./pages/AllAvailableOffer/AllAvailableOffer";
import AddOffer from "./pages/AddOffer/AddOffer";
import MyOffer from "./pages/MyOffers/MyOffer";
import LoginPage from "./pages/LoginPage/LoginPage";
import Modal from "react-modal";
import PrivateRoute from "./validation/PrivateRoute";
import DriverEditProfile from "./pages/DriverEditProfile/DriverEditProfile";
import DriverHistory from "./pages/DriverHistory/DriverHistory";
import PassengerHistory from './pages/PassengerHistory/PassengerHistory'

Modal.setAppElement("#root");

function App() {
  return (
    <Switch>
      <ThemeContextProvider>
        <Route component={Homepage} exact path="/" />
        <Route component={Homepage} path="/home" />
        <Route component={LoginPage} path="/login" />
        <Route component={Login} path="/passenger/login" />
        <Route component={Signup} path="/signup" />
        <ProtectedRoute component={Dashboard} path="/notification" />
        {/* <ProtectedRoute component={AvailableRide}  path='/availablerides' /> */}
        <ProtectedRoute component={AllOffers} path="/dashboard" />
        <Route component={EditProfile} path="/edit-profile" />
        <Route component={DriverEditProfile} path="/driver/edit/profile" />
        <Route component={DriverHistory} path="/driver/history" />
        <Route component={PassengerHistory} path="/passenger/ride/history" />
        <Route component={Offer} path="/chart" />
        <ProtectedRoute component={RecentTrip} path="/recenttrips" />
        <PrivateRoute component={AllAvailableOffer} path="/driver/dashboard" />
        <Route component={DriverRegister} path="/driver/signup" />
        <PrivateRoute component={MyOffer} path="/driver/offer" />
        <PrivateRoute
          component={AllAvailableOffer}
          path="/driver/ride/request"
        />
        <PrivateRoute component={AddOffer} path="/driver/add/offer" />
        <Route component={Card} path="/card" />
        <Route component={RecentTemplate} path="/hello" />
        {/* <Route component={DriverSignup} path='/driver/signup' /> */}
        <Route component={SignupUpload} path="/driver/signuppages" />
        <Route component={Upload} path="/upload" />
        <Route component={AllOffers} path="/offers" />
        <Route component={DisplayOffer} path="/availablerides" />
        {/* <ProtectedRoute component={Dashboard} path="/app"/> */}
      </ThemeContextProvider>
    </Switch>
  );
}

export default App;
