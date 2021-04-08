import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input className='inputField' type={props.type} placeholder={props.placeholder} onChange ={e => e.target.value} />
        </div>
    )
}

export default Input
