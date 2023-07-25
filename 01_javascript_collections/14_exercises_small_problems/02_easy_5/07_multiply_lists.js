function multiplyList (array1, array2) {
  let productsArray = [];

  for (let element in array1) {
  productsArray.push(array1[element] * array2[element]);
  }
  
  return productsArray;
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

/*

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

P: Understanding The Problem
Clarification: 
Create a function that accepts two arrays. The arrays contain numbers.
The function should look at the index position of each element in both arrays and return a new array with the product of the elements at the same index position. 

Input: 2 arrays (of ints)
Output: single array (with products of elements that share the same index position)
Rules: 
  Explicit:
  - must create a function
  - must return a new array
  - arrays contain same number of elements
  - elements are all integers

  Implicit:
  - all elements are own values

Questions:
- are the argument arrays allowed to be mutated

E: Examples and Test Cases
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

Index:
0,    1,    2
Input
[3,   5,    7]
[9,   10,   11]
Product:
27,   50,   77

Mental Model:
Create an empty array.
Iterate of the length of the first array since they are the same length or create a variable and assign to the .length of the first array and use the return as a counter.
Push the multiplication of the element at the current index from array1 by the same element at index position from array2 to the empty array.
When all elements have been iterated over return the empty(now populated) array.

D: Data Structure
Array: I will use an empty array to store the final values since labelling of values is not of importance in this case.

A: Algorithm
- start
- set a function 
- receive both arrays
- set an empty array
- loop over the first array for the length of the array
- push the product of the element at array1 * array2 to the empty array
  - until all elements have been iterated
return the empty(now populated array)
- end

C: Code with Intent

*/