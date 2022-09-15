import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
  });

  test('render text input placeholder 32', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.events').at(0).props().placeholder).toEqual('32');
  });

  test('text input id to be "eventNumber"', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.events').at(0).props().id).toEqual('eventNumber');
  });

  test('correct label for text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.eventLabel').text()).toBe('Number of Events');
  });
})