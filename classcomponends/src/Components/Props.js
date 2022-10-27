// Props is defind as One component Data used to another component To pass props Props = Properties
// parant import child
//Props is immutable

import { render } from '@testing-library/react'
import React, { Component } from 'react'



// function Samplefun(){
//     return<div>function</div>
// }

class Second extends Component{
    render(){                       
         return(
        <div>
           
        </div>
        
        )
    }
}

class First extends Component{
    render(){
        console.log("first", this)
        return(
        <div>
          {this.props.name}
          <button onClick={() => this.props.get("Raja")}>Click</button>
            <Second />
        </div>

        )
    }
}

export class Props extends Component {

    getData =(data) => {
        console.log(data)
    }

  render() {
    console.log(this)
    return (
      <div>{this.props.name}
      {this.props.age}
         <First name= {this.props.name} get={this.getData}/>
        {/* <Samplefun /> */}
      </div>
    )
  }
}

export default Props