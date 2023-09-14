function runningTotal (array) {
  let sum = 0;

  let newArr = array.map((element) => {
    sum += element;
    return sum;
  });
  return newArr;
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

/*

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

P: Understanding The Problem
Create a function that takes an array / array of numbers.
The function should return a new array but each element should be the current total if adding the number prior. The returned array will always have the same number of elements as the original.

Input: Array
Output: Array (with running sum)
Rules:
  Explicit:
  - create function
  - receive argument array
  - return array
  - returned elements should be running sum of previous int elements

  Implicit:
  - array may be empty, returns empty array;

Questions:
- Should the same array be returned mutated or a new array?


E: Examples and Test Cases

Input: [2, 5, 13]
Output: [2, 7, 20]


index: 0
current element: 2
current total: 2
returnedArray: [2]

index: 1
current element: 5
current total: 2 + 5 = 7
returnedArray: [2, 7]

index: 2
current element: 20
current total: 7 + 20 = 27
returnedArray: [2, 7, 27]

Mental Model:
Set function, receive argument.
If array length is 0 return array.
iterate over array elements.
push currentElement + previous element to new array
loop finishes, return pushed array


D: Data Structures
Array: I will utilize an array data structure for each of collection of elements and iteration.


A: Algorithm:
- start
- set function
- receive argument array
- set guard clause
- set sum = 0
- loop over arrayElements
  - set arrayElement to be sum + elementValue
- return array;
- end


C: Code With Intent

*/

/*

Description:

On `line 10` a `console.log` method is invoked which passes the return value from invoking the function `runningTotal` to output to the console.

The `runningTotal` function invocation passes an array as an argument.

The function declaration for the function is on `line 1` of the code. The value of the argument passed is passed by reference since it is an array object and the value is assigned to the local paramter variable `array`.

Within the body of the function on line 2 a new variable is declared and initialized to the value `0`. 

On `line 4` the `.map()` method is invoked on the `array` object. The method is a non-destructive method which does not mutates the values within the calling array. The method takes a callback function as an argument which iterates and operates on each element in the calling array (typically performing trasnformation). The method takes an argument (`element`) that assumes the value of the current element within the calling array being iterated on. The `.map()` method returns a new array of which the value will be assigned to the variable `newArr`.

On `line 5` the value of the variable `sum` is reassigned using the additional assignment operator to be its current value + the value of the current element. The value of sum is then returned to the callback function and positioned as an element within the array that will be returned by the method after iteration completes. The value of sum is updated with each iteration to increase by the current value of `sum` + the next element being iterated on. 

On `line 9` the array returned by the `.map()` method is returned to the function caller on `line 10` and it is this new array value that gets output to the console thereby displaying an array with elements that act as a running total to the argument array elements.

*/