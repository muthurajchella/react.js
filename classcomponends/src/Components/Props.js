// Props is defind as One component Data used to another component To pass props Props = Properties
// parant import child
//Props is immutable
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
         
            <Second />
        </div>

        )
    }
}

export class Props extends Component {
    constructor(){
        super()
        console.log("Cons",this)
        this.getData = this.getData.bind(this);
    }


    getData()  {
        console.log(this)
    }

  render() {
    console.log(this)
    return (
      <div>{this.props.name}
      {this.props.age}
      <button onClick={() => this.getData}>Click</button>
         <First name= {this.props.name} get={this.getData} />
        {/* <Samplefun /> */}
      </div>
    )
  }
}

export default Props