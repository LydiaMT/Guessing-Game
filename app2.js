// As a user, I would like to learn about the site owner so I can get to know them better..
// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

/*
1. Is my name Lisa? NO
2. Did I go the University of Washington? YES
3. Was my first job 3Degrees? NO
4. Did I leave 3Degrees in 2020? YES
5. Have I ever been a yoga instructor? YES
*/
// Users name
'use strict';

var user = prompt ('What is your name?');
console.log('The users name is' + user)
alert('Hello ' + user + '. Take this 5 question quiz!') 

// Question 1
var questionOne = prompt('Is my name Lisa? Enter \'Yes\' or \'No\'')
// used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
var responseOne = questionOne.toUpperCase();

console.log(responseOne)

if (responseOne === 'NO') {
  alert('That\'s correct! My name is Lydia')
} else {
  alert ('That\'s incorrect. My name is Lydia');
}


// Question 2
var questionTwo = prompt('Did I go to the University of Washington? Enter \'Yes\' or \'No\'')
var responseTwo = questionTwo.toUpperCase();

console.log(responseTwo)

if (responseTwo === 'YES') {
  alert('That\'s correct! I went to the University of Washington')
} else {
  alert('That\'s incorrect. I did go to the University of Washington');
}

// Question 3
var questionThree = prompt('Was my first job 3Degrees? Enter \'Yes\' or \'No\'')
var responseThree = questionThree.toUpperCase();

console.log(responseThree)

if (responseThree === 'NO') {
  alert ('That\'s correct! My first job was Cold Stone')
} else {
  alert ('That\'s incorrect. My first job was Cold Stone');
}

// Question 4
var questionFour = prompt('Did I leave 3Degrees in 2020? Enter \'Yes\' or \'No\'')
var responseFour = questionFour.toUpperCase();

console.log(responseFour)

if (responseFour === 'YES') {
  alert ('That\'s correct! I left 3Degrees in 2020')
} else {
  alert ('That\'s incorrect I did leave 3Degrees in 2020');
}

// Question 5
var questionFive = prompt('Have I ever been a yoga instructor? Enter \'Yes\' or \'No\'')
var responseFive = questionFive.toUpperCase();

console.log(responseFive)

if (responseFive === 'YES') {
  alert ('That\'s correct! I have been a yoga instructor')
} else {
  alert('That\'s incorrect. I have been a yoga instructor');
}

// Thank the user for taking your quiz
alert('Thank you for taking my quiz, ' + user + '!') 