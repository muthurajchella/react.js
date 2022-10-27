import React, { Component } from 'react'
import Class from './Components/Class'
import Props from './Components/Props'

export class App extends Component {
  render() {
    return (
      <div>
        <Class />
        <Props  name= {"Muthu"}  age={25}/>
      </div>
    )
  }
}

export default App
