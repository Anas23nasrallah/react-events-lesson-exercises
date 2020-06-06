import React, { Component } from 'react';

export const Home = function () {
  return <div className="home">Welcome</div>
}

export const About = function () {
  return <div className="about">It's great</div>
}

export class SpotCheck2 extends Component {

  constructor() {
    super()
    this.state = {
      showHome: false
    }
  }
  
  toggle = () => {
    this.setState({
      showHome: !this.state.showHome
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.showHome ? <Home /> : <About />}
      </div>
    );
  }
}


