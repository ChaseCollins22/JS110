/* eslint-disable max-len */

/*

What type of action is being performed? Method call? Callback? Conditional? Something else?
On what value is that action performed?
What is the side effect of that action (e.g., output or destructive action)?
What is the return value of that action?
Is the return value used by whatever instigated the action?

*/

// Example 2:
// [[1, 2], [3, 4]].map(arr => console.log(arr[0]));

//  ACTION  | PERFORMED ON  | SIDE EFFECT | RETURN VALUE  | IS RETURN VALUE USED? |
//  method call (.map()); outer array object; none; a transformed array; not in this example
//  callback function; subarray; none; undefined; yes (used by .map())
//  method call (console.log()); first element of each subarray; logs the first element of each subarray to the console; undefined; yes
//  array access; subarray; none; the first element of subarray; yes


// Example 3:
// [[1, 2], [3, 4]].map(arr => {
//   console.log(arr[0]);
//   return arr[0];
// });

//  ACTION  | PERFORMED ON  | SIDE EFFECT | RETURN VALUE  | IS RETURN VALUE USED? |
//  + method call .map(); outer array object; none; a new array; no 
//  + callback function; subarray; none; the first element of each subarray; yes used in the new array that .map() returns
//  + array access; subarray; none; the first element of each subarray; yes used in console.log() and as the callbacks return value
//  + method call console.log(); the first element of each subarray; logs a string representation of the first element of each subarray; undefined; no
//  + return statement; the first element of each subarry; none the first element of each subarry; yes used as the callbacks return value

// What do you think will be returned and what will the side effects be?
// RETURN VALUE: 1, 3, [1, 3]
// SIDE EFFECTS: Logs values to the console


// Example 4:
// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

//  ACTION  | PERFORMED ON  | SIDE EFFECT | RETURN VALUE  | IS RETURN VALUE USED? |
//  variable declaration; .forEach() return value; none; undefined; no
//  method call .forEach(); the outer array object; none; undefined; yes assigned to`myArr` variable
//  callback function; subarray; none; an array; no
//  method call .map(); subarray; none; an array; used as the return value of the callback function
//  callback function; each element of each subarray; none; undefined; yes by .map() for the new array
//  comparison expression; each element of each subarray; none; Boolean; used by the if statement
//  method call console.log(); each element of each subarray greater than 5; logs the element  to the console; undefined; used by the callback

// What will it output and what will the value of myArr be?
// myArr = undefined
// OUTPUT: 18, 7, 12, undefined


// Example 5:
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

//  ACTION  | PERFORMED ON  | SIDE EFFECT | RETURN VALUE  | IS RETURN VALUE USED? |
//  method call .map(); outer array object; none; array; no
//  callback function; subarray; none; array; yes used by the outer .map() call
//  method call .map(); subarray; none; array; yes used by the callback
//  callback function; subarray value; none; subarray value multiplied by 2; yes, used by inner .map()

// RETURN VALUE: [[2, 4], [6, 8]]


// Example 6:

// Let's mix things up even more. In the following example, we have an array of objects, and we want to
// select all of the elements where every key matches the first letter of the value.

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

//  ACTION  | PERFORMED ON  | SIDE EFFECT | RETURN VALUE  | IS RETURN VALUE USED? |
//  method call .filter(); outer array object; none; array; no
//  callback function; array element (object), none; Boolean; yes, used by .filter() for the return array
//  method call Object.keys(object); array element (object); none; array of object's key's; yes, used as .every() object value
//  method call .every(); return value of Object.keys(object) array; none; Boolean; yes used as the callbacks return value
//  callback function; each object's key; none; Boolean; yes, used as the return value for .every()
//  object value access; object; none; the first letter of each object value; yes used in comparison
//  comparison; first letter of each objects value; none; Boolean; yes, used in .every() return value;



// Example 7:

// It can be tricky working with different types of values in a nested array if you want to select
// nested elements based on some criterion. For example, take the 2-element array shown below where we
// want to select numbers greater than 13 and strings shorter than 6 characters. The trick here is
// that the elements are in a two-layer nested array data structure.

