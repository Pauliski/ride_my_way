import { IoNotificationsCircle } from "react-icons/io5";
import {FaHistory} from 'react-icons/fa'
import {HiStatusOnline} from 'react-icons/hi'
import {GiSteeringWheel} from 'react-icons/gi'
import {FcDepartment} from 'react-icons/fc'
import {BiMap} from 'react-icons/bi'
import {getRandomStr} from './IdGenerator'

import car5 from './pictures/car5.png'
import car6 from './pictures/car6.png'
import car7 from './pictures/car7.png'
import car8 from './pictures/car8.png'
import pass1 from './pictures/pass1.png'
import pass2 from './pictures/pass2.png'
import pass3 from './pictures/pass3.png'
import pass4 from './pictures/pass4.png'
import map from './pictures/map.png'
import './style.css'

export const authNavbar = [
  "Notification",
  "Recent trips",
  "Available Rides"
];

export const navbar = ["Home", "Service", "About", "Contact"];
export const themeDropdown = ["Dark", "Light"];
export const DashboardSidebar = [
  { text: "Notification", icon: <IoNotificationsCircle className='icons'/> },
  { text: "Recent Trips", icon: <FaHistory className='icons'/> },
  { text: "Available Rides", icon: <HiStatusOnline  className='icons'/> }
];


export const AvailableRides =[
  {name: 'Sule', location: 'Kaduna', id: getRandomStr(10), src: car5, passport: pass1, years: 4, carModel: 'Land Rover 2021' },
  {name: 'Kolade', location: 'Lagos', id: getRandomStr(10), src: car6, passport: pass2, years: 5, carModel: 'DIscussion Continue (Toyata)'},
  {name: 'Peter', location: 'Lagos', id: getRandomStr(10), src: car7, passport: pass3, years: 6, carModel: 'Siena'},
  {name: 'Chibuzor', location: 'Imo', id: getRandomStr(10), src: car8, passport: pass4, years: 2, carModel: 'Hummer 2'} 
]

export const Recent = [
  {
      id: 1, name:'Chibuzor', src: pass1, drive: <GiSteeringWheel className='tripIcons'/>, depart:<FcDepartment className='tripIcons'/>, location: <BiMap className='tripIcons' />,  trip:'Lagos - Abuja'
  },
  {
      id: 2, name:'Peter', src: pass2, drive: <GiSteeringWheel className='tripIcons'/>, depart: <FcDepartment className='tripIcons'/>, location: <BiMap className='tripIcons' />, trip:'Benin - Onitsha'
  },
  {
      id: 3, name: 'Hammed',  src: pass3, drive: <GiSteeringWheel className='tripIcons'/>, depart: <FcDepartment className='tripIcons'/>, location: <BiMap className='tripIcons' />, trip:'CMS - Magodo'
  }, 
  {
      id: 4, name: 'Britney', src: pass4, drive: <GiSteeringWheel className='tripIcons'/>, depart: <FcDepartment className='tripIcons' />, location: <BiMap className='tripIcons' />, trip:'Lekki - Isolo'
  }
]

export const messages = [
  {
      sender: 'Pauliski',
      message: 'Order your first ride at a discount of 30%',
      id: getRandomStr(10)
  },
  {
      sender: 'Ride my way',
      message: 'Welcome to our platform, your satisfaction is our priority',
      id: getRandomStr(10)
  },
  {
      sender: 'Shehu from Ride-my-way',
      message: 'Welcome to our platform, your satisfaction is our priority',
      id: getRandomStr(10)
  },
  {
      sender: 'Shukurah from Ride-my-way',
      message: 'Welcome to our platform, your satisfaction is our priority',
      id: getRandomStr(10)
  }
]
