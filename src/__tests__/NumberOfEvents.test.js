import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll( () => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
  });

  test('text input id to be "eventNumber"', () => {
    expect(NumberOfEventsWrapper.find('.events').at(0).props().id).toEqual('eventNumber');
  });

  test('correct label for text input', () => {
    expect(NumberOfEventsWrapper.find('.eventLabel').text()).toBe('Number of Events');
  });

  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.events').prop('value')).toBe(numberOfEvents);
  });

  test('change state when text input changes', () => {
    let eventObject = { target: { value: '10' }};
    NumberOfEventsWrapper.find('.events').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10');
  });  
})