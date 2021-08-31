import React, { useState } from 'react'
import person  from '../../pictures/pass1.png'
import {BsPhone} from 'react-icons/bs'
import './DisplayOffer.css'


function DisplayOffer({name, location, destination, mobile, amount, joinRide, id}) {
    const [disabled, setDisabled]  = useState(false)
    const joinThisRide = ()=>{
        joinRide(id)
        setDisabled(true)
    }
    return (
    
            <div className='display-offer'>
                <div className="display-offer-content">
                    <div className='content-left'>
                        <div className="content-left-head">
                            <img src={person} className="content-passport" alt=""/>
                            <span>{name}</span>
                        </div>
                        <div>
                            <div>
                                <span><b>From</b>: {location}</span>
                            </div>
                            <div>
                                <span><b>To</b>: {destination}</span>
                            </div>
                            <div className="content-mobile">
                                <BsPhone className="content-mobile-icon"/>
                                <span>{mobile}</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className='content-right'>
                        <span>{`#${amount}`}</span>
                        <button className="content-button" onClick={joinThisRide} disabled={disabled}>Join Ride</button>
                    </div>
                </div>
            </div>
       
    )
}

export default DisplayOffer
