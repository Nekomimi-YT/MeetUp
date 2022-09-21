import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventItems: 32
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    const { eventItems } = this.state;
    this.setState({ eventItems: value });
    this.props.updateEvents(undefined, value);  //send state or value (number of input event items) back to App 
  }

  render() {
    const { eventItems } = this.state;
    return (
      <div className="NumberOfEvents">
        <label className="eventLabel" for="eventNumber">Number of Events</label>
        <input
          type="text"
          className="events"
          id="eventNumber"
          value={eventItems}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;