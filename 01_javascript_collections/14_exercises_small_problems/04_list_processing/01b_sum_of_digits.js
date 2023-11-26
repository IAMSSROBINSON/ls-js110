function sum (number) {
  let sumTotal = 0;

  while (number > 0) {
    let digit = number % 10;
    sumTotal += digit;
    number = Math.floor(number / 10);
  }
  return sumTotal;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45


/*

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

Input: Number
Output: Number(sum of the digits in the number)

E: 

Mental Model:
Receive number
- let sum = 0
- while number > 0
- let digit = number % 10
sum += digit
- number = Math.floor(number / 10)
Return sum 

*/