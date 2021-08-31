import React from 'react'

export const Select = (props) => {
    return (
        <div className="select-container">
            <span className="select-span">{props.title}</span>
            <select name={props.name} id={props.id} className="select" onChange={props.handleChange}>
            {props.children}
    </select>
        </div>
    )
}

export const OptionDefault = (props)=>{
    return(
        <>
        <option value={null} selected disabled hidden>
          Select an Option
      </option>
    </>
    )
}

export const Option = (props)=>{
   return(
    <>
    <option value={props.value}>{props.name}</option>
    </>
   )
}