import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
// TODO: create the ability to add multiple goals individually and track time for each of them
// Goals should be addable with dates for each, maybe using localstorage or something?
// Goals can be SLA'd, i.e. when they are close to deadline, we should have color changes and stuff

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

  getTimeString(count) {
    var minutes = Math.floor(count/(60));
    var hours = Math.floor(minutes/(60));
    var days = Math.floor(hours/(24));
    return "" + days + " days " + hours % 24 + " hours " + minutes % 60 + " mins "
  }

  render() {
    return (
      <div className="counter">
        {this.state.count} seconds, which is roughly:<br/>
        {this.getTimeString(this.state.count)}
      </div>
    )
  }
}

class Goals extends Component {
  render() {
    return (
      <p className="App-intro">
        Time to goal:
        <Counter />
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Goals Tracker</h2>
        </div>
        <Goals />
      </div>
    );
  }
}

export default App;
