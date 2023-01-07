import React, { Component } from 'react'

export default class ClassFunc extends Component {
    constructor(){
        super();
        this.clicked = this.clicked.bind(this);
        this.state = {
            name:"muthu",
            subs: 500
        };
    }
  
    clicked (){
        // alert(this);
        // console.log(this);
        const subs = this.state.subs +=1;
        this.setState ({
            name:"muthu",
            subs: subs
        });
    }
  render() {
    // console.log(this.props);
    return (
       
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.subs}</p>
        <button onClick={this.clicked}>Click Me</button>

      </div>
    )
  }
}
