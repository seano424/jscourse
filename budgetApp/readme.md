Budget App Project
- How to think and how to make all the pieces of the code fit together

- Project Planning and Architecture
  - To Do List
    - Add event handler
    - Get input values
    - Add the new item to our data structure
    - add to the UI
    - Calculate budget
    - update the UI

- Structure our Code with Modules
  - Modules
   - Important aspect of any robust application
   - keep the units of code for a project both cleanly separated
   - encapsulate some data into privacy and expose other data publicly
      - We are going to create a module with each from our to do list:

        - UI Module
          - Get input values
          - Add the new item to the UI
          - Update the UI

        - Data Module
          - Add the new item to our data structure
          - Calculate the budget

        - Controller Module
          - Add event handler
