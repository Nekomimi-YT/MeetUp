import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 1
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, value);
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="NumberOfEvents">
        <label className="eventLabel" for="eventNumber">Number of Events</label>
        <input
          type="text"
          className="events"
          id="eventNumber"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;