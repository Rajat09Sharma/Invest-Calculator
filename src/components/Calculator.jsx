import React, { useState } from 'react'
import UserInput from './UserInput'

export default function Calculator({ onUserData, val }) {

  return (

    <div id="user-input">
      <div className="input-group" >
        <UserInput name="initialInvestment" onHandleData={onUserData} inputValue={val} >intinal investment</UserInput>
        <UserInput name="annualInvestment" onHandleData={onUserData} inputValue={val}  >annual Investment</UserInput>
      </div>
      <div className="input-group" >
        <UserInput name="expectedReturn" onHandleData={onUserData} inputValue={val}  >expected Return</UserInput>
        <UserInput name="duration" onHandleData={onUserData} inputValue={val}  >duration</UserInput>
      </div>
    </div>
  )
}







