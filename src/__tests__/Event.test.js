import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll( () => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event}/>);
  });

  test('render collapsed event info container', () => {
    expect(EventWrapper.find('.collapsedDetails')).toHaveLength(1);
  });

  test('render uncollapsed event container when uncollapsed = true', () => {
    expect(EventWrapper.find('.uncollapsedDetails')).toHaveLength(0);
    const handleCollapse = EventWrapper.handleCollapse;
    EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    expect(EventWrapper.find('.uncollapsedDetails')).toHaveLength(1);
  });

  test('render show details button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('change state with handleCollapse method when button is clicked', () => {
    const handleCollapse = EventWrapper.handleCollapse;
    EventWrapper.setState({ uncollapsed: false });
    EventWrapper.setState({ buttonText: 'Show details' });
    expect(EventWrapper.state('uncollapsed')).toBe(false); 
    expect(EventWrapper.state('buttonText')).toBe('Show details');
    EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    expect(EventWrapper.state('uncollapsed')).toBe(true);
    expect(EventWrapper.state('buttonText')).toBe('Hide details');
    EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    expect(EventWrapper.state('uncollapsed')).toBe(false); 
    expect(EventWrapper.state('buttonText')).toBe('Show details');
  });

  test('render state-specific innerText in button', () => {
    const buttonText= EventWrapper.state('buttonText'); 
    expect((EventWrapper.find('.details-btn')).text()).toContain(buttonText);
  });
  
  test('render collapsed event info text', () => {
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.summary);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.start.dateTime);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.start.timeZone);
    expect((EventWrapper.find('.collapsedDetails')).text()).toContain(event.location);
  });

  test('render uncollapsed event info text when uncollapsed = true', () => {
    const handleCollapse = EventWrapper.handleCollapse;
    EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    expect((EventWrapper.find('.uncollapsedDetails')).text()).toContain(event.htmlLink);
    expect((EventWrapper.find('.uncollapsedDetails')).text()).toContain(event.description);
  });
})