import React, { Component } from 'react'
import Class from './Components/Class'
import Props from './Components/Props'
import State from './Components/State'
import componentDidMount from './Components/lifecycleMethods/componentDidMount'

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Class /> */}
        {/* <Props  name= {"Muthu"}  age={25}/> */}
        <State />
        <componentDidMount /> 
      </div>
    )
  }
}

export default App
