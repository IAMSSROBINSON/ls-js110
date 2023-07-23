// this solution does not assume both arrays have the same length
function union (array1, array2) {
  let finalUnion = [];

  for (let element = 0; element < array1.length; element++) {
    finalUnion.push(array1[element]);
  }

  for (let element = 0; element < array2.length; element++) {
    if (!finalUnion.includes(array2[element])) {
      finalUnion.push(array2[element]);
    }
  }

  return finalUnion;
}

console.log(union([1, 3, 5], [3, 6, 9]));    
// [1, 3, 5, 6, 9]


// this solution assumes both arrays will always be the same length
// function union (array1, array2) {

//   let objFacilitator = {};
//   for (let element = 0; element < array1.length; element++) {
//     objFacilitator[array1[element]] = array1[element];
//     objFacilitator[array2[element]] = array2[element];
//   }

//   return arrayUnion = Object.values(objFacilitator);
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    

/*

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

P:
Clarification:
- Create a function
- that takes two arrays
- the function should return a new array
- containing containing the union of the values from the two array received
- the new array should have no duplicate values even if duplicates are present in the original arrays

input: 2 arrays
output: single array (of unique values from the 2 arrays)
rule:
  explicit: 
  - must return an array
  - returned array must combine the 2 original arrays
  - returned array must have no duplicate elements

  implicit:
  - array elements will be numbers but may vary in future tests
  - assume elements in both arrays are equal in amount / count

questions:
- should the solution work for an array of numbers only or any element
- are the original array allowed to be mutated
- should the returned array be a new array
- what if the original arrays are empty

E:
[1, 3, 5], [3, 6, 9]  //  [1, 3, 5, 6, 9]

1, 3, 5
3, 6, 9

3 is a duplicate so only one instance is copied to the new array
result: 1, 3, 5, 6, 9

mental model:
- object properties must be unique. 
- if each array element is added to an object as a property then any replicas will be ignored. 
- the objects property value should be set to the element value since the properties are strings and the values will be allowed to be numbers and it is an array of numbers that we will return
- this solution should work for numbers as object properties and also strings and array elements.

D:
I will use both an object data structure for adding array elements as unique object properties where the label name matters and I will use the array data structure to return the final value: an array with unique elements. 

A:
set a function
received the 2 arrays
set an empty object
loop over both arrays and set each element to the objects key / property name: set the value to the element value.
set a variable finalArray
coerce the objects properties to an array 
return the array

C: 
*/