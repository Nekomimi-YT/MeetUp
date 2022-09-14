import React, { Component } from "react";
import { mockData } from './mock-data';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      uncollapsed : false,
      buttonText : 'Show details' }
  };
  
  handleCollapse () { 
    const { uncollapsed } = this.state;
    if (uncollapsed == false) {
      this.setState({ uncollapsed: true });
      this.setState({ buttonText: 'Hide details' });
    } else {
      this.setState({ uncollapsed: false });
      this.setState({ buttonText: 'Show details' });
    }
  }

  render() {
    const { event } = this.props; //unable to use event in place of mockData[0]
    const { buttonText, uncollapsed } = this.state;
    return <div>
      <div className="collapsedDetails">
        <h3>{mockData[0].summary}</h3>
        <p>{mockData[0].start.dateTime}{mockData[0].start.timeZone}</p>
        <p>{mockData[0].location}</p>
      </div>
      {uncollapsed ? ( 
        <div className="uncollapsedDetails">
          <h4>About this event</h4>
          {/*how to make this link to the text? */}
          {mockData[0].htmlLink}See details on Google Calendar
          <p>{mockData[0].description}</p>
        </div>
        ) : null
      }
      <button className="DetailsButton" onClick={() => {this.handleCollapse()}}>{buttonText}</button>
    </div>
  }
}
export default Event;