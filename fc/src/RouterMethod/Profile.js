import React from 'react'
import { useNavigate } from 'react-router-dom'
import RajuProfile from './RajuProfile';


const Profile = () => {
  const NaviRaju = useNavigate();

  const getRajuProfile = () => {
      NaviRaju("/RajuProfile");
  }

  return (
    <div>
        <h1>Profile</h1>
        <p>WELCOME TO PROFILE</p>
        <button onClick={() => getRajuProfile()}>RajuProfile</button>
    </div>
  )
}

export default Profile