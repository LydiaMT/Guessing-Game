'use strict';
//quiz score
var quizScore = 0

// Users name
var user = prompt ('What is your name?');
console.log('The users name is' + user)
alert('Hello ' + user + '. Take this 7 question quiz!') 

// Question 1
var questionOne = prompt('Is my name Lisa? Enter \'Yes\' or \'No\'')
console.log(questionOne)

if (questionOne.toLowerCase() === 'no') {
  alert('That\'s correct! My name is Lydia')
  quizScore++
} else {
  alert ('That\'s incorrect. My name is Lydia');
}

// Question 2
var questionTwo = prompt('Did I go to the University of Washington? Enter \'Yes\' or \'No\'')
console.log(questionTwo)

if (questionTwo.toLowerCase() === 'yes') {
  alert('That\'s correct! I went to the University of Washington')
  quizScore++
} else {
  alert('That\'s incorrect. I did go to the University of Washington');
}

// Question 3
var questionThree = prompt('Was my first job 3Degrees? Enter \'Yes\' or \'No\'')
console.log(questionThree)

if (questionThree.toLowerCase() === 'no') {
  alert ('That\'s correct! My first job was The Queen Anne Manor')
  quizScore++
} else {
  alert ('That\'s incorrect. My first job was The Queen Anne Manor');
}

// Question 4
var questionFour = prompt('Did I leave 3Degrees in 2020? Enter \'Yes\' or \'No\'')
console.log(questionFour)

if (questionFour.toLowerCase() === 'yes') {
  alert ('That\'s correct! I left 3Degrees in 2020')
  quizScore++
} else {
  alert ('That\'s incorrect I did leave 3Degrees in 2020');
}

// Question 5
var questionFive = prompt('Have I ever been a yoga instructor? Enter \'Yes\' or \'No\'')
console.log(questionFive)

if (questionFive.toLowerCase() === 'yes') {
  alert ('That\'s correct! I have been a yoga instructor')
  quizScore++
} else {
  alert('That\'s incorrect. I have been a yoga instructor');
}

// Question 6: Guess a number between 1-100. 4 tries, number is 42
var correctAnswer = '42'
var userAnswer = ''

for (var i = 0; userAnswer !== correctAnswer && i < 4; i++) {
  userAnswer = prompt('Now, ' + user + '...Guess a number between 1-100. You have 4 tries to get the right number')
  if(i === 3 && userAnswer !== correctAnswer) {
    alert('Nice try, the correct answer was 42')
    quizScore++
  } else if (userAnswer === correctAnswer){
    alert('You got it! 42 is the right number')
    quizScore++
  } else if (userAnswer < correctAnswer) {
    alert('Sorry, too low');
  } else if (userAnswer > correctAnswer){
    alert('Sorry, to high');
  }
}

console.log(userAnswer)
console.log('loop is done')

//Question 7: Guess a favorite food
var arrayFood = [
  'burritos', 
  'ramen', 
  'dumplings', 
  'curry',
  'impossible burger', 
  'berries', 
  'veggie chips', 
  'hot dogs', 
  'pressed juice', 
  'mambas']
var arrayUserAnswer
console.log(arrayUserAnswer)

// 'include' method aquired here:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
for (var i = 0; i < 6; i++) {
  arrayUserAnswer = prompt('Last question, what is one of my favorite foods? You have 6 attempts')
  arrayUserAnswer = arrayUserAnswer.toLowerCase()
  console.log(arrayUserAnswer);
  if (i === 5) {
    alert('Nice attempt. My 10 favorite foods are ' + arrayFood);
  } else if (arrayFood.includes(arrayUserAnswer)){
    alert('That IS one of my favorite foods, nice job!');
    quizScore++
    break;
  } else {
    alert('Not quite');
  }
}

console.log('loop is done')

// Quiz score
alert('Great job! You got ' + quizScore + '/7')