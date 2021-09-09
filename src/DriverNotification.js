import React, {useContext, useEffect, useState} from 'react';
import {AiFillDelete} from 'react-icons/ai'
import { ThemeContext } from './Context/ThemeContext';
import './style.css'

const DriverNotification = () => {
    const { displayTheme, color } = useContext(ThemeContext);
    const [displayMessage, setDisplayMessage] = useState([])
    const [notifyLength, setNotifyLength] = useState()
  let theme = color[displayTheme]
    const Delete =(id)=>{
     let filteredItem =   displayMessage.filter(item => { 
        return item.id !== id} )

    setDisplayMessage(filteredItem) 
    }
    // useEffect(() => {
    //     const displayNotification = JSON.parse(localStorage.getItem('driversMsg')) || []
    //    setDisplayMessage(displayNotification)
    //    setNotifyLength(displayNotification.length)
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('driversMsg', JSON.stringify(displayMessage))
    // }, [displayMessage, notifyLength])
    return ( 
        <div>
            {console.log(notifyLength)}
            {displayMessage.map(message =>(
                <div key={message.id} className='notification' style={{backgroundColor: theme.background, color: theme.text}}>
                    <div className='messageContent'>{message.sender} <div className='abs'><span className='messageBody' title={message.message}>{message.message}</span><span><AiFillDelete className='delete' onClick={()=>Delete(message.id)}/></span></div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default DriverNotification;