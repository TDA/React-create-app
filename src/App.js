import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
// TODO: create the ability to add multiple goals individually and track time for each of them
// Goals should be addable with dates for each, maybe using localstorage or something?
// Goals can be SLA'd, i.e. when they are close to deadline, we should have color changes and stuff

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.countDays(props.endDate),
      endDate: props.endDate
    }
  }

  componentDidMount() {
    var self = this;
    setInterval(function() {
      self.setState({
        count: self.countDays(self.state.endDate)
      });
    }, 1000);
  }

  countDays(endDate) {
    var goalDate = new Date(endDate);
    var today = new Date();
    var diff = goalDate - today;
    return Math.floor(diff/(1000));
  }

  getTimeString() {
    var count = this.state.count;
    var minutes = Math.floor(count/(60));
    var hours = Math.floor(minutes/(60));
    var days = Math.floor(hours/(24));
    return "" + days + " days " + hours % 24 + " hours " + minutes % 60 + " mins "
  }

  render() {
    return (
      <div className="counter">
        {this.getTimeString()}
      </div>
    )
  }
}

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalCompletionDate: props.date,
      goalName: props.name
    }
  }

  render() {
    return (
      <div className="goal">
        <div className="goal-name">
          {this.state.goalName}
        </div>
        <div className="goal-date">
          <Counter endDate={this.state.goalCompletionDate}/>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    var goals = [
      {
        name: 'Promotion',
        date: '7/17/2017'
      },
      {
        name: 'India trip',
        date: '3/17/2017'
      }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Goals Tracker</h2>
        </div>
        {
          goals.map(function (goal) {
            return <Goal name={goal.name} date={goal.date} key={goal.name} />
          })
        }
      </div>
    );
  }
}

export default App;
