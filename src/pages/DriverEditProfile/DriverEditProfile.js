import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DriverEditProfileCard from '../../components/driver/DriverEditProfileCard/DriverEditProfileCard';
import DriverNavbar from '../../components/driver/DriverNavbar/DriverNavbar';
import DriverSidebar from '../../components/driver/DriverSidebar/DriverSidebar';


function DriverEditProfile() {
    const [sidebarOpen, setsidebarOpen] = useState(false);

    const openSidebar = () => {
        setsidebarOpen(true);
      };
      const closeSidebar = () => {
        setsidebarOpen(false);
      };
      
    return (
        <div className="containe">
            <DriverNavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <DriverSidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <DriverEditProfileCard />
        </div>
    )
}

export default DriverEditProfile
