function integerToString (number) {
  if (number === 0) {
    return '0';
  }

  let finalString = '';
  while (number > 0) {
    let digit = number % 10;
    finalString = digit + finalString;
    number = Math.floor(number / 10);
  }
  return finalString;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

/*

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.


P: Understanding The Problem
Create a function that takes a number.
The function should convert the number into a stringOfDigits.
Method should not be use but instead manipulate the number.

Input: Number(positive number)
Output: String(representation of the numbers)
Rules:
  Explicit:
  - Create a function
  - Receive the number argument
  - Convert the number to a stringOfDigits
  - Do not use methods
  - Do manipulate the number

  Implicit:
  - number could be 0 returning '0'

Questions:
- n/a


E: Examples and Test Cases
Input: 1234567890
Output: "1234567890"

Mental Model:
% the number by 10 to get the last digit: 0
concatenate the digit to an empty string "" to  => 0 + '' = '0'
reassign the number to the Math.floor(number / 10) to round the number and remove the remainder
loop and repeat


D: Data Structure
I will utilize variable storage to assign and reassign values as required since no array or object structures suit the requirements.


A: Algorithm
- start
- set function
- receive number argument
- set guard clause for 0 to return '0';
- set finalString variable = ''
- loop
  - while the number > 0
  - set digit variable: number % 10;
  - reassign finalString = digit + finalString so that the char appear from the outside inward
  - reassign number to be Math.floor(number / 10)
- return the finalString
- end


C: Code With Intent

*/