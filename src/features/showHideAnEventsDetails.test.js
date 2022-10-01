import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventWrapper;
    let event = mockData[0];
    given('user is using the app within its default setting', () => {
      EventWrapper = mount(<Event event={event}/>);
    });

    when('the user observes the event element', () => {

    });

    then('the element is collapsed (details not showing)', () => {
      expect(EventWrapper.find('.collapsedDetails')).toHaveLength(1);
      expect(EventWrapper.find('.uncollapsedDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    let event = mockData[0];
    given('a user wants to see more details about an event', () => {
      EventWrapper = mount(<Event event={event}/>);
    });

    when('the user interacts with the event element', () => {
    const handleCollapse = EventWrapper.handleCollapse;
    EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    });

    then('it should expand to show details', () => {
      expect(EventWrapper.find('.uncollapsedDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    let event = mockData[0];
    given('a user wants to minimize an event details element', () => {
      EventWrapper = mount(<Event event={event}/>);
      const handleCollapse = EventWrapper.handleCollapse;
      EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    });

    when('the user interacts with the element', () => {
      const handleCollapse = EventWrapper.handleCollapse;
      EventWrapper.find('.details-btn').simulate('click', handleCollapse);
    });

    then('it collapses back to the default setting and hides details', () => {
      expect(EventWrapper.find('.uncollapsedDetails')).toHaveLength(0);
    });
  });
});
