import React, {useState} from 'react';
import {displayCarDetails} from './Array'
import {Datalist, localGovernment} from "./Datalist";
import {BsSearch, BsTypeH1} from 'react-icons/bs'
import DashboardText from './DashboardText';

const CardBody = (prop)=>{
    const icon = <BsSearch className='search-icon'/>
    const [trip, setTrip]= useState({location:'', destination: ''})
    const [searchRide, setSearchRide] = useState(false)
    const [locationState, setLocationState] = useState({})
    const [amount, setAmount] = useState(0)
    const [search, setSearch] = useState('')
    const driverDetails = displayCarDetails.flat().flat()
    const destination = driverDetails.map(dest => dest.destination)

    const handleBlur = (e)=>{
        e.target.value = ''
        }
        const handleSearch = (e)=>{
           
            setSearch(e.target.value)
          }
        const handleChange = (e)=>{
            const {name, value} = e.target
            if(e.keyCode === 8) setSearchRide(false)
            const tripClone = {...trip}
            tripClone[destination] =value
            console.log(e.keyCode)
            if(tripClone === '') {
                setSearchRide(false)
            }
            setTrip(
                {
                    ...trip,
                    [name]: value
                }
            )
        }
        const handleOnclick = ()=>{
            if(!trip.location) return
            if(!trip.destination) return
            if(!trip.location && !trip.destination){
                return
            }else{
                setSearchRide(true)
            }
            if(localGovernment.indexOf(trip.location) < 0){
                console.log(localGovernment.indexOf(trip.location) < 0)
                setSearchRide(false)
            }
            
        }
       
        const handleOnchange = (e, itemId)=>{
            const locationStateClone = {...locationState}
            locationStateClone[itemId] = e.target.value;
            setLocationState(locationStateClone)
            console.log(locationStateClone)
        }     
    const returnCard = Cards =>{
    const filterRideD = Cards.filter(dest => dest.destination.toLowerCase().includes(trip.destination.toLowerCase()))
    
        return (
           
            <>
             {searchRide ?<>
            {filterRideD.map(eachItem =>
            <div className="flip-card" key={eachItem.id}>
                {/* {console.log(filterRideD)} */}
                <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={eachItem.src} alt="Avatar" style={{width:'95%', height: '200px'}} />
                  <label htmlFor="location">
                 Location: <span type='text'  onChange={(e) => handleOnchange(e, eachItem.id)} list='data' className='ride-location' name={`${eachItem.destination}-i` }   disabled>{trip.location }</span> <br />
                 <Datalist id='data'/>
                  </label> 
                  <label htmlFor="destination">
                 Destination: <span type='text' className='ride-location'  disabled>{eachItem.destination}</span>
                 <p className={eachItem.id}></p>
                  </label>
                  <button>JOIN RIDE</button>
                </div> 
              </div>
               </div> 
                )}</> :
   <div></div>
                
            }
            
   
            </>
            
        )
        
    }

    return(
        <div className='dashboard-top'>  
                {/* {console.log(destination)} */}
                <div className='search'>
                     {icon} 
                     <input type="text" placeholder='Please enter your location' name='location'  value={trip.location} onChange={handleChange} list='data' className='search-input location-input'onKeyDown={handleChange} />
                     <Datalist id='data' />
                     <input type="text" placeholder='Please enter your Destination' name='destination' value={trip.destination} onChange={handleChange} className='search-input destination-input' onKeyDown={handleChange} list='data'/>
                     <button onClick={handleOnclick} className='place-order-button'>Place Order</button>
                </div>
                <DashboardText className ={searchRide ? 'hide-display' : 'dashboard-text'}/>
                <div  className='cardContainer'>
                    {displayCarDetails.map(item =><>{ returnCard(item)} </>)}
                </div>
        </div>
    )
}

export default CardBody