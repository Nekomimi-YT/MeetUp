import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  
  test('render collapsed event info container', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.collapsedDetails')).toHaveLength(1);
  });

  test('render collapsed event info text', () => {
    const event = mockData[0];
    const EventWrapper = shallow(<Event event={event}/>);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.summary);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.start.dateTime);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.start.timeZone);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.location);
  });

  test('render show details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.DetailsButton')).toHaveLength(1);
  });

  test('render uncollapsed event info container', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.uncollapsedDetails')).toHaveLength(1);
  });
})
