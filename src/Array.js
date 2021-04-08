import { IoNotificationsCircle } from "react-icons/io5";
import {FaHistory} from 'react-icons/fa'
import {HiStatusOnline} from 'react-icons/hi'
import car1 from './pictures/car1.png'
import car2 from './pictures/car2.jpg'
import car3 from './pictures/car3.jpg'
import car4 from './pictures/car4.jpg'
import './style.css'

export const authNavbar = [
  "Home",
  "Recent trips",
  "Available Rides",
  "Contact",
  "Blog",
];

export const navbar = ["Home", "Service", "About", "Contact", "Blog"];
export const themeDropdown = ["Dark", "Light"];
export const DashboardSidebar = [
  { text: "Notification", icon: <IoNotificationsCircle className='icons'/> },
  { text: "Recent Trips", icon: <FaHistory className='icons'/> },
  { text: "Available Rides", icon: <HiStatusOnline  className='icons'/> }
];


export const AvailableRides =[
  {name: 'Sule', location: 'Kaduna', id: 1, src: car1 },
  {name: 'Kolade', location: 'Lagos', id: 2, src: car2},
  {name: 'Peter', location: 'Lagos', id: 3, src: car3},
  {name: 'Chibuzor', location: 'Imo', id: 4, src: car4} 
]