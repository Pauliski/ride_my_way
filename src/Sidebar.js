import React, {useContext} from 'react'
import {FaTimes} from 'react-icons/fa';
import {Link} from '@reach/router'
import {SidebarContext} from '../src/Context/SidebarContext'

const Sidebar = () => { 
    const navbar = ['Home', 'Service', 'About', 'Contact', 'Blog'];
    const {isOpen, toggle} = useContext(SidebarContext)
    
    return (
        <div className={`sideBar ${isOpen  ? '' : 'false'}`}  >
            <div className='icon'>
                <FaTimes className='close' onClick={toggle} />
                <div className='sidebarMenu'>
        
                <ul className='sidebarUl'>{navbar.map(item =>(
                <li className='sidebarLink' key={item}  onClick={toggle}><Link to={`/${item.toLowerCase()}`} >{item}</Link></li>
                ))}</ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar