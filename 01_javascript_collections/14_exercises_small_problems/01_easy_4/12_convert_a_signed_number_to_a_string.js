function signedIntegerToString (number) {
  if (number === 0) {
    return '0';
  }
  let numberMinusSign = Math.abs(number);
  let stringOfDigits = numToString(numberMinusSign);
  let sign = validateSign(number);

  return sign + stringOfDigits;
}


function validateSign (number) {
  if (Math.sign(number) === 1) {
    return '+';
  } else return '-';
}

function numToString (number) {
  let string = '';

  while (number > 0) {
    let digit = number % 10;
    string = digit + string;
    number = Math.floor(number / 10);
  }
  return string;
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

/*

In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.


P: Understanding The Problem


Input: Number(positive, negative, +positiveWithSign, -negativeWithSign)
Output: String(representation of number with '+'Appended for positive number or '-'Appended for negative number)
Rules:
  Explicit:
  - create a function
  - receive the argumentNumber
  - if the argumentNumber is prepended with a sign then get the absolute value of the argumentNumber
  - coerce argumentNumberMinusTheSign to string without methods
  - use the originalArgumentNumberWithSign or otherwise to determine if the argumentNumber is positive or negative number
    return '+'  for positive number
    return '-' for negative number
  - append the signString to the stringOfNumber
  - return this final string value

  Implicit:
  - number 0 appends no sign and returns '0'

Questions:
- n/a


E: Examples and Test Cases
Input: 4321
Output: "+4321"

Mental Model:
Set function. Receive argument number.
Coerce numbers to character representations.
set up a validateSign function and pass the numberArgument
  return string '+' if the number is positive
  return string '-' if the number is negative
Append the returned sign to the string and return


D: Data Structure
I will utilize variable memory storage for assigning and reassigning value as required since no other data structure is appropriate for simple usage.


A: Algorithm
- start
- set function
- receive numberArgument
- set guard clause: if number === 0 return '0'
- get absolute value of numberArgument
- Coerce numberArgument to StringOfDigits with function
- if set validateSign(numberArgument):
  - Math.sign(number) === 1 return '+'
  - else return '-' (since we already performed a guard clause for 0)
- return: concatenate the returnedSignString to the stringOfDigits
- end

C: Code With Intent

*/