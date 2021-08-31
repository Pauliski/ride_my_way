
import React, { useEffect, useState } from 'react'
import EditProfileCard from '../../components/EditProfileCard/EditProfileCard'
import Navbar from '../../components/navbar/navbar'
import UserSideBar from '../../components/sidebar/UserSideBar'

function EditProfile() {
    const [sidebarOpen, setsidebarOpen] = useState(false);
  
    const openSidebar = () => {
        setsidebarOpen(true);
      };
      const closeSidebar = () => {
        setsidebarOpen(false);
      };
      useEffect(()=>{
       
      
        
    },[])
    return (
        <div className="containe">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <UserSideBar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <EditProfileCard />
        </div>
    )
}

export default EditProfile
