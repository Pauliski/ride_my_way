import React, {useState} from 'react'
import DisplayAllOffers from '../../DisplayAllOffers/DisplayAllOffers';
import DriverAvailableOffer from '../DriverAvailableOffer/DriverAvailableOffer';
import DriverNavbar from '../DriverNavbar/DriverNavbar';
import DriverSidebar from '../DriverSidebar/DriverSidebar';
import Navbar from '../../navbar/navbar';
import Search from '../../Search/Search';
import UserSideBar from '../../sidebar/UserSideBar';

function DriverDashboard() {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    }
    return (
        <div className="containe">
            <DriverNavbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
                <Search />
            </DriverNavbar>
            <DriverSidebar sidebarOpen={sidebarOpen} closeSidebar={openSidebar}/>
            <DriverAvailableOffer />
           
           
        </div>
    )
}

export default DriverDashboard
