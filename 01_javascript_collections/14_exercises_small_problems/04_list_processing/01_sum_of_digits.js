function sum(number) {
  let numberString = String(number);
  let arrayOfStringNumbers = numberString.split('');

  return arrayOfStringNumbers.reduce((acc, elem)=>{
  return Number(acc) + Number(elem);

  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45


/*

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

P: Understanding The Problem
Create a function that takes a positive number.
The function should return the sum of its digits (meaning the number can be multiple digits long).
Within the function use method calls to perform the sum but do not use regular looping mechanisms.

Input: number (multiple digits)
Output: number (sum of each digits added together)
Rules:
  Explicit: 
  - Create a function
  - Return the sum of all digits
  - Do not use regular looping mechanisms
  - Do use method calls

  Implicit:
  - Number passed will be more than a single digit

Question:
- What to do if the number 0 is passed as the only value?

E: Examples and Test Cases
(496);          // 19
4 + 9 + 6 = 19

Mental Model:
- Each number will need to be isolated so that it can be treated as an individual number to add to the other numbers.
- The number passed into the function can be coerced to a string. 
- The string can be string into an array of individual characters.
- Invoke the .reduce() method on the array of strings and coerce each character back to a number whilst adding it to the next number 
- The method will return the sum of all numbers and the function can return this value.

D: Data Structure
Array: I will utilize an array data structure for storing individual number elements to sum together.

A: Algorithm
- start
- set a new function 
- receive the argument number
- set numberString = String(number);
- set arrayOfStringNumbers = numberString.split('');
- return arrayOfStringNumbers.reduce((acc, elem)=>{
  return Number(acc) + Number(elem);
});
- end

C: Code With Intent

*/