import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: null
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    //let r = /[1-9]|1[0-9]|2\d|3[012]/; Can we use this regex instead?
    if (value < 1 || value > 32) {
      this.setState ({
        errorText: 'Please enter a number between 1-32.',
        numberOfEvents: value
      });
    } else {
    this.setState({ 
      errorText: '',
      numberOfEvents: value });
    }
    this.props.updateEvents(null, value);
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <p><label for="eventNumber">Number of Events</label></p>
        <div className="errorAlert">
          <ErrorAlert text={this.state.errorText} />
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