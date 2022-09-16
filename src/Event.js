import React, { Component } from "react";

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
        <h3>{event.summary}</h3>
        <p>{event.start.dateTime} {event.start.timeZone}</p>
        <p>{event.location}</p>
      </div>
      {uncollapsed ? ( 
        <div className="uncollapsedDetails">
          <h4>About this event</h4>
          {event.htmlLink} See details on Google Calendar
          <p>{event.description}</p>
        </div>
        ) : null
      }
      <button className="DetailsButton" onClick={() => {this.handleCollapse()}}>{buttonText}</button>
    </div>
  }
}
export default Event;