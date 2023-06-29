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

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

// console.log(getNumConsonants('aa'));
// console.log(getNumConsonants('baa'));
// console.log(getNumConsonants('ccaa'));
// console.log(getNumConsonants('dddaa'));
