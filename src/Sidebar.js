import React from 'react'
import {FaTimes} from 'react-icons/fa';
import {Link} from '@reach/router'

const Sidebar = ({isOpen, toggle}) => { 
    const navbar = ['Home', 'Service', 'About', 'Contact', 'Blog'];
    
    return (
        <div className={`sideBar ${isOpen  ? '' : 'false'}`}  >
            <div className='icon'>
                <FaTimes className='close' onClick={toggle} />
                <div className='sidebarMenu'>
        
                <ul className='sidebarUl'>{navbar.map(item =>(
                <li className='sidebarLink' key={item}  ><Link to={`/${item.toLowerCase()}`} >{item}</Link></li>
                ))}</ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar