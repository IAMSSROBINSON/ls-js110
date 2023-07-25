function average (arrayOfNumbers) {
  return Math.floor((arrayOfNumbers.reduce((acc, ele, idx, arr)=>{
    return acc + ele;
  })) / arrayOfNumbers.length);
}


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

/*

Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

- reduce the number to a single number that adds them all together
- divide this number by the length of the array
- Math.floor() the result and return

*/