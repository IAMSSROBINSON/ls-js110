function reverseNumber (int) {
  let intToString = String(int);
  return Number(intToString.split('').reverse().join(''));
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1

/*

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

P: Understand The Problem
Clarification:
Create a function that received a positive number.
The function should reverse the order of the numbers as they are presented and return it.

Input: number
Output: number(reversed)
Rules: 
  Explicit:
  - reverse order of the numbers presented 
  - If zeros lead when reversed - remove them 

  Implicit:
  - single number returns itself
  - any length of numbers should work

Questions:
- n/a

E: Examples and Test Cases
- 12345    // 54321

Mental Model: 
First element becomes the last and so on.

D: Data Structure
- Array: Since labelling does not matter and element iteration may be required I will use an array data structure.

A: Algorithm
- start
- set the function 
- receive the number
- coerce the number to a String()
- split the string into characters 
- .reverse() the string
- join the string
- coerce the string back to a Number() - this should get rid of any leading 0's
- return the number
- end

C: Code With Intent

*/