import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      uncollapsed : false,
      buttonText : 'Show details' }
  };
  
  handleCollapse () { 
    const { uncollapsed } = this.state;
    if (uncollapsed === false) {
      this.setState({ uncollapsed: true });
      this.setState({ buttonText: 'Hide details' });
    } else {
      this.setState({ uncollapsed: false });
      this.setState({ buttonText: 'Show details' });
    }
  }

  render() {
    const { 
      summary,
      start,
      location,
      htmlLink,
      description
    } = this.props.event;
    const { buttonText, uncollapsed } = this.state;
    return <div className="event">
      <div className="collapsedDetails">
        <h3>{summary}</h3>
        <p>{start.dateTime} {start.timeZone}</p>
        <p>{location}</p>
      </div>
      {uncollapsed ? ( 
        <div className="uncollapsedDetails">
          <h4>About this event</h4>
          {htmlLink} See details on Google Calendar
          <p>{description}</p>
        </div>
        ) : null
      }
      <button className="details-btn" onClick={() => {this.handleCollapse()}}>{buttonText}</button>
    </div>
  }
}
export default Event;