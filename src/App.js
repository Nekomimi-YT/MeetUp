import React, { Component } from 'react';
//import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
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
    if (!navigator.onLine) {
      this.setState({ offLineText: 'Internet connection offline: events loaded from cache.' });
      console.log('offline');
    } else {
      this.setState({ offLineText:'' });
      console.log('online');
    }
  }

  /*alternate on/offline logic to add error if offline and remove if online
  window.addEventListener('offline', function(event){
    console.log("You lost connection."); //logs ok? then this.setState({warningMsg:"You're offline!"})
    });
    window.addEventListener(‘online’, function(event){
    console.log("You are now back online.");
    });*/

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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    const { events, locations, numberOfEvents, offlineText, showWelcomeScreen } = this.state;
    if (showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <h1>MeetUp Events</h1>
        <OfflineAlert text={ offlineText } />
        <CitySearch locations={ locations } updateEvents={ this.updateEvents }/>
        <NumberOfEvents updateEvents={ this.updateEvents } numberOfEvents={ numberOfEvents }/>
          {/*<h4>Events in each city</h4>

          <ScatterChart
            width={400}
            height={400}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart> */}
        <EventList events={ events } />
        <WelcomeScreen showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
