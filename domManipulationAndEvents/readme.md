`Dom Manipulation`
We are going to make JS interact with a web page
DOM: Document Object Model
- Structured representation of an HTML Document
- Used to connect webpages to scripts like JS
- For each HTML box there is an object we can interact with
- JS and the DOM are 2 different things

`Event listener`
- An event can only be processed as soon as the execution stack is empty
- How to set up an event handler
  `document.getElementById('score-0').textContent = '0';`
  `document.querySelector('.dice').style.display = 'none';`
- What a callback function is
  `document.querySelector('.btn-roll').addEventListener('click', btn);`
- What an anonymous function is
- Ternary Operator
  `activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;`

`State Variables`
  - Tells us the condition of a system
  - When we need to remember something
  - i.e Is our game playing or not playing?

1st challenge:
Make 2 consecutive 6s result in 0 total points and a loss of turns

2nd challenge:
Add an input field to the html where players can set the winning score,
so that they can change the predefined score of 100; You can read that value with the .value property. Google is your friend;

3rd Challenge:
Add another dice to the game, so that there are two dices now. The player loose his current score when one of them is a one.
