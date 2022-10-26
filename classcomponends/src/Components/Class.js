import { render } from '@testing-library/react'
import React, { Component } from 'react'

class Second extends Component{
    render(){
        return(
        <div>
           Second Class Components

        </div>
        
        )
    }
}

class First extends Component{
    render(){
        return(
        <div>
            First Class Components
            <Second />
        </div>

        )
    }
}

export class Class extends Component {
  render() {
    return (
      <div>
        Class Components <First />
      </div>
    )
  }
}

export default Class