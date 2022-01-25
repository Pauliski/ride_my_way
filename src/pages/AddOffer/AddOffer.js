import React, { useState} from 'react'
import AddOfferForm from '../../components/AddOfferForm/AddOfferForm';
import DriverNavbar from '../../components/driver/DriverNavbar/DriverNavbar';
import DriverSidebar from '../../components/driver/DriverSidebar/DriverSidebar'
import Navbar from '../../components/navbar/navbar'
import Search from '../../components/Search/Search'

function AddOffer() {
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
            <AddOfferForm />
        </div>
    )
}

export default AddOffer
