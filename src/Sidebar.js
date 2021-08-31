import React, {useContext} from 'react'
import {FaTimes} from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import {SidebarContext} from '../src/Context/SidebarContext'

const Sidebar = (props) => { 
    // const navbar = ['Home', 'Service', 'About', 'Contact', 'Blog'];
    const history = useHistory()
    const {isOpen, toggle} = useContext(SidebarContext)
    
    return (
        <div className={`sideBar ${isOpen  ? '' : 'false'}`}  >
            <div className='icon'>
                <FaTimes className='close' onClick={toggle} />
                <div className='sidebarMenu'>
                <ul className='sidebarUl'>{props.navbar.map(item =>(
                
                <li className='sidebarLink' key={item}  onClick={toggle}><Link to={`/${item.toLowerCase().replace(/ /g,"")}`} >{item}</Link></li>
                ))}</ul>
                
                </div>
                <div onClick={toggle}>{props.children}</div>
                
            </div>
            
        </div>
    )
}

export default Sidebar