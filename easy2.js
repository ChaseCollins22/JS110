/* eslint-disable max-len */

/*  PROBLEM #7

Exclusive Or

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if
both operands are falsey. The && operator returns a truthy value if both of its operands are truthy,
and a falsey value if either operand is falsey. This works great until you need only one, but not both,
of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if
exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result
instead of a truthy/falsy value as returned by || and &&.

Examples:

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

*/

// PROBLEM:
//  INPUT: 2 arguments of any value; string, bool, number, object
//  OUTPUT: boolean
//  EXPLICIT REQUIREMENTS:
//    - A function that checks both arguments and returns true if EXACTLY ONE of its arguments is
//      truthy

// EXAMPLES:
// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

// DATA STRUCTURE:
//  Boolean

// ALGORITHM:
//  CREATE a variable to count the number of truthy values
//  IF the first argument is truthy, THEN increment the counter variable by 1
//  IF the second argument is truhy, THEN increment the counter variable by 1
//  RETURN true if the counter is exactly equal to one, otherwise return false

// CODE:

// function xor(arg1, arg2) {
//   let numTruthy = 0;

//   if (arg1) numTruthy += 1;
//   if (arg2) numTruthy += 1;

//   return numTruthy === 1;
// }

function xor(arg1, arg2) {
  return !!((arg1 && !arg2) || (!arg1 && arg2));
}


// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

/* PROBLEM #8

Write a function that returns an Array that contains every other element of an Array that is passed
in as an argument. The values in the returned list should be those values that are in the 1st, 3rd,
5th, and so on elements of the argument Array.

Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

*/

// PROBLEM
//  INPUT: Array
//  OUTPUT: Array with odd values from input array (not zero-index)
//  EXPLICIT REQUIREMENTS:
//    - select every other element from the input array
//  IMPLICIT REQUIREMENTS:
//    - Do not mutate the input array
//  QUESTIONS:
//    - What if the array is empty?

// EXAMPLES:
//  console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
//  console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
//  console.log(oddities(["abc", "def"])); // logs ['abc']
//  console.log(oddities([123])); // logs [123]
//  console.log(oddities([])); // logs []

// NOTES:
//  - If the array is empty, return the empty array.

// DATA STRUCTURE:
//  - Array

// ALGORITHM:
//  CREATE an array to hold the odd values
//  IF the array is empty, THEN return the array
//  LOOP through the array.
//    ADD every other element to the newly created array (starting at index 0)
//  RETURN the array

function oddities(array) {
  let oddElements = [];

  for (let index = 0; index < array.length; index += 2) {
    oddElements.push(array[index]);
  }

  return oddElements;
}

//  console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
//  console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
//  console.log(oddities(["abc", "def"])); // logs ['abc']
//  console.log(oddities([123])); // logs [123]
//  console.log(oddities([])); // logs []


// FUTHER EXPLORATION:

function evenities(array) {
  return array.filter((element, index) => index % 2 === 1);
}


/* PROBLEM #9:

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a
random number between 20 and 120 (inclusive).

Example Output:

Teddy is 69 years old!

*/

// PROBLEM
//  INPUT: NONE
//  OUTPUT: String
//  EXPLICIT REQUIREMENTS:
//    - Generate a random number between 20 and 120 (inclusive);
//  IMPLICIT REQUIREMENTS:
//    - randomly generated number is an integer


// EXAMPLES:
// Teddy is 69 years old!

// DATA STRUCTURE:
//  Integer to hold randomly generated number

// ALGORITHM:
//  CREATE a random number between 20 and 120

// CODE:

function teddysAge(min, max) {
  if (min >= max) {
    let temp = max;
    max = min;
    min = temp;
  }
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  return `Teddy is ${age} years old!`;
}

// console.log(teddysAge(1220, 120));


/* PROBLEM #10:

When Will I Retire?

Build a program that logs when the user will retire and how many more years the user has to work until
retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/

// PROBLEM:
//  INPUT: Number (integer), Number (integer)
//  OUTPUT: String
//  REQUIREMENTS:
//    IMPLICIT:
//      - Need to get the current year
//      - Need to get user input from command line
//    QUESTIONS:
//      - Input validation?

// EXAMPLES:
//  What is your age? 30
//  At what age would you like to retire? 70

//  It's 2017. You will retire in 2057.
//  You have only 40 years of work to go!

// NOTES:
//  - No input validation needed based on examples

// DATA STRUCTURE:
//  variable

// ALGORITHM:
//  IMPORT packages for user input
//  GET user's age
//  GET user's retirement age
//  CONVERT user input from string to number
//  CREATE a date object and get the year
//  CALCULATE how many years between user's current age and their desired retirement age
//  return a string containing the current year, retirement year, and years between the two.

// CODE:

// let readline = require('readline-sync');

// let currentAge = Number(readline.question('What is your age? '));
// let retirementAge = Number(readline.question('At what age would you like to retire? '));

// let currentYear = new Date().getFullYear();
// let yearsToRetirement = retirementAge - currentAge;

// console.log();
// console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetirement}`);
// console.log(`You only have ${yearsToRetirement} years of work to go!`);


/* PROBLEM # 11:

Get Middle Character

Write a function that takes a non-empty string argument and returns the middle character(s) of the
string. If the string has an odd length, you should return exactly one character. If the string has
an even length, you should return exactly two characters.

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs" len: 12 char indecies: 5, 6
centerOf('x');                 // "x"

*/

// PROBLEM:
//  INPUT: A non-empty string
//  OUTPUT: the middle character's of the input string
//  EXPLICIT REQUIREMENTS:
//    - If input string's length is odd, only one character should be returned.
//    - If input string's length is even, exactly two characters should be returned.
//  IMPLICIT REQUIREMENTS:
//    - Input string can be multiple words.
//    - return characters can be ' '
//    - When input is even, take the character one index above or below the 'middle character'

// DATA STRUCTURE:
//  - A string

// ALGORITHM:
//  CREATE an empty string variable to hold the middle characters
//  CONVERT input string to an array of characters
//  GET the length of the array of characters
//  IF the length is even, THEN ADD the middle character to the string variable
//  ELSE ADD the middle character and the previous character to the string variable
//  RETURN the string;

// CODE:

function centerOf(string) {
  let stringLength = string.length;
  let characters = string.split('');

  if (stringLength % 2 === 1) {
    return characters[Math.floor(stringLength / 2)];
  } else {
    let start = (stringLength / 2) - 1;
    let end = stringLength / 2;
    return string.slice(start, end + 1);
  }
}

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs" len: 12 char indecies: 5, 6
// console.log(centerOf('x'));                 // "x"


/* PROBLEM #12:

Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the
negative of that number. If the argument is a negative number, return it as-is.

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
*/

function negative(num) {
  return num >= 0 ? -num : num;
}

// console.log(negative(5));
// console.log(negative(-3));
// console.log(negative(0));
