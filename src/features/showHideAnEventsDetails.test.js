import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('a user wants to minimize an event details element', () => {

    });

    when('the user interacts with the element', () => {

    });

    then('it collapses back to the default setting and hides details', () => {

    });
  });
});
