let scores, roundScore, activePlayer, gamePlaying, lastDice;
gamePlaying = true;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. Random number
    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display result
    var dice1 = document.getElementById('dice-1');
    var dice2 = document.getElementById('dice-2');
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    dice1.src = './pics/dice-' + diceRoll1 + '.png';
    dice2.src = './pics/dice-' + diceRoll2 + '.png';

    // 3. Update the round score IF the rolled number was not a 1
    if (dice1 === 6 && lastDice1 === 6 && dice2 === 6 && lastDice2 === 6) {
      //Player loses score
      console.log(dice, lastDice);
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (diceRoll1 !== 1 && diceRoll2 !== 1) {
      roundScore += (diceRoll1 + diceRoll2);
      document.querySelector('#current-' + activePlayer).innerHTML = `<strong>` + roundScore + `</strong>`;
    } else {
      nextPlayer();
      console.log(diceRoll1, diceRoll2);
    }
    lastDice1 = dice1;
    lastDice2 = dice2;
  }
});

document.querySelector('.btn-hold').addEventListener('click', ev => {
  // 1. Add the current score to players global score
  scores[activePlayer] += roundScore;
  // 2. Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  var input = document.querySelector('.finalScore').value;
  var winningScore;
  // Undefined, 0, null, or "" are COERCED to false
  if (input) {
    winningScore = input;
  } else {
    winningScore = 100;
  }

  // 3. Check if player won the game
  if (scores[activePlayer] >= winningScore) {
    document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    // 4. Next Player
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
}
