import React from 'react';
import { shallow, mount} from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll( () => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })
});

describe('<App /> integration', () => {
  let AppWrapper;
  beforeAll( () => {
    AppWrapper = mount(<App />);
  });

  test('App passes "events" state as a prop to EventList', () => {
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('App passes "numberOfEvents" state as a prop to NumberOfEvents', () => {
    const AppnumberOfEventsState = AppWrapper.state('numberOfEvents');
    expect(AppnumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(AppnumberOfEventsState);
    AppWrapper.unmount();
  });

  test('change number of events displayed after user changes number of events', () => {
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();  //forces a re-render
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.instance().handleInputChanged({
      target: { value: 1 }, //I only have 2 events
    });
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(null, 1);
    AppWrapper.unmount();
  });

  test('render list of events using mockData', () => {
    AppWrapper.setState({ events: mockData });
    expect(AppWrapper.find('.events')).toHaveLength(mockData.length);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    AppWrapper.instance().updateEvents(null, 1);
    await AppWrapper.update();
    expect(await AppWrapper.state('events')).toHaveLength(1); // is this the right test?
    AppWrapper.unmount();
  });
});