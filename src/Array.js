import { IoNotificationsCircle } from "react-icons/io5";
import {FaHistory} from 'react-icons/fa'
import {HiStatusOnline} from 'react-icons/hi'
import {GiSteeringWheel} from 'react-icons/gi'
import {FcDepartment} from 'react-icons/fc'
import {BiMap} from 'react-icons/bi'
import { ImUsers } from "react-icons/im";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdStarHalf } from "react-icons/md"
import { GrCompliance} from "react-icons/gr"
import { FcCancel} from "react-icons/fc"
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

export const driversMessages =[]
//   {sender: 'Ride-my-way',
//   message: 'This is to inform you that our customer satisfactory is our priority as well as your well being, please stay safe as we prepare your first trip with us',
//   id: getRandomStr(12)
// },
// {
// sender: 'Ride-my-way',
//   message: 'Welcome to our platform, please enjoy your ride with us',
//   id: getRandomStr(12)
// }

export const chartArray =[
  {month: 'January', totalTrip: 55, cancelTrips: 5},
  {month: 'February', totalTrip: 70, cancelTrips: 17},
  {month: 'March', totalTrip: 45, cancelTrips: 10},
  {month: 'April', totalTrip: 32, cancelTrips: 3},
  {month: 'May', totalTrip: 23, cancelTrips: 7},
  {month: 'June', totalTrip: 65, cancelTrips: 5},
  {month: 'July', totalTrip: 64, cancelTrips: 1},
  {month: 'August', totalTrip: 47, cancelTrips: 3},
  {month: 'September', totalTrip: 51, cancelTrips: 19},
  {month: 'October', totalTrip: 50, cancelTrips: 9},
  {month: 'November', totalTrip: 77, cancelTrips: 23},
  {month: 'December', totalTrip: 80, cancelTrips: 31}
]


export const driverTopSection = [
  {
    icon: <ImUsers className='likes' />, text: 'LIKES', amount: '500+'
  }
 
]
let sumCancel = 0;
    for (let i = 0; i < chartArray.length; i++) {
      sumCancel += chartArray[i].cancelTrips;
    }
    let sum = 0;
    for (let i = 0; i < chartArray.length; i++) {
      sum += chartArray[i].totalTrip;
    }

export const driverTopSection2 = [
  {
    icon: <GrCompliance className='completeTrip' />, text: 'Completed Trips', amount: sum
  },
  {
    icon: <FcCancel className='cancelTrip' />, text: 'Cancel Trip', amount: sumCancel
  }
]
export const CardDetails =[
  {
    passport: pass1,
    name: ' Shehu',
    contact: 2348023423490,
    location: ' Ire Akari Estate, Isolo, Lagos',
    destination: ' Apapa, Lagos',
    id: getRandomStr(5)
  }
]