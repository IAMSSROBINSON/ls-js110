// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

// Examples:
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

/*

PEDAC

P: 
Clarification of problem statement:
Ask the user for 6 numbers 
If the 6th number is among the first 5 numbers
  - log confirmation message
else 
  - log contradiction message

INPUT: int (6 user generated numbers)
OUTPUT: string (message)
RULES:
  EXPLICIT:
  - get 6 numbers from the user
  - match the 6th number to the first 5
    - found: print found
    - no found: print not found
  
  IMPLICIT:
  - the user will only enter positive integers

E:
See examples and test cases above

D:
Because an order of numbers is of higher importance than labelling the number inputs an array data structure collection will be utilized.

A:
- install readline-sync
- require into the program
- loop and push user input values to empty array
- make a copy of the array
  - extract first 5 values
- set a variable for the 6th number and assign
- check for inclusion of 6th number in extracted array
- output corresponding string depending on result

C: 
*/

const readline = require('readline-sync');

const messageValues = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
const iterations = 6;
let counter = 0;
let userValues = [];

while (counter < iterations) {
  console.log(`Enter the ${messageValues[counter]} number:`);
  let number = +readline.question();
  userValues.push(number);
  counter++;
}

let valuesOneToFive = [...userValues].slice(0, 5);
let lastValue = userValues[userValues.length - 1];

if (valuesOneToFive.includes(lastValue)) {
  console.log(`The number ${lastValue} appears in ${valuesOneToFive}.`);
} else {
  console.log(`The number ${lastValue} does not appear in ${valuesOneToFive}.`);
}