[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]



// Example 8:
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]

// Example 9:
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

// RETURN VALUE: [[[2, 3], [4, 5]] ,[6, 7]]


//  ACTION  | PERFORMED ON  | SIDE EFFECT | RETURN VALUE  | IS RETURN VALUE USED? |
//  method call .map(); outer arrya object; none; an array; no
//  callback function; 2nd layer arrays; none; array; yes used in the return value of .map()
//  method call .map(); inner arrays of element 0 and number in element 1; none; array; yes as outer .map()'s callback return value
//  typeof; inner arrays of element 0 and number in element 1; none; string; yes in the comparison
//  comparison; inner arrays of element 0 and number in element 1 and 'number' string; none; boolean; yes in the if statement
//  addition; inner arrays of element 0 and number in element 1; none; inner arrays of element 0 and number in element 1 + 1; yes as the return value of the inner callback
//  method call .map(); element 0 inner arrays; none; array; yes as the inner .map callback return value
//  callback function; element of inner arrays in element 0; none; (number + 1); yes in the third .map() method
//  addtion; element of inner arrays in element 0; none; number + 1; yes as the return value of the callback



// PRACTICE PROBLEMS

// PRACTICE PROBLEM #1:
/*

How would you order the following array of number strings by descending numeric value
(largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

*/

let arr = ['10', '11', '9', '7', '8'];
let arrSorted = arr.sort((a, b) => b - a);


// PRACTICE PROBLEM #2:
/*

How would you order the following array of objects based on the year of publication of each book,
from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];


let booksSortedByDatePublished = books.sort((a, b) => Number(a.published) - Number(b.published));


// PRACTICE PROBLEM #3

/*

For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

*/

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let arr1G = arr1[2][1][3];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
let arr2G = arr2[1]['third'][0];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let arr3G = arr3[2]['third'][0][0];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let obj1G = obj1['b'][1];

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0}};
let obj2G = Object.keys(obj2['third'])[0];


/* PRACTICE PROBLEM #4:

For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

*/

arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;


/* PRACTICE PROBLEM #5:

Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Compute and display the total age of the male members of the family.

*/

// ALGORITHM
//  LOOP over object
//    IF the gender property value is 'male', THEN  access the age property value of each object
//                                                  and add it to a counter variable
//  return the value

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sumMaleAges = Object.entries(munsters).reduce((sum, person) => {
  if (person[1]['gender'] === 'male') {
    return sum + person[1]['age'];
  }
  return sum;
}, 0);


/* PRACTICE PROBLEM #6:

One of the most frequently used real-world string operations is that of "string substitution,"
where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Each output line should follow this pattern:

(Name) is a (age)-year-old (male or female).

*/

// for (const person of Object.entries(munsters)) {
//   console.log(`${person[0]} is a ${person[1]['age']}-year-old ${person[1]['gender']}.`);
// }


/* PRACTICE PROBLEM #7:

Given the following code, what will the final values of a and b be? Try to answer without running
the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

*/

let a = 2;
let b = [3, 8];


/* PRACTICE PROBLEM #8:

Using the forEach method, write some code to output all vowels from the strings in the arrays.
Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Object.values(obj).forEach((array) => {
//   return array.forEach(word => {
//     return word.split('').forEach(char => {
//       if ('aeiou'.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });


/* PRACTICE PROBLEM #9:

Given the following data structure, return a new array with the same structure, but with the values
in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

*/

arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arrSorted = arr.map((subArray) => {
  if (subArray.every((element) => typeof (element) === 'string')) {
    return subArray.slice().sort();
  }
  return subArray.slice().sort((a, b) => a - b);
});


/* PRACTICE PROBLEM 10:

Perform the same transformation of sorting the subarrays we did in the previous exercise with one
difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

*/

arrSorted = arr.map((subArray) => {
  if (subArray.every((element) => typeof (element) === 'string')) {
    return subArray.slice().sort().reverse();
  }
  return subArray.slice().sort((a, b) => b - a);
});



