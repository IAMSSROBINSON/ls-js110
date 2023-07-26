function sequence (int) {
  let arrayContainer = [];
  for (let count = 1; count <= int; count++) {
    arrayContainer.push(count)
  }
  return arrayContainer;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

/*

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

P:
create a function that receives a number.
The function should return an array.
The array should contain all numbers from 1 to the argument number(including). 
The array should be sorted from lowest to highest number before being returned.

*/