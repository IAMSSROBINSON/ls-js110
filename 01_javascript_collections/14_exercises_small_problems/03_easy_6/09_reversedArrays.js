function reverse (array) {
  let elementTempStorage = [];
  for (let element = array.length; element > 0; element--) {
    elementTempStorage.push(array[element - 1]);
  }
  return reverseElementsInPlace(array, elementTempStorage);
}

function reverseElementsInPlace (array, elementTempStorage) {
  for (let element = 0; element < array.length; element++) {
    array[element] = elementTempStorage[element];
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

/*

Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().

P: Understanding The Problem
Clarification:
Create a function that receives an array.
The function should reverse the order of the elements in the array by mutating the array elements where they are allocated space in computer memory (thus mutating the original value of the array at its address in memory).
Return the same mutated array.

Input: array 
Output: same array(mutated and reversed)
Rules:
  Explicit: 
  - reverse the array elements in place 
  - return the same array but mutated
  - do not use the reverse() method

  Implicit:
  - empty array still returns a reversed empty array 
  - numbers or strings should still be reversed
  - array only contains simple values on the surface level dimension
  - the array may contain 0, 1 or more elements

Questions:
- n/a

E: Examples and Test Cases
["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

Char:     Index before:     Index after
a         0                 4
b         1                 3
c         2                 2
d         3                 1
e         4                 0

Mental Model:
The array may contain 0, 1 or more elements.
The reverse() method is destructive.
Only the order of the array itself is reversed NOT the elements themselves e.g. a strings character order will not be reversed only its position with the array will be reversed if any other elements are present.
If the array is iterated over backwards then each value can be pushed to an empty array thereby creating the reversed order. 
The original array can then be iterated over and the values within the array can be reassigned in place to the values pushed to the empty array.

D: Data Structure
Array: I will use arrays to make used of their simple storing capacity and ease of iteration over elements.

A: Algorithm
- start
- set a function 
- receive the array 
- set empty array 
- loop over array backwards, let count = array.length, count > 0 count--
- push each element to empty array 
- loop over original array 
- use array element referencing to access the array element and reassign to the element value inside the empty array 
- return original array 
- end

C: Code With Intent

*/