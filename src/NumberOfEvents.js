import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventItems: 32
  }

  render() {
    return (
      <div className="NumberOfEvents">
      <label className="eventLabel" for="eventNumber">Number of Events</label>
      <input
      type="text"
      className="events"
      id="eventNumber"
      value={this.state.eventItems}
      />
    </div>
    );
  }
}

export default NumberOfEvents;