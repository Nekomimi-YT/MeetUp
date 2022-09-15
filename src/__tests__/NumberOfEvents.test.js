import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
  });

})