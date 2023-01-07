import React, { Component } from 'react'

export class LifeCycleClassFunc extends Component {
    constructor(){
        console.log("constructor");
        super();
        this.clicked = this.clicked.bind(this);
        this.state = {
            name : "Muthuraj",
            subs : 100
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    clicked(){
        const subs = this.state.subs +1;

        this.setState({
            ...this.state,
            subs: subs
        })
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }


  render() {
    console.log("render");
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.subs}</p>
        <button onClick={this.clicked}>Click Me</button>
      </div>
    )
  }

  


}

export default LifeCycleClassFunc