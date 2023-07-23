function halvsies (array) {

  let first = array.slice(0, Math.ceil(array.length / 2));
  let second = array.slice(Math.ceil(array.length / 2)) 

  return [first, second];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/*

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

P:
Clarification:
- create a function that takes an array as an argument.
- if the length of the array is odd then split the array in half and add the next element and add this to a new array
- if the length of the array is even then split the elements equally and add each half to a new array 
- return each new array within an outer array
- the structure returned should always be an outer array with two nested arrays, whether their are elements present of not.

input: array
output: array (with 2 nested arrays as elements)
rules: 
  explicit: 
  - return an outer array with 2 nested arrays as elements
  - if array is odd in length 
    - split the contents +1 extra array and push to 1stNewArray
  - if the array is even
    - split the contents and push to 2nd nested array

  implicit: 
  - an empty original array still returns an outer array with 2 nested arrays
  - a array with a single element still returns an outer array with 2 nested arrays
  - in this example only simple / primitive elements are used as array elements

questions:
- does it matter if the original array is mutated during operations


E:
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]


mental model:
length of array is 5, 5 is odd
5 / 2 = 2.5
2.5 rounded up is 3
3 is the index position of the last element to copy to the 1st new array

D: 
I will uses arrays for the data structure since element labels play no role here.

A:
informal:
- receive the original array
FIRST NESTED ARRAY:
- split the length of the array and round the number up to get the index position of the last array element(non inclusive) to copy to first new nested array
SECOND NESTED ARRAY:
- use the same formula to calculate the second half only use it is for the first argument to .slice() which is then inclusive
- add the arrays to a new array as elements and return

C:

*/