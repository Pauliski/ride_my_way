import React, {useContext} from 'react';
import {messages} from './NotificationTemplate'
import {AiFillDelete} from 'react-icons/ai'
import { ThemeContext } from './Context/ThemeContext';
import './style.css'

const Notification = () => {
    const { toggleTheme, displayTheme, color } = useContext(ThemeContext);
  let theme = color[displayTheme]

    return ( 
        <div >
            {messages.map(message =>(
                <div key={message.message} className='notification' style={{backgroundColor: theme.background, color: theme.text}}>
                    <div className='messageContent'>{message.sender} <span  className='messageBody'>{message.message}</span><AiFillDelete className='delete'/></div>
                </div>
            ))}
        </div>
     );
}
 
export default Notification;