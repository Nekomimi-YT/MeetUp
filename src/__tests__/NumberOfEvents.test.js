import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
  });

  test('text input id to be "eventNumber"', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.events').at(0).props().id).toEqual('eventNumber');
  });

  test('correct label for text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.eventLabel').text()).toBe('Number of Events');
  });

  test('assigns the state to the value of text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    const eventItems = NumberOfEventsWrapper.state('eventItems');
    expect(NumberOfEventsWrapper.find('.events').prop('value')).toBe(eventItems);
  });
})