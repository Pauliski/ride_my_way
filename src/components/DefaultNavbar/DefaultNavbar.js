import React from 'react'
import { Link } from 'react-router-dom'
import {navbar} from '../../Array'
import './DefaultNavbar.css'

function DefaultNavbar() {
    return (
        <div>
            <ul className="navUl">
        {navbar.map((item) => (
          <li key={item} className="navLink">
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default DefaultNavbar
