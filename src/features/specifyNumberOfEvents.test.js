import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents'
import App from '../App'

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('a user has not specified a preferred number of events', () => {
      AppWrapper = shallow(<App />);
    });

    when('the app displays events', () => {
      AppWrapper.update();
    });

    then('the default number (32) is displayed', () => {
      const AppNumOfEventsState = AppWrapper.state('numberOfEvents');
      expect(AppNumOfEventsState).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper, NumberOfEventsWrapper;
    given('the user wants to change the number of events displayed', () => {
      AppWrapper = mount(<App />);
    });

    when('the user types the preferred number into the text box', () => {

    });

    then('the preferred number of events is displayed', () => {

    });
  });
});