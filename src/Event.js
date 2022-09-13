import React, { Component } from "react";
import { mockData } from './mock-data';

class Event extends Component {

  render() {
    const { event } = this.props;
    return <div>
      <div className="collapsedDetails">
        <h3>{mockData[0].summary}</h3>
        <p>{mockData[0].start.dateTime}{mockData[0].start.timeZone}</p>
        <p>{mockData[0].location}</p>
      </div>
      <button className="DetailsButton">Show Details</button>
      <div className="uncollapsedDetails">
      <h4>About this event</h4>
      <p>
      <a href={mockData[0].htmlLink}>See details on Google Calendar</a>
      </p>
      <p>{mockData[0].description}</p>
      </div>
    </div>
    
  }
}
export default Event;