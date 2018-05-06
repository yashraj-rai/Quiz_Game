// function constructor prototype
/*
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1985, 'Teacher');
var jane = new Person('jane', 1973, 'Designer');
var mark = new Person('mark', 1949, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/


//Object.create
/*
var personProto = {
  calculateAge : function () {
    console.log(2018 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1989;
john.job = 'Teacher';

var jane = Object.create(personProto,{
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'Designer'}
});*/


//Primitives vs Object
/*
//Primitives
var a = 30;
var b = a;
a = 40;

console.log(a);
console.log(b);

//Object
var obj1 = {
  name: 'Jonas',
  age: 30
};
var obj2 = obj1;
obj1.age = 40;

console.log(obj1.age);
console.log(obj2.age);

//function
var age = 30;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 40;
  b.city = 'San Fransisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);*/

//first-class functions : passing function as argument
/*
var year = [1990, 1976, 1999, 2009, 1983];

function arrCalc(arr, fn) {
  var arrRes = [];
  for (var i=0; i<arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  return Math.round(206.9 - (0.67 * el));
}

var ages = arrCalc(year, calculateAge);
var full = arrCalc(ages, isFullAge);
var rates = arrCalc(ages, maxHeartRate);


console.log(ages);
console.log(full);
console.log(rates);
*/

//functions returning functions
/*
function questions(job) {
  if (job === 'teacher') {
    return function(name) {
      console.log(name + ' is a teacher.');
    }
  } else if (job === 'designer') {
    return function(name) {
      console.log(name + ' is a designer.');
    }
  } else {
    return function (name) {
      console.log(name + ' What do you do?');
    }
  }
}

//var interview = questions('teacher');

questions('teacher')('john');

//interview('john');
//interview('jane');
*/


//Immediately Invoked Function Expression (IIFE)
/*
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

//Closures
/*
function retirement (retirementAge) {
  var a = ' years until retirement. ';
  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
var retirementIndia = retirement(60);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
retirementIndia(1990);*/


//Challenge 1
/*
function questions(job) {
    return function(name) {
      if (job === 'teacher') {
        console.log(name + ' is a ' + job + '.');
    }
   else if (job === 'designer') {
      console.log(name + ' is a ' + job + '.');
    }
   else {
      console.log(name + ' is a ' + job + '.');
    }
  }
}

var interview = questions('teacher');
var interviewDesigner = questions('designer');
var interviewPopat = questions('popat');

interview('john');
interviewDesigner('jane');
interviewPopat('mark');
*/

//bind, call and Apply

var john = {
  name: 'john',
  age: 29,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' Ladies and Gentleman.' + ' I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

john.presentation('formal', 'morning');

var emily = {
  name: 'emily',
  age: 35,
  job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');

john.presentation.apply(emily, ['formal', 'evening']);

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('night');
emilyFormal('morning');
emilyFormal('afternoon');
