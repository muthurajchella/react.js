import React from 'react'
import './Home.css'
import Manu from './MenuSide/Manu'
import News from './News/News'
import Chat from './Chat/Chat'


const Home = () => {
  return (
    <div className='home'>
        <div className='manuMain'><Manu /></div>
        <div className='newsMain'><News /></div>
        <div className='chatMain'><Chat /></div>
    </div>
    
    
  )
}

export default Home