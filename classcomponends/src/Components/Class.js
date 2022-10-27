import { render } from '@testing-library/react'
import React, { Component } from 'react'



function Samplefun(){
    return<div>function</div>
}

class Second extends Component{
    render(){                       //16.8.0 version before CC vs Fc meager diff 
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
        <Samplefun />
      </div>
    )
  }
}

export default Class