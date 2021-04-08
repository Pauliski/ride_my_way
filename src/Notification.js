import React from 'react';
import {messages} from './NotificationTemplate'
import {AiFillDelete} from 'react-icons/ai'
import './style.css'

const Notification = () => {
    return ( 
        <div >
            {messages.map(message =>(
                <div key={message.message} className='notification' >
                    <div className='messageContent'>{message.sender} <span  className='messageBody'>{message.message}</span><AiFillDelete className='delete'/></div>
                </div>
            ))}
        </div>
     );
}
 
export default Notification;