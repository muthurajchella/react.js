import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './state.css'


class Child extends Component{
    render(){
        console.log("child", this.props);
        return(
            <div>
                childcomponent {this.props.name}
            </div>
        )
    }
}


export default class sate extends Component {
constructor(){
    super();
    console.log("constructor", this);
    this.state= {
        name : 'muthu',
        age : 25,
        sex : 'Male'
    }
}

updateName = (val) => {
    this.setState({name: val});
};

render(){
    // console.log(this);
    return(
     <div>
        {this.state.name}
        <button onClick={() => this.updateName('Raj')}>Update Name</button>
        <Child name={this.state.name } />
     </div>
    );
}
}

