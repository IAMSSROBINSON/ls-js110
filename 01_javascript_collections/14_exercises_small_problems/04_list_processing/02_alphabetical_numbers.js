function alphabeticNumberSort(arrayOfInts) {
  let arrayOfIntsCopy = [...arrayOfInts];
  let sortedInts = [];

  let [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
  ] = arrayOfIntsCopy;

  let objString = {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
  };

  let objStringKeys = Object.keys(objString);

  for (let index = 0; index < arrayOfIntsCopy.length; index++) {
    objString[objStringKeys[index]] = arrayOfIntsCopy[index];
  }

  objStringKeys.sort();
  
  for (let index = 0; index < arrayOfIntsCopy.length; index++) {
    sortedInts.push(objString[objStringKeys[index]]);
  }
  return sortedInts;
}

console.log(alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/*

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

P: Understanding The Problem
Create a function that takes an array of numbers between 0 and 19.
The function should sort and return the array of numbers based on their English spelling for each number.

Input: array (of numbers 0 to 19)
Output: array (new array of same numbers sorted by English spelling)
Rules:
  Explicit:
  - Create a function
  - Return a new array of same numbers sorted by spelling

  Implicit:
  - Each number only appears once 

Questions:
- should the return be the original array mutated or a new array?

E: Examples and Test Cases
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Sorted by unicode point of each character: ascending (low to high)
0 => zero
    z = 122
    e = 101
    r = 114
    o = 111

8 => eight
    e = 101
    i = 105
    g = 103
    h = 104
    t = 116

Mental Model:



D: Data Structure
- Object: 
I will utilize an object data structure to create a object that labels the int values with its string English spelling counterpart
- Then an array of the spellings can be created and sorted
Array:
- The values can be pushed to an empty array based on the spelling array sort position to retrieve an array of sorted numbers, which will be the final array returned

A: Algorithm
- start
- use array destructuring to create English spelling variable names of the numbers in the array
- Create an empty object
- fill the empty object with the variable names
- set a variable to the Object.keys(ofTheObj) to create an array of strings out of the object variable names
- Iterate over the array of keys for the length of the argument array and assign the object[stringName[index]] to the = argument[index(intValue)] to create an object with the English spelling as the key and the value as an int
- Invoke the .sort() method on the ObjectkeysVariable which contains an array of string spellings to sort it lexicographically so that each character in the string is compared via its uni code point value to sort the strings
- Iterate over the sorted strings array and match the string to the key in the object and push the value to a new array to get an array of the correctly sorted ints
- return that array 
- end

C: Code With Intent


The Array.prototype.sort method can also take a function expression as an argument. If you didn't use one the first time, try refactoring the solution using a function expression.

*/
