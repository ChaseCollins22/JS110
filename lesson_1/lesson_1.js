/* eslint-disable max-len */

// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
// input: string
// output: array of strings 
// rules:
//			Explicit requiremnts:
//					- Palindromes are case sensitive (dad is a palindrome; Dad is not)
//			Implicit requirements:
//					- If the input string is empty, the result should be an empty array
//					-	If the input string has no palindromes, the result should be an empty array
//					- Palindromes may overlap ('abab' -> ['aba', 'bab'])
//					- Palindromes have a minimum length of 2 ('running' -> ['nn', 'nin'] )


// Leftover Blocks

// You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a
// structure:

// The building blocks are cubes
// The structure is built in layers
// The top layer is a single block
// A block in an upper layer must be supported by four blocks in a lower layer
// A block in a lower layer can support more than one block in an upper layer
// You cannot leave gaps between blocks
// Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible
// valid structure.

// You are provided with the problem description above. Your tasks for this step are:

// To make notes of your mental model for the problem, including explicit and implicit rules
// Write a list of questions for things that aren't clear about the problem from the description provided

// Rules:
//    Input: Number (integer)
//    Output: Number (integer)
//    Explicit:
//       The building blocks are cubes
//       The structure is built in layers
//       The top layer is a single block
//       A block in an upper layer must be supported by four blocks in a lower layer
//       A block in a lower layer can support more than one block in an upper layer
//       You cannot leave gaps between blocks
//    Implcit:
//      What is a layer? How many blocks constitutes a layer?
//      How does a block support another?
//      All blocks must be touching?
//      Only one block on the top layer?
//      Does "supported by four blocks in a lower layer" mean the layer right below it or any layer below it?


// Test cases:

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
// console.log(calculateLeftoverBlocks(4) === 3); //true
// console.log(calculateLeftoverBlocks(5) === 0); //true
// console.log(calculateLeftoverBlocks(6) === 1); //true
// console.log(calculateLeftoverBlocks(14) === 0); //true

// Notes:
//  - A valid structure is built in an inverted way with layer 1 containing 1 (1^2) block, layer 2 containing 4 (2^2) blocks, and layer 3 containing
//    9 (3^2) blocks.
//  - A layer must be filled in its entirety otherwise the blocks are considered 'leftover'. Ex: console.log(calculateLeftoverBlocks(4) === 3);
//    logs true. Layer 1 is filled with 1 block, but layer 2 needs 4 blocks to be filled, since there are only 3 (4 - 1) left, the second layer cannot
//    be filled and the blocks are considered leftover.

// Data Structure:
//  2D Array => [     [block] (1)
//                 [block, block] (4)
//               [block, block, block] (9)
//                                         ]

// Algorithm:
//    1) Create a structure
//    2) Add a layer to the structure if the current layer can be filled in its entirety with the blocks we have. Otherwise, return the blocks remaining
//        2a) blocks needed per layer are each layer number squared: Layer 1 = 1 block, Layer 2 = 4 blocks, Layer 3 = 9 blocks, etc.
//    3) repeat step 2 until a layer cannot be created with the blocks we have.

//    1) Create an array to hold the layers
//    2) Create a variable remainingBlocks to hold the value of numBlocks
//    3) Create an index variable, currentLayer set to 1 for the first layer
//    4) Use a while loop with the conditon to check whether the remainingBlocks is greater than or equal to the index variable squared
//      a) - If it is, create another array with currentLayer ** 2 elements, and add it to the array structure
//         - Increment currentLayer by 1
//         - Decrement remainingBlocks by currentLayer ** 2
//      b) - if not, return remainingBlocks


function calculateLeftoverBlocks(numBlocks) {
  let remainingBlocks = numBlocks;
  let currentLayer = 1;

  while (remainingBlocks >= currentLayer ** 2) {
    remainingBlocks -= currentLayer ** 2;
    currentLayer += 1;
  }

  return remainingBlocks;
}

// console.log(calculateLeftoverBlocks(0)); //true
// console.log(calculateLeftoverBlocks(1)); //true
// console.log(calculateLeftoverBlocks(2)); //true
// console.log(calculateLeftoverBlocks(4)); //true
// console.log(calculateLeftoverBlocks(5)); //true
// console.log(calculateLeftoverBlocks(6)); //true
// console.log(calculateLeftoverBlocks(14)); //true




// Sort Strings by Most Adjacent Consonants

// Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string
// contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other.
// Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

// Tasks

// You are provided with the problem description above. Your tasks for this step are:

