import React, { Component } from 'react'

export default class Product extends Component {
constructor(){
    super();
    console.log("constructor");
    this.state = {
        Product : [
            {id: 1, productName: 'Mobile', model: '2022', offer : '20%'},
            {id: 2, productName: 'Mobile', model: '2022', offer : '20%'},
            {id: 3, productName: 'Mobile', model: '2022', offer : '20%'},
            {id: 4, productName: 'Mobile', model: '2022', offer : '20%'}
        ],

        CardItems: []
    }
}


  render() {
    return (
      <div>
        {this.state.Product}
      </div>
    )
  }
}
