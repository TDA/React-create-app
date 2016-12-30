//
// create the ability to add multiple goals individually and track time for each of them -- DONE!!
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
          <div className="form-group row">
            <label htmlFor="name">Goal Name: <input className="form-control" id="name" onChange={this.handleNameChange} value={this.state.name} /></label>
          </div>
          <div className="form-group row">
            <label htmlFor="date">Goal Completion Date: <input className="form-control" id="date" onChange={this.handleDateChange} value={this.state.completionDate} /></label>
          </div>
          <button className="btn btn-default">{'Add Goal'}</button>
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

class GoalsDisplayComponent extends React.Component {
  render() {
    let goals = this.props.goals;
    return (
      <div>
        {
          goals.map(function (goal) {
            return (
              <div className="goal card">
                <div className="card-block">
                  <h4 className="goal-name card-title">
                    {goal.name}
                  </h4>
                  <p className="goal-date card-text">
                    <Counter endDate={goal.completionDate} />
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='./logo.svg' className="App-logo" alt="logo" />
          <h2>Goals Tracker</h2>
        </div>
      <Goals />
      </div>
    );
  }
}

