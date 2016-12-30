import React, { Component } from 'react';
import Counter from './Counter.js';
import logo from './logo.svg';
import './App.css';
//
// TODO: create the ability to add multiple goals individually and track time for each of them
// Goals should be addable with dates for each, maybe using localstorage or something?
// Goals can be SLA'd, i.e. when they are close to deadline, we should have color changes and stuff

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {goals: [], name: '', completionDate: ''};
  }

  render() {
    return (
      <div>
        <GoalsDisplayComponent goals={this.state.goals} />
        <h3>Add Goal</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleNameChange} value={this.state.name} />
          <input onChange={this.handleDateChange} value={this.state.completionDate} />
          <button>{'Add #' + (this.state.goals.length + 1) + ' Goal'}</button>
        </form>
      </div>
    );
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleDateChange(e) {
    this.setState({completionDate: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newGoal = {
      name: this.state.name,
      completionDate: this.state.completionDate
    };
    this.setState((prevState) => ({
      goals: prevState.goals.concat(newGoal),
      name: '',
      completionDate: ''
    }));
  }
}

class GoalsDisplayComponent extends Component {
  render() {
    let goals = this.props.goals;
    return (
      <div>
        {
          goals.map(function (goal) {
            return (
              <div className="goal">
                <div className="goal-name">
                  {goal.name}
                </div>
                <div className="goal-date">
                  <Counter endDate={goal.completionDate} />
                </div>
              </div>
            )
          })
        }
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
          <h2>Goals Tracker</h2>
        </div>
      <Goals />
      </div>
    );
  }
}

export default App;
