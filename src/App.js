import React, { Component } from 'react';
import Counter from './Counter.js';
import logo from './logo.svg';
import './App.css';
//
// TODO: create the ability to add multiple goals individually and track time for each of them
// Goals should be addable with dates for each, maybe using localstorage or something?
// Goals can be SLA'd, i.e. when they are close to deadline, we should have color changes and stuff

class GoalInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {goals: [], name: '', date: ''};
  }

  render() {
    return (
      <div>
        <GoalsDisplayComponent goals={this.state.goals} />
        <h3>Add Goal</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleNameChange} value={this.state.name} />
          <input onChange={this.handleDateChange} value={this.state.date} />
          <button>{'Add #' + (this.state.goals.length + 1) + ' Goal'}</button>
        </form>
      </div>
    );
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newGoal = {
      name: this.state.name,
      date: this.state.date
    };
    this.setState((prevState) => ({
      goals: prevState.goals.concat(newGoal),
      name: '',
      date: ''
    }));
  }
}

class GoalsDisplayComponent extends Component {
  constructor(props) {
    // this is only to hold state of a goal, technically we can just have used .props
    // to access that same data, as we don't modify state here at all
    super(props);
    this.state = {
      goals: props.goals
    }
  }

  render() {
    return (
      this.state.goals.map(function (goal) {
        return <div className="goal">
          <div className="goal-name">
            {goal.name}
          </div>
          <div className="goal-date">
            <Counter endDate={goal.goalCompletionDate}/>
          </div>
        </div>
      })
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
      <GoalInput />
      </div>
    );
  }
}

export default App;
