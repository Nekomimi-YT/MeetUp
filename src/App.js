import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const { numberOfEvents } = this.state;
      if (location) {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        const eventItems = locationEvents.slice(0, numberOfEvents);
        return this.setState({ events: eventItems });
      } else {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        const eventItems = locationEvents.slice(0, eventCount);
        return this.setState({
          events: eventItems,
          numberOfEvents: eventCount
        });
      }
    });
  }

  /*return state (eventCount from NumberOfEvents, slice the first numOfEvents, assign to event state)
  setNumberOfEvents = (numOfEvents) => {
    getEvents().then((events) => {
      if (numOfEvents <= events.length) {
        this.setState ({
          events: events.slice(0, numOfEvents)
        });
      } else if (numOfEvents == null) { //when the input is blank ??
        this.setState ({
          events: events.slice(0, 0)
        });
      } else {
        this.setState ({
          events: events.slice(0, 32) //max number of events shown is fixed at 32
        });
      }
    });
  }*/

  render() {
    const { events, locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>MeetUp Events</h1>
        <div>
          <CitySearch locations={ locations } updateEvents={ this.updateEvents }/>
        </div>
        <div>
          <NumberOfEvents updateEvents={ this.updateEvents } numberOfEvents={ numberOfEvents }/> 
        </div>
        <div>
          <EventList events={ events } />
        </div>
      </div>
    );
  }
}

export default App;