/* PRACTICE PROBLEM #11:

Given the following data structure, use the map method to return a new array identical in structure
to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

*/

arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


arrPlusOne = arr.map((obj) => {
  let newObj = {};

  Object.keys(obj).forEach(prop => {
    newObj[prop] = obj[prop] + 1;
  });

  return newObj;
});



/* PRACTICE PROBLEM #12:

Given the following data structure, use a combination of methods, including filter, to return a
new array identical in structure to the original, but containing only the numbers that are multiples
of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

*/

arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arrFiltered = arr.map((subArray) => {
  return subArray.filter((num) => num % 3 === 0);
});



/* PRACTICE PROBLEM #13:

Given the following data structure, sort the array so that the sub-arrays are ordered based on the
sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

*/

// ALGORITHM:
//  INPUT: 2D Array
//  OUTPUT: 2D Array (same array?)

//  CREATE a sum variable
//  CREATE an empty object
//  LOOP through outer array
//    LOOP thorugh sub-array
//      IF element in sub-array is odd, THEN add it to the sum variable
//    ADD the entire sub-array as a key with the sum as the value to the empty object
//  

arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// obj = {};
let arrSortedOdds = arr.map((subArray) => {
  return subArray.reduce((sumOdds, num) => {
    if (num % 2 === 1) {
      return sumOdds + num;
    }
    return sumOdds;
  }, 0);

});

// console.log(arrSortedOdds)
// let test = arr.sort((a, b) => {
//   let sumA = a.reduce((sumOdds, num) => {
//     if (num % 2 === 1) {
//       return sumOdds + num;
//     }
//     return sumOdds;
//   }, 0);

//   let sumB = b.reduce((sumOdds, num) => {
//     if (num % 2 === 1) {
//       return sumOdds + num;
//     }
//     return sumOdds;
//   }, 0);

//   return sumA - sumB;
// });

let test = arr.sort((a, b) => {
  let sumOddsA = a.filter((num) => num % 2 === 1).reduce((sumOdds, num) => sumOdds + num, 0);
  let sumOddsB = b.filter((num) => num % 2 === 1).reduce((sumOdds, num) => sumOdds + num, 0);

  return sumOddsA - sumOddsB;
});


/* PRACTICE PROBLEM #14:

Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables.
The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

The return value should look like this:

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

*/

// PROBLEM
//  INPUT: 2D object
//  OUTPUT: Array
//  EXPLICIT REQUIREMENTS:
//    - Output should contain the `colors` of the fruits and the `sizes` of the vegetbales
//      - `colors` need to have the first letter of each color capitalized
//      - `sizes` need to be all caps
//  IMPLICIT REQUIREMENTS:
//    - Input object property values are objects with 3 of their own properties:
//      - type (string)
//        - Only 2 types:
//          - 'fruit'
//          - 'vegetable'
//      - colors (array)
//        - colors are stored as strings in an array with minimum one color/string
//      - size (string)

// EXAMPLES/TEST CASES:
//  - [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//  NOTES:
//    - No sorting needed. Inserted into return array in the order they come in the input object

// DATA STRUCTURE
//  - Array

// ALGORITHM
//  DECLARE an empty variable to hold the `colors` array from `fruit` types
//  LOOP through outer obj
//    ACCESS nested obj by outer obj key // obj[grape] => { type: 'fruit', colors: ['red', 'green'], size: 'small' }
//    IF nested object's type is 'fruit', THEN SET the value of the `colors` property to the empty variable // obj[grape][colors] => ['red', 'green'] 
//    ELSE, ACCESS the size property and return its value in all caps
//  LOOP through the temporary array variable
//    SET the first letter of each color in the array to its capital value
//  RETURN the modified array variable

obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let fruitVegData = Object.values(obj).map((foodInfo) => {
  if (foodInfo['type'] === 'fruit') {
    return foodInfo['colors'].map((color) => color[0].toUpperCase() + color.slice(1));
  } else {
    return foodInfo['size'].toUpperCase();
  }
});



