import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  test('render show details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.DetailsButton')).toHaveLength(1);
  });
});