import React, { useState } from 'react'

export default function UserInput({ children, onHandleData, name, inputValue }) {
  // const [userInput,setInput]=useState();
  // function handleChange(event){
  //     const value=event.target.value;
  //     setInput(value);
  // }
  return (
    <div>
      <label>{children}</label>
      <input
        type='number'
        name={name}
        onChange={(event) => onHandleData(event.target.name, event.target.value)}
        value={inputValue[name]}>
      </input>
    </div>
  )
}
