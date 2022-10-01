Feature: Specify number of events 

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user has not specified a preferred number of events 
When the app displays events
Then the default number (32) is displayed

Scenario: User can change the number of events they want to see 
Given the user wants to change the number of events displayed 
When the user types the preferred number into the text box
Then the preferred number of events is displayed 
