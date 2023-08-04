function multiplyAllPairs (array1, array2) {
  let sortArrayValues = [];
  
  for (let index1 = 0; index1 < array1.length; index1++) {
    const currentElement1 = array1[index1];

    for (let index = 0; index < array2.length; index++) {
      const element = array2[index];
      
      sortArrayValues.push(currentElement1 * element)
    }
  }
  return sortArrayValues.sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

P: Understand The Problem


Input: array (two arrays: each a list of numbers)
Output: array (new array containing product of all combinations of number pairs that exist between the two arrays), sorted in ascending order
Rules:
  Explicit:
  - create function
  - return sorted new array

  Implicit:
  - the returned array can have the same product more than once 

Questions:
- n/a 

E: Examples and Test Cases
([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

2x [4] => 8
2x [3] => 6
2x [1] => 2
2x [2] => 4

4x [4] => 16
4x [3] => 12
4x [1] => 4
4x [2] => 8

Sorted: [2, 4, 4, 6, 8, 8, 12, 16]

Mental Model:
- loop over first array
  - loop over second array
    - multiply currentElement from first array by the currentElement in the second and push to a new array
  - sort that array
- return that array 

D: Data Structure
Array: I will utilize an array to capture the product values.

A: Algorithm
- start
- set a new function 
- receive the array arguments
- loop over first array
  - loop over second array
    - multiply currentElement from first array by the currentElement in the second and push to a new array
  - sort that array in ascending order(a - b)
- return that array 
- end

C: Code With Intent

*/