/**
 * Created by schandramouli on 12/29/16.
 */

class Counter extends React.Component {
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
