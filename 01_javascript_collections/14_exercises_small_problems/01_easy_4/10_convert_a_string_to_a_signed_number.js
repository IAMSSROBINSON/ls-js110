function stringToSignedInteger (stringOfDigits) {

  if (stringOfDigits === '0') {
    return 0;
  }

  return validateSign(stringOfDigits);
}

function validateSign (stringOfDigits) {
  if (stringOfDigits[0].charCodeAt(0) < 48 ||
  stringOfDigits[0].charCodeAt(0) > 57) {
    let number = stringToNumber(stringOfDigits.slice(1));

    if (Math.sign(stringOfDigits) === 1) {
      return number;
    } else return -number;
  } else return stringToNumber(stringOfDigits);
}

function stringToNumber (stringOfDigits) {
  let number = 0;

  for (let idx = 0; idx < stringOfDigits.length; idx++) {
    let charDigit = stringOfDigits[idx];
    let digit = charDigit.charCodeAt(0) - '0'.charCodeAt(0);
    number = (number * 10) + digit;
  }
  return number;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

/*

In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.


P: Understanding The Problem
Create a function that takes a string of digits.
The function should return the same stringDigits converted to number.
If the string has a + prepending it then it is a positive number and should be returned as such.
If the string has a - prepending it then it is a negative number and should be returned as such.
If there is no sign prepending then return a positive number.


Input: String
Output: Number(with potential sign)
Rules:
  Explicit:
  - create a function
  - receive stringOfDigits
  - convert digits to number equivalents
  - if + sign prepending
    - return positive number
  - if - sign prepending
    - return negative number
  - if no sign return positive number

  Implicit:
  - the will be 3 examples utilizing all use cases, +, - and no sign

Questions:
- n/a


E: Examples and Test cases
Input: "+100"
Output: 100

Send string to stringToNumberFunction: '+100'
Receive 100 back
Validate string[0] for sign
Return number

Mental Model:
Create the function. Receive the string.
Coerce each stringDigit to a number.
If string Math.sign(string) === 0 return 0;
If Math.sign(string) === 1 return number
If Math.sign(string) === -1 return -number


D: Data Structure
I will utilize variable storage by assigning values to variable to use throughout the program.


A: Algorithm
- start
- set function
- receive argumentStringOfDigits
- check for sign on the argumentStringOfDigits
  - if the first char < charCode 48(0) or greater than 57(9)
    - if Math.sign(argumentStringOfDigits[0] === 1) then the number is positive so return theStringToNumber conversion and pass argumentStringOfDigits.slice(1)
    - else the number is negative so return -theStringToNumber conversion and pass argumentStringOfDigits.slice(1)
  - otherwise return the theStringToNumber conversion(since the argumentStringOfDigits did not have a sign prepending the digits
- end


C: Code With Intent

*/