//Fun Quiz Game

var Question = function (question, answers, correctAns) {
  this.question = question;
  this.answers = answers;
  this.correctAns = correctAns;
};

var ansr = [];
ansr[0] = {
  op0: 1,
  op1: 7,
  op2: 50,
  op3: 92
};

ansr[1] = {
  op0: 10,
  op1: 22,
  op2: 9,
  op3: 55
};

ansr[2] = {
  op0: 56,
  op1: 71,
  op2: 20,
  op3: 31
};

ansr[3] = {
  op0: 78,
  op1: 14,
  op2: 98,
  op3: 34
};

var q = [];
q[0] = new Question('How much is 4 + 3?', ansr[0], 1);
q[1] = new Question('How much is 5 + 5?', ansr[1], 0);
q[2] = new Question('How much is 17 + 3?', ansr[2], 2);
q[3] = new Question('How much is 1 + 33?', ansr[3], 3);

/*var ran = Math.floor(Math.random() * 4);

(function () {
  console.log(q[ran].question);
  console.log('0:' + q[ran].answers.op0);
  console.log('1:' + q[ran].answers.op1);
  console.log('2:' + q[ran].answers.op2);
  console.log('3:' + q[ran].answers.op3);
})();

(function () {
  var res = prompt("Enter correct answer.");
  if (res != 'exit'){
    if (res == q[ran].correctAns){
      console.log('Correct Answer!');
    }
    else{
      console.log('Wrong Answer!');
    }
  else {
    restart();
  }
})();*/

var res, ran, score = 0;

function restart () {
  ran = Math.floor(Math.random() * 4);

  (function () {

    console.log(q[ran].question);
    console.log('0:' + q[ran].answers.op0);
    console.log('1:' + q[ran].answers.op1);
    console.log('2:' + q[ran].answers.op2);
    console.log('3:' + q[ran].answers.op3);

    res = prompt("Enter correct answer.");

    if (res == 'exit'){

    } else {
      if (res == q[ran].correctAns){
        console.log('Correct Answer!');
        score += 1;
        console.log('Your current score is : ' + score);
      }
      else{
        console.log('Wrong Answer! Try Again. :)');
        console.log('Your current score is : ' + score);
      }
      restart();
    }

  })();
}

restart();
