function sumOfSums (arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers.slice(0, i + 1).reduce((acc, ele) => acc + ele);
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number. 

Input: Array(of numbers)
Output: Number(sum of each sub array)

E: 
Mental Model:
Receive array of numbers.
Create all potential subarrays.
Loop over subarrays and total all element values for sum.
Return sum.

A: 
- start
- set function
- receive argument(array of numbers)
- set sum = 0
- loop for length of array
  - sum += array.slice(0,i)
- return sum 
- end


*/