(function() {
  var Question = function(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
  };

  var colorQuestion = new Question()

  Question.prototype.showQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
      console.log((i + 1) + `: ` + this.answer);
    }
  }

  var question1 = new Question(`Who is often regarded as the founder of Surrealism?`, [`Andre Breton`, `Dali`, `Luis Bunuel`], 0);
  var question2 = new Question(`Which team won the 2018 World Series?`, ['Los Angeles Dodger', `Boston Red Sox`, `New York Yankees`], 1);
  var question3 = new Question(`What is not an epithet for superhero Batman?`, [`Caped Crusader`, `World's Greatest Detective`, `The Caveman`], 1);

  var questions = [question1, question2, question3];

  var score = 0;
  while(userAnswer !== '0') {
    var randomNumber = Math.floor(Math.random() * questions.length);
    var questionNumber = questions[randomNumber];
    questionNumber.showQuestion;
    var userAnswer = prompt(`To answer the question, please choose the correct answer number. To exit quiz enter 0.`);
    if(userAnswer == questionNumber.correctAnswer) {
        score++;
        console.log(`Ya! Keep going!`);
        console.log(`Your score is: ${score}`);
        console.log(`-----------------------`);
    } else {
      score--;
      console.log(`Oh no! Incorrect Answer.`);
      console.log(`Your score is: + ${score}`);
    }
  }
})();