// To make notes of your mental model for the problem, including explicit and implicit rules
// Write a list of questions for things that aren't clear about the problem from the description provided


// PROBLEM:
//  INPUT: Array of strings
//  OUTPUT: A new array of strings sorted by highest number of adjacent consonants
//  EXPLICIT:
//    - Need to return a new array sorted by highest number of adjacent consonants;
//    - If two strings have the same number of adjacent consonants leave them in their original order as given in the input array
//    - Consonants are adjacent if they are next to each other in the same word or if there is a space between two constants in adjacent words
//  IMPLICIT:
//    - What is a consonant?
//    - Sorted least to greatest?
//    - What if the array is empty?
//    - For consonants separated by a space, does a +1 consonant count go to both words?
//    - Is the input guaranteed to be an array of strings?
//    - What of numbers and special characters?

// Ex: INPUT: ['hello', 'goodbye', 'greetings', 'farewell']
//     NUM_CONSONANTS: [1, 2, 4, 2]
//     OUTPUT: ['hello', 'goodbye', 'farewell', 'greetings']

// TEST CASES:
// You are provided with the following test cases for this problem:

// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

// With reference to your initial mental model and questions from Step 1, make some notes about the test cases. Do the test cases confirm or refute
// different elements of your original analysis and mental mode? Do they answer any of the questions that you had, or do they perhaps raise further
// questions?

// NOTES:
//  - Strings should be sorted greatest to least
//  - Consants are any letter NOT a, e, i, o, u
//  - Question: Does case matter?
//  - A string can have 0 consonants
//  - If 0 consonants in each string of the input array, then the array is sorted in its original form
//  - A pair of adjacent consonants are counted as 2. Similarly, 'lt p' is counted as 3 adjacent consontants


// DATA STRUCTURE:
//  - A string?
//  - An array?

// ALGORITHM:
//  INPUT: Array of strings // ['aa', 'baa', 'ccaa', 'dddaa']
//  CREATE an array of what a consonant is not: [a, e, i, o, u]
//  CREATE a structure to hold temporary letters from a string (Array or String)
//  CREATE an array/object to hold the number of consonants for each string
//  CREATE a counter variable to hold the number of consonants during iteration
//  LOOP through the copy of the input array
//    LOOP through each letter of each word in the array
//      IF the letter is a consonant, THEN add the letter to the temporary structure, ELSE if the structure holds greater than or equal to 2 letters,
//         add the length of the structure to the counter variable and clear the structure.
//    ADD the counter variable's value to an object with the key being the word
//  CREATE an empty array
//  LOOP through the object
//    CREATE a variable to hold the number of consonants; initially set to value of the first key
//    IF the value of the next key is greater than the holder value, THEN set the holder variable to the value of the current key
//


function sortStringsByConsonants(array) {
  let allWordConsonantPairs = [];
  for (const word of array) {
    let numConsonants = getNumConsonants(word);
    allWordConsonantPairs.push([word, numConsonants]);

  }
  allWordConsonantPairs.sort((word1, word2) => word2[1] - word1[1]);
  let sortedStrings = allWordConsonantPairs.map((wordConsonantPair) => wordConsonantPair[0]);

  return sortedStrings;
}

function getNumConsonants(string) {
  let NOT_A_CONSONANT = ['a', 'e', 'i', 'o', 'u'];
  let tempLetters = '';
  let consonantCount = 0;

  for (const letter of string) {
    if (letter === ' ') continue;
    if (!NOT_A_CONSONANT.includes(letter)) {
      tempLetters += letter;
    } else {
      if (tempLetters.length >= 2) {
        consonantCount += tempLetters.length;
      }
      tempLetters = '';
    }

  }
  
  if (tempLetters.length > 0) consonantCount = tempLetters.length
  return consonantCount;
}

// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

// console.log(getNumConsonants('aa'));
// console.log(getNumConsonants('baa'));
// console.log(getNumConsonants('ccaa'));
// console.log(getNumConsonants('dddaa'));


function selectFruit(foods) {
  let fruits = {};

  for (const food in foods) {
    if (foods[food] === 'Fruit') {
      fruits[food] = 'Fruit';
    }
  }

  return fruits;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= 2;

    counter += 1;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

// console.log(doubleOddNumbers(myNumbers));

// function multiply(numsArray, multiplier) {
//   let multipliedArray = [];

//   for (const num of numsArray) {
//     multipliedArray.push(num * multiplier);
//   }

//   return multipliedArray;
// }


function multiply(numsArray, multiplier) {
  return numsArray.map((num) => num * multiplier);
}


myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]


