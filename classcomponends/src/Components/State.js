
import React, { Component } from 'react'




// class Second extends Component{
//     render(){                       
//          return(
//         <div>
           
//         </div>
        
//         )
//     }
// }

class First extends Component{
    render(){
        console.log("first", this.props)
        return(
        <div>

           
        </div>

        )
    }
}

export class State extends Component {
    constructor(){
        super()
        console.log("cons", this)
        this.state ={
            name : "Muthu",
            age : 25,
        }
    }


    updateName  = (val) =>{
        this.setState({name: val, age: 26 })
    }

  render() {
    console.log(this)
    return (
      <div>
        {this.state.name}
        {this.state.age}
        <button onClick={() => this.updateName("RAJ")}>Update Name</button>
        <First name={this.state.name}/>
      </div>
    )
  }
}

export default State