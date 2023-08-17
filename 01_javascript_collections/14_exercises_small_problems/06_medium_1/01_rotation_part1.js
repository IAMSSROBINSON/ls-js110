function rotateArray (argument) {
  if (Array.isArray(argument) !== true) return undefined;

  if (argument.length === 0) return [];

  let emptyArray = [];
  for (let index = 0; index < argument.length; index++) {
    let currentElement = argument[index];
    emptyArray.push(currentElement);
  }
  let firstElement = emptyArray.shift();
  emptyArray.push(firstElement);
  return emptyArray;
}
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

/*

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

P: Understanding The Problem
Create a function that receives an array of int elements.
The function should:
  - return undefined if the argument is not an array
  - return an empty array if the argument is an empty array
  - not mutate the original array argument
  - take the first element of the array and place it at the end
    - return the array

Input: array
Output: array(new array with first element placed last)
Rules:
  Explicit:
  - Create a function
  - Receive array
  - return array with first element in last place
  - Do not mutate original array
  - if not an array return undefined
  - if empty array return empty array

  Implicit:
  - array elements can be heterogenous
  - elements can be objects and other arrays

Questions:
- n/a


E: Examples and Test cases
Original: [{ a: 2 }, [1, 2], 3]
Returns: [[1, 2], 3, { a: 2 }]

Mental Model:
Set up guard clauses.
Since we cannot mutate the original array we should copy the elements in place to a new array. It is best to do this with an iteration method instead of spread operator since we do no know how deep the element levels go.
Assign the first element to a new variable by Shifting the first element to remove from the copyArray.
push the returned element to the end of the array.
Return the array.


D: Data Structure
Array: I will utilize an array data structure since this is the structure that needs to be returned.


A: Algorithm
- start
- set function
- receive argument
- if (Array.isArray(argument) !== true)
  - return undefined
- if array.length = 0
  - return array
- set emptyArray
- define a loop for the length of the array argument
  - use selection and currentElement to assign the element in place to newVariable
  - push the currentElement to the emptyArray to copy elements
- when loop completes unshift the element at index position 0
- push it to the end of the array copy
- return the array copy
- end


C: Code With Intent

*/