/* PRACTICE PROBLEM #1: *CORRECT*

What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');
*/

// MY ANSWER:
//  The return value is [1, 2, 3]. This is because the callback function returns a truthy value
//  (a non empty-string is truthy) for each element of the array. The `filter` method pushes an
//  element to a new array where the callback function evaluates as true.

// SOLUTION:
//  filter performs selection based on the truthiness of the callback's return value. In this case,
//  the return value is always 'hi', which is truthy. Therefore filter will return a new array
//  containing all of the elements in the original array.


/* PRACTICE PROBLEM #2: *CORRECT*

What is the return value of map in the following code? Why?

Copy Code
[1, 2, 3].map(num => {
  num * num;
});
*/

// MY ANSWER:
//  The return value is [undefined, undefined, undefined]. This is because there is no explicit return
//  statement in the function body. `map`'s implicit return value is undefined, so this is what will be
//  pushed to the new array.

// SOLUTION:
//  map looks at the return value of the callback function to decide the elements in the returned
//  array. Each element in the original array is replaced by what the callback returns for that
//  element. In this case, there's no explicit return statement in the callback function, which means
//  that the callback returns undefined each time.


/* PRACTICE PROBLEM #3: *CORRECT*

The following code differs slightly from the above code. What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);
*/

// MY ANSWER:
//  [1, 4, 9] is the return value of the above code. This  is because there is an implict return
//  statement when using an arrow function on one line. `[1, 2, 3].map(num => return num * num)` is
//  what the above code acts like. Since `map` looks at the return value and we are now returning
//  `num * num`, this value will be added to the new array.

// SOLUTION:
//  Without braces surrounding the body of the arrow function, JavaScript uses the computed value as
//  the return value. In this case, the callback returns 1, 4, and 9 on the 3 iterations.


/* PRACTICE PROBLEM #4: *INCORRECT*

What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;
*/

// MY ANSWER:
//  `2` is the return value of the above code. `.pop()` returns the length of the new array after
//  removing the last item. Currently the length is 3. After removal, the length will be 2. We call
//  the `.length` property after the removal of the last element, so the length will still be 2.

// SOLUTION:
//  There are a couple of things going on here. First, pop is being called on the array. pop
//  destructively removes the last element from the calling array and returns it. Second, length is
//  being accessed on the return value by pop. Once we realize that length is evaluating the return
//  value of pop ('caterpillar') then the final return value of 11 should make sense.

// WHERE I WENT WRONG:
//  `.pop()` does not return the length of the array after the last element is removed. It returns
//  the element that has been removed.


/* PRACTICE PROBLEM #5: *PARTIALLY CORRECT*

What is the callback's return value in the following code?
Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});
*/

// MY ANSWER:
//  The callback's return value evaluates as true because any non-zero integer is truthy. There is no
//  `0` in the array, therefore the callback will evaluate as true for every element in the array, and
//  eventually the `.every()` method will return true.

// SOLUTION:
//  The return values of the callback will be 2, 4, and 6 on the respective iterations.
//  The expression num = num * 2 is an assignment expression and will evaluate as the expression on
//  the right-hand side of the assignment and that is what gets returned in each iteration. Since all
//  of those numbers are truthy values, every will return true.

// WHERE I WENT WRONG:
//  The question asks about the callbacks return value. While the return value evaluates as true, the
//  initial return value of the callback would be the result of the reassignment `num = num * 2`, which
//  returns 2, 4, 6 respectively. These integer values then get evaluated for their truthiness, which
//  because they're non-zero, ends up evaluating as true.


/* PRACTICE PROBLEM #6: *CORRECT*

How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
*/

// MY ANSWER:
//  Array.prototype.fill works by taking up to three arguments, `value`, `start`, `end`, respectively.
//  The `value` represents the value that we want to fill the array with. If we wanted an array of
//  all `5`'s the value would be `5`. `start` is the first index where the value will be placed. `end`
//  is the last index where the value will be placed. In the above code, we pass the value `1` and start
//  at index `1` and end at index `5`. `.fill()` will place a `1` from index 1 through index 4 of the
//  array. `fill()` is a destructive method, so `arr` will be mutated after invoking `.fill()`. We can
//  find out by looking at the docs or logging `arr` before and after calling `.fill()`

// SOLUTION:
//  If you're unsure of how a method works the best thing to do is to read its documentation.
//  Along with that, testing the method in node console can be very helpful. In this case, we can
//  quickly check if fill is destructive or not by running the code in the console.


/* PRACTICE PROBLEM #7: *CORRECT*

What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
*/

