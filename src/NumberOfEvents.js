import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: null
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    this.setState ({ numberOfEvents: value });
    if (value < 1 || value > 32) {
      this.setState ({
        errorText: 'Please enter a number between 1-32.'
      });
    } else {
    this.setState({ 
      errorText: ''
    });
    }
    this.props.updateEvents(null, value);
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <p><label for="eventNumber">Number of Events</label></p>
          <ErrorAlert text={this.state.errorText} />
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