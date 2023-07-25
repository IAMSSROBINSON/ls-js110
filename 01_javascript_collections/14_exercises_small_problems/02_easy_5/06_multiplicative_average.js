function multiplicativeAverage (arrayOfInts) {
  let finalValue = arrayOfInts.reduce((acc, ele)=>{
    return acc * ele;
  })
  return String((finalValue / arrayOfInts.length).toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/*

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

P: Understanding The Problem
Clarification:
Create a function that receives an array of numbers.
Within the function, multiply each number by the next.
Divide the result by the amount of elements in the array.
Store the result to three decimal places.
Coerce the result to a string before returning from the function.

Input: array (of int data-type)
Output: string (with conversions)
Rules:
  Explicit:
  - multiply each int by the next int in sequence
  - divide the result of multiplication by n(numberOfElementsInArray)
  - store to three decimal places
  - convert to a string 

  Implicit:
  - there will be no ghost values
  - all values will be own properties
  - use methods for coercion

  Questions:
  - what is meant exactly by 'multiplies all of the integers together'? 

E: Examples and Test Cases
multiplicativeAverage([3, 5]);                   // "7.500"

Mental Model:
n/a

D: Data Structures
I will be making use of variable memory allocation for simple storage.

A: Algorithms
- start
- set a new function
- receive the array of ints
- reduce the array to a single value multiplying each number by the next
- divide the result by the number by the length of the original array
- toFixed(3) the value
- String(theFinalValue)
- return theFinalValue
- end

C: Code With Intent

*/