// MY ANSWER:
//  [undefined, 'bear'] is the return value of map. In the function body, we check if the element's
//  length is `> 3`. Only if the elemnt is greater than 3 do we explicity return a value. Because there
//  is no return value for when the element is `< 3`, `.map()` returns undefined.

// SOLUTION:

// [ undefined, 'bear' ]

//  There are some interesting things to point out here. First, the return value of map is an array,
//  which is the collection type that map always returns. Second, where did we get that undefined
//  value? If we look at the if condition (elem.length > 3), we'll notice that it evaluates as true
//  when the length of the element is greater than 3. In this case, the only value with a length
//  greater than 3 is 'bear'. Thus, for the first element, 'ant', the condition evaluates as false
//  and elem isn't returned.

// When a function doesn't explicitly return something, it implicitly returns undefined. That's why
// we see undefined as the first element of the returned array.


/* PRACTICE PROBLEM #8: *CORRECT*

Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

Write a program that uses this array to create an object where the names are the keys and the values
are the positions in the array:

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

*/

// MY ANSWER:
//  PROBLEM:
//    INPUT: an array of strings
//    OUTPUT: an object of key value pairs with the key being the string and the value being its
//            index in the input array
//    REQUIREMENTS:
//      - Create a new object.

//  EXAMPLES/TEST CASES:
//    - let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"]; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//  DATA STRUCTURE:
//    - An object

// ALGORITHM:
//  CREATE an empty object to store the key-value pairs
//  LOOP through the array
//    ADD a property to the object with the key as the element and value as its index
//  RETURN the object

// CODE:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function toElementElementIndex(array) {
  let elements = {};

  array.forEach((element, elementIndex) => {
    elements[element] = elementIndex;
  });

  return elements;
}

// console.log(toElementElementIndex(flintstones));

// SOLUTION:
/*  let flintstonesObj = {};

    flintstones.forEach((name, index) => {
      flintstonesObj[name] = index;
    });

    flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
*/


/* PRACTICE PROBLEM #9: *CORRECT*

Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
*/

// MY ANSWER:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesValues = Object.values(ages);

let sumAgesValues = agesValues.reduce((sum, age) => sum + age, 0);

// console.log(sumAgesValues); // 6174

/* SOLUTION:

One solution would be to assign a variable to an initial value of 0 and then iterate through the
object values adding each value in turn to the total.

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174

Another option would be to use Array.prototype.reduce method:

Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174

One slight advantage of the reduce method is that we don't have to declare and initialize a variable
and then reassign to that value from inside the callback. Be sure to read the documentation on
Array.prototype.reduce to see how it works.

When faced with a problem such as this one, however, don't get tempted to go 'method hunting' to reach
a solution. As demonstrated, even if you don't know the reduce method, the problem can be solved
equally well by using forEach to iterate through the object values; you could even use a basic loop
(while, for, or do/while) to achieve the same result.

*/


/* PRACTICE PROBLEM #11:

Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

The output will look something like the following:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

*/

// MY ANSWER:
//  CREATE an object to hold the key-value pairs
//  LOOP through the string
//    IF the currentLetter is not in the object, THEN create a property with the letter as the key and
//    1 as the value
//    OTHERWISE, increment the key's value by 1
//  RETURN the object

let statement = "The Flintstones Rock";

let letterOccurrences = {};

statement.split('').filter(letter => letter !== ' ').forEach(letter => {
  if (!letterOccurrences.hasOwnProperty(letter)) {
    letterOccurrences[letter] = 1;
  } else {
    letterOccurrences[letter] += 1;
  }
});

console.log(letterOccurrences);

/* SOLUTION:

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

There are a couple of interesting things to note about this solution. First with the expression
statement.split('').filter(char => char !== ' '), we convert the string into an array of characters
but we make sure to exclude the space characters by using the filter method.

Note the following line:

result[char] = result[char] || 0;

We're taking advantage of something called short-circuiting here. What this means is that JavaScript
first evaluates the left operand (result[char]) of the || operator. If it is truthy, JavaScript
doesn't evaluate the right operand; it only evaluates the right operand when the left is falsy.
Thus, if a character doesn't exist as a key in our results object, result[char] will return undefined
— a falsy value — resulting in the assignment of result[char] to 0. If result[char] instead evaluates
to a truthy value such as 1, it'll simply reassign the current value to result[char].

We can also code up the same logic without using the || operator:

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

Note that we don't have to convert the string to an array to solve the problem. We're doing so here
only so that we can use the forEach method. We could've used a simple for loop to iterate over the
string directly:

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}

*/
