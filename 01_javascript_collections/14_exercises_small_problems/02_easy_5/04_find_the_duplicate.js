function findDup (array) {
  let obj = {};
  let currentValue;

  for (let index = 0; index < array.length; index++) {
    currentValue = array[index];

      for (let i = index+1; i< array.length; i++) {
        if (currentValue === array[i]){
          return array[i];
        }
      }
  }
  
  }

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73


/*
Find the Duplicate
Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

P:
Clarification:
Create a function that takes an array. 
All elements appear once except for 1 element that will appear twice.
Return the element that appears twice.

input: array
output: number(element)
rules: 
  explicit:
  - the returned element must have appeared exactly twice
  - every other value is stated to appear exactly once

  implicit:
  - the received array will contain numbers only

questions: 
n/a

E: 
console.log(findDup([1, 5, 3, 1])); // 1

D:
Using an array and a nested loop with selection would allow for easily iterating through elements of the given array

A:
- create a function 
- receive the array
- set a current value variable
- define a top level loop
- set the currentValueVariable to the first element in the array and iterate
- define a nested loop and set the counter to +1 of the outer loop so that the next array element can be evaluated against the currentValueVariable and iterate over each additional element
- if any elements have strict equality then return that element
- if not then the loop will iterate through each element and when it gets to the end the currentValueVariable will be assigned to the next element value and the inner loop will iterate over the remaining values again and compare
- if not matches are found then undefined will be implicitly returned from the function

C:

*/