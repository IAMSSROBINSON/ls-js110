function union (array1, array2) {
  let obj = {};
  let combined = [...array1, ...array2];
  combined.forEach((element) => {
    obj[element] = 0;
  });
  return Object.keys(obj);
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


/*

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

P:
Create a function that takes 2 arrays.
The function should

Input: 2 Arrays
Output: Array(combine both arguments)
Rules:
  Explicit:
  - no duplicates in return array

  Implicit
  - n/a

E: Examples and Test Cases
Input: [1, 3, 5], [3, 6, 9]
Output [1, 3, 5, 6, 9]

Duplicate elements removed: 3

Mental Model:
Combine arrays.
iterate over combination and add element as key : value 0
since the same key cannot be added twice it will eliminate duplicates
return object.key(combinationArray)


D: Data Structure
Object: I will utilize an object data structure to add keys and eliminate duplicates since keys cannot be duplicated.


A: Algorithm
- start
- set function
- receive arguments(array1, array2)
- set empty object variable
- combine arrays:
  - let combined = spread content of array [...array1, ...array2]
- combined.forEach
  - assign object[element] = 0;
- return Object.keys(object)
- end


C: Code With Intent

*/