//React component shas a built-in state object
//it's mutable


import React, { Component } from 'react'




// class Second extends Component{
//     render(){                       
//          return(
//         <div>
           
//         </div>
        
//         )
//     }
// }

// class First extends Component{
//     render(){
//         console.log("first", this.props)
//         return(
//         <div>

           
//         </div>

//         )
//     }
// }

export class State extends Component {
    constructor(){
        super()
        console.log("cons", this)
        this.state ={
            education : "B.E",
        }
    }


    updateEdudaction  = (val) =>{
        this.setState({education: val, precentage: "80%"})
    }

  render() {
    console.log(this)
    return (
      <div>
        {this.state.education} {"  "}
        {this.state.precentage}
        <button onClick={() => this.updateEdudaction("Mechanical")}>Update Education</button>
        {/* <First name={this.state.name}/> */}
      </div>
    )
  }
}

export default State