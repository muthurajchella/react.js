import React, { Component } from 'react'



class Second extends Component{
    render(){                       //16.8.0 version before CC vs Fc meager diff 
         return(
        <div>
           Second Class Components <First />
        </div>
        
        )
    }
}

class First extends Component{
    render(){
        return(
        <div>
            First Class Components
          
        </div>

        )
    }
}

export class Class extends Component {
  render() {
    return (
      <div>
        Class Components <Second />
      </div>
    )
  }
}

export default Class