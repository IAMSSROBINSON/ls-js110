let readline = require('readline-sync');

(function comparingSixthInput () {
  let countUpperBound = 6;
  let arrayOfInputs = [];
  let stringCounts = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

  for (let idx = 0; idx < countUpperBound; idx++) {
    console.log(`Enter the ${stringCounts[idx]} number:`);
    let input = readline.question();

    arrayOfInputs.push(Number(input));
  }

  let sixthInput = arrayOfInputs[5];
  let firstFiveNumbersArr = arrayOfInputs.slice(0, arrayOfInputs.length - 1);
  if (firstFiveNumbersArr
    .some(element => element === sixthInput)) {
    console.log(`The number ${sixthInput} appears in ${firstFiveNumbersArr}.`);
  } else {
    console.log(`The number ${sixthInput} does not appear in ${firstFiveNumbersArr}.`);
  }
})();

/*

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Problem:
- ask the user to input a number six times
- if the last input (the sixth number) is present within the first five:
  - log: sixth number was entered within the first 5 numbers, else
  - log: sixth number was not entered within the first 5 numbers

Algorithm:
- start
- set arrayOfInputs = [];
- loop from idx 0 to 6; while idx < 6; idx++
  - prompt user for input
  - push input to arrayOfInputs
- loop has concluded
- set variable sixthInput = arrayOfInputs[arrayOfInputs.length - 1]
- new loop over arrayOfInputs, idx 0; idx < arrayOfInputs.length - 1; idx++
  - if sixthInput === arrayOfInputs[idx]
    - log: sixth number was entered within the first 5 numbers, else
    - log: sixth number was not entered within the first 5 numbers
- end

Questions:
- should the input be validated for its status as a number?

Concept definitions:

Array.prototype.includes()
- is an inbuilt JavaScript string and array method
- is called on the array object literal or on an instance thereof
- takes an argument to be matched to the contents of the array object
- returns if argument is matched to an array element, else returns false
- it does not tell you how many times the argument is matched

Array.prototype.some()
- is a built in JavaScript array method
- it is called on an array object literal or instance thereof
- it takes a callback function that is invoked on each element within the array
- the callback function takes an argument that acts as the current element within the array being iterated on
- it returns true if at least 1 instance of the argument returns a truthy value against the element being iterated on, otherwise it returns false
- it does not tell you how many times the argument is matched

*/