/* eslint-disable max-len */

/* PROBLEM #1

ddaaiillyy ddoouubbllee
Write a function that takes a string argument and returns a new string that contains the value of the
original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

*/

// PROBLEM:
//  INPUT: string
//  OUTPUT: string
//  EXPLICIT REQUIREMENTS:
//    - Break down input string to single character instances
//  IMPLICIT REQUIREMENTS:
//    - An empty string return an empty string
//    - If one character then return one character


// DATA STRUCTURE:
//  - String?

// ALGORITHM:
//  CREATE an empty string to hold collapsed characters
//  CREATE a variable and set it to the first character of the string
//  LOOP through the string
//    IF the character in the loop is the same character in the outer scope, THEN go to the next character
//    ELSE ADD the current character to the collapsed characters string and 
//              set the outer scope variable to the current character
// RETURN the collpased character string

// function crunch(string) {
//   if (string.length === 0) return string;
//   let stringCollapsed = string[0];
//   let currentChar = string[0];

//   for (const char of string) {
//     if (char === currentChar) continue;
//     else {
//       stringCollapsed += char;
//       currentChar = char;
//     }
//   }

//   return console.log(stringCollapsed);
// }



// function crunch(string) {
//   let collapsedString = string[0];

//   string.split('').forEach(char => {
//     if (char === collapsedString[collapsedString.length - 1]) { return }
//     else {
//       collapsedString += char;
//     }
//   });

//   return console.log(collapsedString);
// }

// function crunch(string) {
//   return console.log(string.split('').reduce((newStr, char) => {}
//     return newStr.endsWith(char) ? newStr : newStr + char,''));
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""



/* PROBLEM #2:

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+


logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.

*/

// ALGORITHM:
// CREATE box
//  CREATE a sparse array
//  FILL the array with '-'
//  LOG the rest

// CODE:

function logInBox(string) {
  let topRow = '+' + '-'.repeat(string.length + 2) + '+';
  let middleRow = '|' + ' '.repeat(string.length + 2) + '|';

  console.log(topRow);
  console.log(middleRow);
  console.log('| ' + string + ' |');
  console.log(middleRow);
  console.log(topRow);
}

// logInBox('');



/* PROBLEM #3:

Write a function that takes one argument, a positive integer, and returns a string of alternating
'1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

*/

// function stringy(stringLength) {
//   let counter = 0;
//   let alternatingOnesZeros = [];

//   while (counter < stringLength) {
//     if (counter % 2 === 0) {
//       alternatingOnesZeros.push('1')
//     } else {
//       alternatingOnesZeros.push('0')
//     }

//     counter += 1;
//   }

//   return console.log(alternatingOnesZeros.join(''));
// }

function stringy(stringLength) {
  let counter = 0;
  let alternatingOnesZeros = '';

  while (counter < stringLength) {
    alternatingOnesZeros += counter % 2 === 0 ? '1' : '0';
    counter += 1;
  }

  return console.log(alternatingOnesZeros);
}

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 0;

  do {
    candidate++;
    numbers.push(candidate);
  } while (candidate < upperLimit);
  return numbers;
}

/* PROBLEM #4:

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two
numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers.
Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly
rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous,
especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the
number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

*/

/*

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

*/ 

// PROBLEM:
//  INPUT: BigInt (representing the number of digits desired); Is always >= 2
//  OUTPUT: BigInt (representing the index of the first number containing input number of digits)
//  EXPLICIT REQUIREMENTS:
//    - The first two numbers in the fibonacci sequence are 1
//      - Each number after the first two is the sum of the two previous numbers
//        - Ex: 1, 1, ? ==> 1 + 1 = 2 ==> 1, 1, 2
//        -     1, 1, 2, ? ==> 1 + 2 = 3 ==> 1, 1, 2, 3
//    - function should find the FIRST number in the fibonacci sequence that has `input` number of
//      digits
//      - Ex: fibonacci(3) = 'Find the first number in the sequence that has 3 digits and returns its
//        index
//    - Input is always greater than or equal to 2.
//  IMPLICIT REQUIREMENTS:
//    - All numbers are positive

// EXAMPLES:

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13 'The first two digit integer is found at index 7'
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n; // 'The first 10 digit number is found at index 45
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// DATA STRUCTURE:
//  - Array


// [1, 1] 1 + 1 = 2 ===> [1, 1, 2]
// ALGORITHM:
//  CREATE an array to hold the fib sequence. Initalize it with [1, 1].
//  CREATE a counter variable for array access.
//  LOOP through the array
//    ADD the previous 2 elements together
//    ADD the above result to the array
//    CONVERT the result to a string and get its length
//    IF the result is INPUT digits long, then return the index of the array


// CODE

function findFibonacciIndexByLength(numDigits) {
  let fibSequence = [1n, 1n];
  let index = 0;

  while (true) {
    let nextNum = fibSequence[index] + fibSequence[index + 1];
    fibSequence.push(nextNum);

    let nextNumLength = BigInt(nextNum.toString().length);
  
    if (nextNumLength === numDigits) {
      return BigInt(fibSequence.indexOf(nextNum)) + 1n;
    }

    index += 1;
  }
}

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13 'The first two digit integer is found at index 7'
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n); // 'The first 10 digit number is found at index 45
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);


/* PROBLEM #5

Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right triangle whose
sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below)
should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/

// PROBLEM
//  INPUT: Integer
//  OUTPUT: String
//  EXPLICIT REQUIREMENTS:
//    - Each side of the triangle should have INPUT number of '*'s.
//      - This means both sides and the hypotenuse
//    - Triangle should be displayed from bottom left to top right.
//  IMPLICIT REQUIREMENTS:
//    - Number of '*'s can overlap in their side count
//      - EX: The corners of the triangle count for both the base and height sides (see test cases)
//    - Triangle likely needs to be created top down.

// DATA STRUCTURE:
//  - String

// ALGORITHM:
//  CREATE a string to hold the '*' character. Initialize it to '*'.
//  LOOP `INPUT` times
//    LOG the string with (INPUT - LOOP COUNTER) spaces prepended to it.
//    ADD a '*' to the string

// CODE

function triangle(triangleSize) {
  let triangleRow = '*';

  for (let counter = 0; counter < triangleSize; counter += 1) {
    console.log(triangleRow.padStart(triangleSize));
    triangleRow += '*';
  }
}

// triangle(5);
// triangle(9);


/* PROBLEM #6:

Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another
player, then construct a list of words and place them into the story, creating an often silly or
funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and
injects them into a story that you create.

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

*/

// PROBLEM
//  INPUT: 4 strings
//  OUTPUT: String
//  EXPLICIT REQUIREMENTS:
//    - Get a noun, verb, adverb, and adjective from the user
//  IMPLICIT REQUIREMENTS:
//    - User input recieved from the command line.
//    - Any string goes, no input validation necessary

// DATA STRUCTURE:
//  - String variables

// ALGORITHM
//  IMPORT packages necessary for user input
//  PROMPT user for info and store result in a variable
//  LOG a story with corresponding variables to the console

// CODE:

// let readline = require('readline-sync');

// let noun = readline.question('Enter a noun: ');
// let verb = readline.question('Enter a verb: ');
// let adjective = readline.question('Enter a adjective: ');
// let adverb = readline.question('Enter a adverb: ');

// console.log(`
// Welcome to madlibs.
// You are a ${adjective} ${noun}.
// As a ${noun}, you ${adverb} ${verb} all your enemies from the game.
// Oh you stunning ${noun}, you
// `);


/* PROBLEM #7:

