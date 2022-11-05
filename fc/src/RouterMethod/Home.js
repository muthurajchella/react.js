import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const NavicateHome = useNavigate();
    const NavicateProfile = useNavigate();
    const NavicateAbout = useNavigate();
    

    const getAbout = () => {
      NavicateAbout("About");
    };

    const getProfile = () => {
      NavicateProfile("Profile/007");
    };

    const getHome = () => {
      NavicateHome("Home");
    };



  return (
    <div>
     <div className='home'>
      <div><Link to="Home">HOME</Link></div>
      <div><Link to="/Profile/007">PROFILE</Link></div>
      <div><Link to="/About">ABOUT</Link></div>
    </div>
    <div className='Btns'>
      <button onClick={() => getHome()}>HOME</button>
      <button onClick={() => getProfile()}>PROFILE</button>
      <button onClick={() => getAbout()}>ABOUT</button>
    </div>

    </div>
    
  )
}

export default Home