Feature: Show/ Hide an event's details 

Scenario: An event element is collapsed by default
Given user is using the app within its default setting
When the user observes the event element
Then the element is collapsed (details not showing)

Scenario: User can expand an event to see its details 
Given a user wants to see more details about an event 
When the user interacts with the event element
Then it should expand to show details

Scenario: User can collapse an event to hide its details 
Given a user wants to minimize an event details element 
When the user interacts with the element
Then it collapses back to the default setting and hides details