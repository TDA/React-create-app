import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: this.countDays()
    }
  }

  componentDidMount() {
    var self = this;
    setInterval(function() {
      self.setState({
        count: self.countDays()
      });
    }, 1000);
  }

  countDays() {
    var goalDate = new Date("07/07/2017");
    var today = new Date();
    var diff = goalDate - today;
    return Math.floor(diff/(1000));
  }

  render() {
    return (
      <div className="counter">
        {this.state.count}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          lol is this even going to work?
        </p>
        <Counter />
      </div>
    );
  }
}

export default App;
