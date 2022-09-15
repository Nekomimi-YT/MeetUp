import React, { Component } from 'react';

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
      <label className="eventLabel" for="eventNumber">Number of Events</label>
      <input
      type="text"
      className="events"
      id="eventNumber"
      placeholder="32"
      />
    </div>
    );
  }
}

export default NumberOfEvents;