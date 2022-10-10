import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import './nprogress.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      currentLocation: 'all',
      numberOfEvents: 32,
      offlineText: '',
      showWelcomeScreen: undefined
    }
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error 
      ? false 
      : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ 
      showWelcomeScreen: !(code || isTokenValid) 
    });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events, locations: extractLocations(events) 
          });
        }
      });
    }
  }
      
      /*adding navigator.online logic to add error if offline and remove if online
      if (!navigator.onLine) {
        this.setState({ offLineText: 'Internet connection offline: events loaded from cache.' });
      } else {
        this.setState({ offLineText:'' });
      }*/

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const { currentLocation, numberOfEvents } = this.state;
      if (location) {
        const locationEvents = 
          location === 'all' 
          ? events 
          : events.filter((event) => event.location === location);
        const eventItems = locationEvents.slice(0, numberOfEvents);
        return this.setState({ 
          events: eventItems,
          currentLocation: location });
      } else {
        const locationEvents = 
          currentLocation === 'all' 
          ? events 
          : events.filter((event) => event.location === currentLocation);
        const eventItems = locationEvents.slice(0, eventCount);
        return this.setState({
          events: eventItems,
          numberOfEvents: eventCount
        });
      }
    });
  }

  render() {
    const { events, locations, numberOfEvents, offlineText, showWelcomeScreen } = this.state;
    if (showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <h1>MeetUp Events</h1>
        <OfflineAlert text={ offlineText } />
        <div>
          <CitySearch locations={ locations } updateEvents={ this.updateEvents }/>
        </div>
        <div>
          <NumberOfEvents updateEvents={ this.updateEvents } numberOfEvents={ numberOfEvents }/> 
        </div>
        <div>
          <EventList events={ events } />
        </div>
        <WelcomeScreen showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
