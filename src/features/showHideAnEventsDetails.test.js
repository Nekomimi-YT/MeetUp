import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('user is using the app within its default setting', () => {
      AppWrapper = mount(<App />);
    });

    when('the user observes the event element', () => {

    });

    then('the element is collapsed (details not showing)', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.collapsedDetails')).toHaveLength(2);
      expect(AppWrapper.find('.uncollapsedDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('a user wants to see more details about an event', () => {

    });

    when('the user interacts with the event element', () => {

    });

    then('it should expand to show details', () => {

    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('a user wants to minimize an event details element', () => {

    });

    when('the user interacts with the element', () => {

    });

    then('it collapses back to the default setting and hides details', () => {

    });
  });
});
