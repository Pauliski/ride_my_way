import React from 'react'
import {FaHandPointUp} from 'react-icons/fa'

const DashboardText = (props) => {
    return ( 
        <h1 className={props.className}>Place your ride Order <FaHandPointUp /></h1>
     );
}
 
export default DashboardText;