import React, { Component } from "react";

class Event extends Component {

  render() {
    const { events } = this.props;
    return <div className="collapsedDetails">
      <button className="DetailsButton">Show Details</button>
    </div>
  }
}
export default Event;