

(function() {
  //function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  //////////////////////////////////////////////////
  //Question Prototype to Display Function
  //////////////////////////////////////////////////
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log((i + 1) + ':' + this.answers[i]);
    }
  }
  ///////////////////////////////////////////////////

  Question.prototype.checkAnswer = function(ans, callback) {
      var sc;
      if((ans - 1) === this.correct) {
        console.log(`Correct answer!!!`);
        sc = callback(true);
      } else if (ans === 0) {
        console.log(`Okay see ya later! 🐊`);
        callback(true);
      } else {
        console.log(`Wrong Answer! Try Again :)-`);
        sc = callback(false);
      }
      this.displayScore(sc);
  }
  Question.prototype.displayScore = function(score) {
    console.log(`You're current score is ${score}`);
    console.log(`--------------------------------`);
  }

  var q1 = new Question(`Who is often regarded as the founder of Surrealism?`, [`Andre Breton 🎭`, `Dali 🌺`, `Luis Bunuel 🎨`], 0);
  var q2 = new Question(`Which team won the 2018 World Series?`, ['Los Angeles Dodger ⚾️', `Boston Red Sox 🔴`, `New York Yankees 🗽`], 1);
  var q3 = new Question(`What is not an epithet for superhero Batman?`, [`Caped Crusader 🏃`, `World's Greatest Detective 🔍`, `The Caveman 🛀`], 2);
  ////////////////////////////////////////////////////
  //Closure to keep score
  ////////////////////////////////////////////////////
  var questions = [q1, q2, q3];
  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      } else {
        sc--;
      }
      return sc;
    }
  };
  var keepScore = score();
  var sc;
  //////////////////////////////////////////////////////
  while(answer !== 0) {
      var n = Math.floor(Math.random() * questions.length);
      ////////////////////////////////////
      //To Run Prototype
      ////////////////////////////////////
      questions[n].displayQuestion();
      /////////////////////////////////////
      var answer = parseInt(prompt('Please select the answer you think fits by picking the number that correlates to the answer. To leave the quiz press 0. 💩'));
      questions[n].checkAnswer(answer, keepScore);
  }
})();
