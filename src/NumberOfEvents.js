import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, value);
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <p><label for="eventNumber">Number of Events</label></p>
        <div className="errorAlert">
          <ErrorAlert text={this.state.infoText} />
        </div>
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