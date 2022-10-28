import React from 'react'
import { Link } from 'react-router-dom'
import Resume from './Resume'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <p>WELCOME TO ABOUT</p>
        <Link to="/Resume">Raju Resume</Link>

    </div>
  )
}

export default About