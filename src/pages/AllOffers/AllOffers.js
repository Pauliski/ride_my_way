import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import DisplayAllOffers from '../../components/DisplayAllOffers/DisplayAllOffers'
import Navbar from '../../components/navbar/navbar'
import Search from '../../components/Search/Search'
import UserSideBar from '../../components/sidebar/UserSideBar'
import { getUser } from '../../store/actions/types/userAction'


function AllOffers() {
    const dispatch = useDispatch()
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(!sidebarOpen);
      };
      useEffect(() => {
         getUser(dispatch)    
      }, [])

    return (
        <div className="containe">
            <Navbar sidebarOpen={openSidebar} openSidebar={openSidebar}>
                <Search />
            </Navbar>
            <UserSideBar sidebarOpen={sidebarOpen} closeSidebar={openSidebar}/>
            {/* <Offer /> */}
            <DisplayAllOffers />
        </div>
    )
}

export default AllOffers
