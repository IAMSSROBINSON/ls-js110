function stringToSignedInteger (stringOfDigits) {
  if (stringOfDigits === "0") {
    return 0;
  }

  let number = 0;

  if (hasSign(stringOfDigits)) {
    number = stringToInt(stringOfDigits.split("").slice(1).join(''));
    if (plusOrMinus(stringOfDigits) === 1) {
      return number;
    } else {
      return -number;
    }
  } else return stringToInt(stringOfDigits);
}

function plusOrMinus (stringOfDigits) {
  return Math.sign(stringOfDigits);
}

function stringToInt (stringOfDigits) {
  let number = 0;

  for (let idx = 0; idx < stringOfDigits.length; idx++) {
    let currentChar = stringOfDigits[idx];
    let digit = currentChar.charCodeAt(0) - "0".charCodeAt(0);
    number = (number * 10) + digit;
  }
  return number;
}

function hasSign (stringOfDigits) {
  return stringOfDigits[0].charCodeAt(0) < "0".charCodeAt(0) || stringOfDigits[0] > "9".charCodeAt(0);
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
The function should convert the stringOfDigits to a number without using methods.
The string may have a leading + or - symbol.

Input: String(ofDigits)
Output: Number(ofDigits)
Rules:
  Explicit:
  - create a function
  - receive argument stringOfDigits
  - convert stringOfDigits to number
  - stringOfDigits may contain leading + or -
    - if +
      - return positive number
    - if -
      - return negative number
    - if no sign
      - return positive number
  - stringOfDigits will always be valid numberDigits

  Implicit:
  - account for all scenarios

Questions:
- n/a


E: Examples and Test Cases
Input: "-570"
Output: -570

Mental Model:
Input received: string: "-570"
input[0] has a sign
work out which sign: Math.sign(), positive(1), negative(-1), 0(0)
  - set up guard clause for stringOfDigits: returning 0 for "0"
convert input minus sign to a number
  input minus sign: string: "570"
  convert to number:
    loop over stringOfDigits
    firstDigit: "5".charCodeAt(0) - "0".charCodeAt(0); => converts to number: 5
    number(0) = number * 10 + firstDigit;
    ... number: 570
return prependSign -number
return -570


D: Data Structure
Variable memory allocation: I will utilize variable memory allocation to assign values and reassign values as required.


A: Algorithm
- start
- set function
- receive argument stringOfDigits
- set guard clause for "0" return 0;
- determine if sign is present:
- set number = 0;
  - if the firstChar is < "0".charCodeAt(0) OR > "9".charCodeAt(0) => then it means the argument has a sign
    -  number = convert the stringOfDigits minus the sign to a number via a function 
      - if Math.sign(stringOfDigits) === -1
        - return -number (when number is returned)
      - if Math.sign(stringOfDigits) === 1
        - return number when number is returned
  - if the firstChar is not less than or greater then there is no sign
    -  number = return convert the stringOfDigits to a number
- end


C: Code With Intent
*/