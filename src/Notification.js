import React, {useContext, useState} from 'react';
import {messages} from './Array'
import {AiFillDelete} from 'react-icons/ai'
import { ThemeContext } from './Context/ThemeContext';
import './style.css'

const Notification = () => {
    const { toggleTheme, displayTheme, color } = useContext(ThemeContext);
    const [diplayMessage, setDisplayMessage] = useState(messages)
  let theme = color[displayTheme]
    const Delete =(id)=>{
     let filteredItem =   messages.filter(item => { 
        return item.id !== id} )
    setDisplayMessage(filteredItem) 
    }
    return ( 
        <div >
            {diplayMessage.map(message =>(
                <div key={message.id} className='notification' style={{backgroundColor: theme.background, color: theme.text}}>
                    <div className='messageContent'>{message.sender} <div className='messageBody'>{message.message}</div><AiFillDelete className='delete' onClick={()=>Delete(message.id)}/></div>
                </div>
            ))}
        </div>
     );
}
 
export default Notification;