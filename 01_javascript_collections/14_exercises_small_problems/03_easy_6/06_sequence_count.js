function sequence (count, startingNumber) {
  let arr = [];

  if (count === 0) {
    return arr;
  }

  for (let index = 1; index <= count; index++) {
    arr.push(startingNumber * index);
  }

  return arr;
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

/*

Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

P: Understanding The Problem
Clarification:
Create a function that receives two number arguments.
The first number is a count (= number of elements the array should have)
The second numbers is the starting number of a sequence.
The function should create a sequence of numbers starting at the 2nd number provided.
 - Each element value should be multiplied by the second number argument and pushed to a new array. 
 The array should be returned by the function.

 Input: numberOfElements(int), StartingCount(int)
 Output: array of element * startingCount(int)
 Rules: 
  Explicit:
  - must create a function
  - must return an array
  - array must contain elementValue * starting count 
  - array must contain same amount of numbers at first argument 
  - count will always be >= 0
  - if the count is 0 return empty array []

  Implicit:
  - n/a

Questions:
- n/a

E: Examples and Test Cases

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Mental Model:
sequence(4, -7);         // [-7, -14, -21, -28]
loop from 1 to <= count 
let  initialElement = secondArgument(-7)
push initialElement * index
index1 => -7 * 1 = -7 
index => -7 * 2 = -14
ect..

D: Data Structure
Array: I will use an array since the solution should require pushing of elements to an empty array and elements labels are not of any concern.

A: Algorithm
- start
- set function 
- receive two arguments 
- set empty array 
- if count === 0 return array 
- loop from 1(index) <= count(1st argument)
- push starting number * index
  - increase index: +1 on each iteration of loop
- return array 
- end

C: Code With Intent

*/