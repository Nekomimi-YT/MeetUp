import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventItems: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const { eventItems } = this.state;
    this.setState({ eventItems: value });
   // this.props.setNumberOfEvents(eventItems);  //send state (number of input event items) back to App 
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
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;