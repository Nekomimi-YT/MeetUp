Feature: Filter events by city

Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see all upcoming events

Scenario: User should see a list of suggestions when they search for a city.
Given user main page is open
When the user starts typing on the city textbook
Then the user should see a list of city-suggestions that match what they’ve input

Scenario: User can select a city from the suggested list.
Given user was typing “Berlin” in the city textbox 
And the suggestions list is showing
When the user selects a city (e.g.,“Berlin”) from the list     
Then their city should be changed to the chosen city 
And the user should receive a list of upcoming events from that city