/* PRACTICE PROBLEM #15:

Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

*/

// PROBLEM
//  INPUT: Array of objects
//  OUTPUT: Array
//  EXPLICIT REQUIREMENTS:
//    - RETURN an array in the same format, but with only the objects where ALL the numbers in that object are even
//  IMPLCIT REQUIREMENTS:
//    - Objects contain at least 1 property
//    - Objects property value are all arrays with at least 1 number
//      - All arrays contain only numbers (homogeneous)

// NO TEST CASES

// DATA STRUCTURE:
//  - Array

// ALGORITHM:
//  LOOP through the input array
//    LOOP through the object's properties and ACCESS each array
//      IF ALL the numbers of ALL the properties in that object are even, THEN return that object


arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let allEvenObjects = arr.filter((obj) => {
  for (const prop in obj) {
    if (!obj[prop].every((num) => num % 2 === 0)) {
      return false;
    }
  }

  return obj;
});


// SOLUTION:

// let takeTwo = arr.filter((obj) => {
//   return Object.values(obj).every((subArray) => {
//     return subArray.every((num) => num % 2 === 0);
//   });
// });


/* PRACTICE PROBLEM #16:

Given the following data structure, write some code that defines an object where the key is the first
item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

*/

// PROBLEM
//  INPUT: Multi-dimensional array
//  OUTPUT: Object
//  EXPLICIT REQUIREMENTS:
//    - Create and return an object where each key is the first value in each subarray and the value
//      is the second value
//  NOTES:
//    - At least 2 elements in each subarray
//    - all proposed 'keys' are strings
//    - Proposed 'values' appear to be anything: number, string, object, array


// EXAMPLES/TEST CASES:

// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object:

// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


// DATA STRUCTURE:
//  - Object

// ALGORITHM:
//  DECLARE an empty object to hold key/value pairs
//  LOOP through input array
//    ADD key/value pair to empty object
//      'key' is always the first element in each subarray
//      'value' is always the second element in each subarray
//  RETURN object

// CODE
//  LOOP -> forEach()? reduce()?

arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let arrKeyValues = arr.reduce((obj, subArray) => {
  let key = subArray[0];
  let value = subArray[1];
  obj[key] = value;

  return obj;
}, {});



/* PRACTICE PROBLEM #17:

A UUID is a type of identifier often used to uniquely identify items, even when some of those items
were created on a different server or by a different application. That is, without any synchronization,
two or more computer systems can create new items and label them with a UUID with no significant risk
of stepping on each other's toes. It accomplishes this feat through massive randomization. The number
of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict
is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a
string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern,
e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.

*/

// PROBLEM:
//  INPUT: NONE
//  OUTPUT: UUID string
//  EXPLICIT REQUIREMENTS:
//    - UUID is 32 hexadecimal characters long (36 with '-' characters separating sections)
//      - Characters can be numbers (0-9) or letters (a-f)
//        - 'a' represents the number 11, 'b': 12, 'c': 13, 'd': 14, 'e': 15, 'f': 16
//    - Broken up into 5 sections
//      - 8-4-4-4-12 character pattern
//    - Characters are randomly generated

// EXAMPLES/TEST CASES:
//  OUTPUT: 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

// DATA STRUCTURE:
//  - Array? String?

// ALGORITHM:
//  CREATE an object with characters representing all hexadecimal values
//  GENERATE a random value between 0 and 16
//  GET the hexadecimal value from created object


let hexValues = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f'
};

function getHexadecimalCharacter() {
  let randomNum = Math.floor(Math.random() * 16);

  return randomNum < 10 ? randomNum : hexValues[randomNum];
}

function getUUID() {
  let endSectionIndexes = [8, 13, 18, 23];
  let UUID = '';

  while (UUID.length < 36) {
    if (endSectionIndexes.includes(UUID.length)) {
      UUID += '-';
      continue;
    }
    UUID += getHexadecimalCharacter();
  }

  return UUID;
}

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }

    array.shift();

  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);

