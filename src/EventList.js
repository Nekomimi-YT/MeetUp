import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
  const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event => 
          <li key={event.id}> {/*add keys in the li tag during mapping*/}
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;