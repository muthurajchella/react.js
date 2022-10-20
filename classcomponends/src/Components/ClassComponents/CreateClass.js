import React, { Component } from 'react'
import './CreateClass.css'
import State from './State/state'
import Props from './Props/Props'


function Samplefunction(){
    return<div>SampleFunction</div>
}

export class CreateClass extends Component {
  render() {
    return (
      <div className='classcompo'>
        {/* <h1 id='name'>My First Class Components</h1>
        // <button type='click'>Click Here</button> */}
        {/* <Samplefunction /> */}
        <State />
      </div>
    )
  }
}

export default CreateClass