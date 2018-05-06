//quiz game part 1
/*
(function () {

function Question (question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
};

Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function (ans) {
  if (ans === this.correct) {
    console.log('Correct Answer!');
  } else {
    console.log('Wrong Answer. Try Again. :)');
  }
};

var q1 = new Question('What is your name?',
['Yashraj', 'Ram', 'Rahim'],
0);

var q2 = new Question('What is your age?',
[30, 45, 29, 55],
2);

var q3 = new Question('Are you ready?',
['yes', 'no'],
1);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);
})();*/



//quiz game part 2

(function () {

function Question (question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
};

Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function (ans, callback) {
  var sc;
  if (ans === this.correct) {
    console.log('Correct Answer!');
    sc = callback(true);
  } else {
    console.log('Wrong Answer. Try Again. :)');
    sc = callback(false);
  }
  this.displayScore(sc);
};

Question.prototype.displayScore = function (score) {
  console.log('Your current score is : ' + score);
  console.log('---------------------------------');
}

var q1 = new Question('What is your name?',
['Yashraj', 'Ram', 'Rahim'],
0);

var q2 = new Question('What is your age?',
[30, 45, 29, 55],
2);

var q3 = new Question('Are you ready?',
['yes', 'no'],
1);

var questions = [q1, q2, q3];

function score () {
  var sc = 0;
  return function (correct) {
    if (correct) {
      sc++;
    }
    return sc;
  }
}

var keepScore = score();

function nextQues () {

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = prompt('Please select the correct answer.');

if (answer !== 'exit') {
  questions[n].checkAnswer(parseInt(answer), keepScore);
  nextQues();
}
}

nextQues();

})();
