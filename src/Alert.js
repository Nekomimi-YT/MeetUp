import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: this.fontSize
    };
  }

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.fontSize = '14px';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.fontSize = '14px';
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'black';
    this.fontSize = '18px';
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };