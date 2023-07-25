function digitList (number) {
  return String(number).split('').map(element => Number(element));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

/*

Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

P: Understanding The Problem
Clarification:
Create a function that accepts an int argument.
Isolate each digit and add it to an array as an element.
Return the array.

Input: int 
Output: array 
Rules:
  Explicit: 
  - create a function
  - split the digits
  - return an array with each digit as an element

  Implicit:
  - n/a

Questions:
- n/a 

E: Examples and Test Cases
console.log(digitList(12345));       // [1, 2, 3, 4, 5]

D: Data Structures 
Array: Since value labelling plays no role, an array data structure will be utilized to store elements and return as a value.

A: Algorithm
- start
- set a new function
- receive the argument
- coerce the number to a string so that it becomes a character array
- split the string into an array of characters to isolate them
- loop over each character and coerce back to a number
  - either push to an empty array
  - or map over the elements
- return the array with the individual numbers as elements
- end

C: Code with Intent

*/