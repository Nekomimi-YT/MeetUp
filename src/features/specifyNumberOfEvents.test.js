import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('a user has not specified a preferred number of events', () => {

    });

    when('the app displays events', () => {

    });

    then('the default number (32) is displayed', () => {

    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the user wants to change the number of events displayed', () => {

    });

    when('the user types the preferred number into the text box', () => {

    });

    then('the preferred number of events is displayed', () => {

    });
  });
});