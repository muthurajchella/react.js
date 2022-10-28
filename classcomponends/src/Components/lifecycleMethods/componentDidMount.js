import React, { Component } from 'react'

export class componentDidMount extends Component {
    constructor(){
        super();
        this.state = {
            Education: "B.E",
            Branch: "Mechanical"
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    updateEducation=(Edu) => {
        this.setState({Education: Edu});
    }

  render() {
    return (
      <div>
        {this.state.Education}
        {this.state.Branch}
        <button onClick={() => this.updateEducation("Engineering")}>Education</button>
      </div>
    )
  }
}

export default componentDidMount