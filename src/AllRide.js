import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import Datalist from "./Datalist";
import logo from './pictures/logo.png'
import {displayCarDetails} from './Array'




export const Available = (props) => {
    const [trip, setTrip]= useState({location:'', destination: ''})
    const [amount, setAmount] = useState(0)
    const [search, setSearch] = useState('')

const renderRide = ()=>{
    
}





    
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
     
    </div>
  </div>
   )
    
    )
    
  ))}
      </div>
    </>
    );
  };