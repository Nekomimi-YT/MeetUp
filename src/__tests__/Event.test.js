import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  test('render show details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.DetailsButton')).toHaveLength(1);
  });

  test('render collapsed details container', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.collapsedDetails')).toHaveLength(1);
  })
});