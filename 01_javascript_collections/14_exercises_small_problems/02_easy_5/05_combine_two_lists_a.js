function interleave (array1, array2) {
  let combinedArrValues = [];
  for (let element = 0; element < array1.length; element++) {
    combinedArrValues.push(array1[element], array2[element]);
  }

  return combinedArrValues;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

P: Understanding The Problem
Clarification:
- Create a function 

input: two arrays
output: new single array (from both array arguments: each element in alternation)
rules:
  explicit: 
  - must return new array with both array argument elements in alternating sequence
  - both arrays contain elements (are not empty arrays)
  - both arrays have the same number of elements

  implicit:
  - the values in each individual array are of the same type 
  - the array arguments are not prototypes of another array (all elements are own properties)

questions: 
- does it matter if the original arrays are mutated?


E: Examples and Test Cases
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

array1[0]: 1
array2[0]: "a"

array1[1]: 2
array2[1]: "b"

array1[2]: 3
array2[2]: "c"

Mental Model:
The index positions of each element required to produce the desired alternating order sequence align for both arrays. If iterating through the array elements (which have the same length) then pushing each element of each array at the same index position - to a new array should produce the desired arrangement in sequence.

D: Data Structures
Array: I will use an empty array structure to capture the elements in sequence since this is a more direct approach to solving and since the labels of the elements are irrelevant.

A: Algorithm
- start
- set a function 
- receive the array arguments
- set an empty array
- loop through the first array since they have the same length properties
  - push the element at the current index from array1 to the empty array
  - push the element at the current index from array2 to the empty array
- return the empty(now populated array)
- end

C:


Further Exploration
Try to solve this problem using Array.prototype.forEach method.

Can you solve it using map or reduce?
*/