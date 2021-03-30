import React, { useState} from 'react';
import {Link} from '@reach/router'
import { FaBars} from 'react-icons/fa';
import Sidebar from './Sidebar';

const Navbar = () => {
    const navbar = ['Home', 'Service', 'About', 'Contact', 'Blog']
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
        }

    return ( 
        <div>
            <div className='bar'>
                <FaBars className='Fabar' onClick={toggle}/>
            </div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <ul className='navUl'>{navbar.map(item =>(
                
                <li key={item}  className='navLink'><Link to={`/${item.toLowerCase()}`} >{item}</Link></li>
                ))}</ul>
        </div>
     );
}
 
export default Navbar;