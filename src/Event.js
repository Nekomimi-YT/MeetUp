import React, { Component } from "react";
import { mockData } from './mock-data';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { uncollapsed : false }
  };
  
  buttonClick () {
    const { uncollapsed } = this.state;
    if (uncollapsed === false) {
      this.setState({uncollapsed: true});
    } else {
      this.setState({uncollapsed: false});
    }
  }

  render() {
    const { event } = this.props;
    return <div>
      <div className="collapsedDetails">
        <h3>{mockData[0].summary}</h3>
        <p>{mockData[0].start.dateTime}{mockData[0].start.timeZone}</p>
        <p>{mockData[0].location}</p>
      </div>
      <div className="uncollapsedDetails">
        <h4>About this event</h4>
        {/*how to make this link to the text? */}
        {mockData[0].htmlLink}See details on Google Calendar
        <p>{mockData[0].description}</p>
      </div>
      <button className="DetailsButton" onClick={() => {this.buttonClick}}>Show Details</button>
    </div>
  }
}
export default Event;