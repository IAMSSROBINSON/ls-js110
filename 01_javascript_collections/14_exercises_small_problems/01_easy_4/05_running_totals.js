function runningTotal (arrayOfNumbers) {
  let newArray = [];
  let count = 0;
  let total = 0;

  while (count < arrayOfNumbers.length) {
    total += arrayOfNumbers[count];
    newArray.push(total);
    count++;
  }

  return newArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

/*

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

PEDAC:

input: arrayOfNumbers
output: array (same number of elements with each elem value as the sum of the elem before it + itself)

*/