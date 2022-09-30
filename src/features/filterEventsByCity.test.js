import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn’t searched for any city', () => {

    });

    
    when('the user opens the app', () => {

    });

    then('the user should see all upcoming events', () => {

    });
  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    given('user main page is open', () => {

    });

    when('the user starts typing on the city textbook', () => {

    });

    then('the user should see a list of city-suggestions that match what they’ve input', () => {

    });
  });

  test('User can select a city from the suggested list.', ({ given, when, then }) => {
    given('user was typing “Hamburg” in the city textbox and the suggestions list is showing', () => {

    });

    when('the user selects a city (e.g.,“Hamburg”) from the list', () => {

    });

    then('their city should be changed to the chosen city and the user should receive a list of upcoming events from that city', () => {

    });
  });

});