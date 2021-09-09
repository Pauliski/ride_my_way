import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import{ Datalist} from "./Datalist";
import logo from './pictures/logo.png'
import {displayCarDetails} from './Array'
import "./style.css";

export const Map = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <Link key={item} to={`/${item.toLowerCase()}`}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export const MapList = (props) => {
  return (
    <ul
      className={props.ulClassName}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
       <div className='logo'>
         
           <img src={logo} alt="hello" style={{width: '40px', height: '40px', marginLeft: '20px'}}/>
        
        
        <p>Ride-my-way</p>
      </div>
      {props.items.map((item) => (
        <li key={item} className={props.className}>
          <Link
            // to={`/${item.toLowerCase()}`}
            to={`/${item.toLowerCase().replace(/ /g, "")}`}
            style={{
              color: `${props.color}`,
              backgroundColor: `${props.backgroundColor}`,
            }}
          >
            {item}
          </Link>
        </li>
      ))}
      {props.children}
     
    </ul>
  );
};

export const DashboardSide = (props) => {
  return (
    <ul
      className={props.ulClassName}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      {props.items.map((item) => (
        <li key={item.text} className={props.className}>
          <Link
            to={`/${item.text.toLowerCase().replace(/ /g, "")}`}
            style={{
              color: `${props.color}`,
              backgroundColor: `${props.backgroundColor}`,
            }}
          >
            {item.icon}
            {item.text}
          </Link>
        </li>
      ))}
      {props.children}
    </ul>
  );
};

export const Available = (props) => {
  const [trip, setTrip]= useState({location:'', destination: ''})
  const [amount, setAmount] = useState(0)
  const [search, setSearch] = useState('')
  
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }



const handleBlur = (e)=>{
e.target.value = ''
}

const handleChange = (e, inputId)=>{
 
const {name, value, id} = e.target
console.log(inputId)
console.log([name], value)
if(id === inputId){
   const allInputElemet = document.getElementsByClassName(inputId)
   allInputElemet[0].setAttribute('value', e.target.value)
   setTrip(Object.assign(trip, {location: allInputElemet[0].value, destination: allInputElemet[1].value}))
   console.log(allInputElemet[2])  
   if(trip.location === 'Mushin' && trip.destination === 'Oshodi'){
    // allInputElemet[2].append('Amount: #1500')
   }
}

}
const dest = displayCarDetails.map(item => item.map(eachItem => eachItem.destination))
const hello = dest.flat()
console.log(search !== '' && hello.indexOf( search) === -1)

if(search !== '' && hello.indexOf(search) === -1){ 
  return null}
const filterRide = hello.filter(ride => {
  return ride.indexOf(search) !== -1
})
  
  return (
    <>
    
    <input type="text"  value={search} onChange={handleSearch}/>
    <div className='cardContainer' style={{backgroundColor: `${props.backgroundColor}`}}>
{props.items.map(item =>(
 
 item.map((eachItem, i)=> (
  <div className="flip-card" key={item.id}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={eachItem.src} alt="Avatar" style={{width:'95%', height: '200px'}} />
      
      <label htmlFor="location">
     Location: <input type='text' list='data' className={eachItem.id}  id={eachItem.id} name={`${eachItem.destination}-i` } onBlur={handleBlur} onChange={(e)=>handleChange(e, eachItem.id)} />
     <Datalist id='data'/>
      </label> 
      <label htmlFor="destination">
     Destination: <input type='text' className={eachItem.id} value={eachItem.destination} disabled/>
     <p className={eachItem.id}></p>
      </label>
      <button>JOIN RIDE</button>
    </div>
    {/* <div className="flip-card-back">
    <div><img src={item.passport} alt="Avatar" style={{width:'120px', height:'120px', borderRadius: '50%'}} />
   
   </div>
      <h3>{item.name}</h3> 
      <p>{item.years} years Experience</p> 
      <p>Car model: {item.carModel}</p>
      <button onClick={()=>props.toggleModal(item)}>Order Now</button>
      
    </div> */}
  </div>
</div>
 )
  
  )
  
))}












      {/* {props.items.map((item) => (
        <div key={item.id} className="AvailableContent">
          <div>
            <img src={item.src} alt="pix" className="AvailableRidePix" />
          </div>
          <div>
            <h3>Driver's Name: {item.name} </h3>
            <h4>Id: {item.id}</h4>
            <h4>Location: {item.location}</h4>
          </div>
        </div>
      ))} */}
    </div>
  </>
  );
};

export const MapRecentTrips = (props) => {
  return (
    <div>
      
        
      {displayCarDetails.map((item) => (
        <div key={item.name} className='tripDetails'>
          <div className='firstChild'>
            <img src={item.src} alt="hello" className="drivers" />{" "}
            <div>Driver's name: {item.name} </div>
            <div>id: {item.id} </div>
          </div>

          <div className='secondChild'>
            <div>
              {item.location}
              <span className='location'>{item.trip}</span>
            </div>
            <div>
              {item.drive}
              <span className='road'>Road</span>
            </div>
            <div>
              {item.depart}
              <span className='date'>Departing: 26/3/2021 - 8:17 PM</span>
            </div>
            
          </div>
          {/* <div className='thirdChildContainer'><div className='thirdChild'><img src={item.map} alt="map" className="map" style={{width: '100px', height: '100px'}} /></div></div> */}
          
        </div>
      ))}
    </div>
  );
};

export const TopSection =(props)=>{
  return(
  <div className='headContainer' style={{display: 'flex'}}>
    {props.items.map(item => (
      <div className="checkHead" key={item.text}>
      <div className="likesContainer">
        {item.icon}
      </div>
      <div className="checkHeadText">
        {item.text} <div>{item.amount }</div>
      </div>
    </div>
    ))}{props.children}</div>
  )
}

export const TopSection2 = (props) =>{
  return(
    <div className='checkt'>
      
        <div className="checkHead" key={props.text}>
        <div className="likesContainer">
          {props.icon}
        </div>
        <div className="checkHeadText">
          {props.text} <div>{props.amount }</div>
        </div>
      </div>
      {props.children}</div>
    )
}

export const TopSec = (props)=>{
  return(
    <div className='checkt'>
        <div className="checkHead" key={props.text}>
        <div className="likesContainer">
          {props.icon}
        </div>
        <div className="checkHeadText">
          {props.text} <div>{props.amount }</div>
        </div>
      </div>
      </div>
    )
}