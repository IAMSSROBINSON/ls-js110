let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/*

Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

input: array
output: array (with objects that only have even numbers as elements)

iterate over the array of objects
 inside each object
  iterate over more than 1 values array
    if every element of each array is even
      return the object to a new array

*/

function getEvenObjects (arr) {
 let evens = arr.filter(obj=>{
  return Object.values(obj).every(subArr =>{
    return subArr.every(num=> num % 2 === 0);
  })
 })

 return evens;
}

console.log(getEvenObjects(arr));