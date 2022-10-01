import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user is using the app within its default setting', () => {

    });

    when('the user observes the event element', () => {

    });

    then('the element is collapsed (details not showing)', () => {

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
