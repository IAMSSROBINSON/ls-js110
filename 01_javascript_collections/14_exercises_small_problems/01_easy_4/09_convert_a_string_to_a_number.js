function stringToInteger (string) {
  let returnValueNum = 0;

  for (let idx = 0; idx < string.length; idx++) {
    let digit = string.charCodeAt(idx) - '0'.charCodeAt(0);
    returnValueNum = (returnValueNum * 10) + digit;
  }
  return returnValueNum;
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


/*

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.


P: Understanding The Problem


Input: String(of digits)
Output: Number(the same string digits as numbers)
Rules:
  Explicit:
  - create a function
  - receive the string
  - don't worry too much about + or - symbols (although using conditional branching with Math.sign() could handle that)
  - do not worry about invalid characters
    - all characters will be numeric
  - do not use methods of conversion

  Implicit:
  - n/a

Questions:
- n/a


E: Examples and Test Cases\
Input: "4321"
Output: 4321

"4"
"4".charCodeAt(0) => 52 - '0'.charCodeAt(0) = 4
finalNumValue = finalNumValue * 10 + above
  0 * 10 = 0 + 4 => 4

"3"
"3".charCodeAt(0) => 51 - '0'.charCodeAt(0) = 3
finalNumValue = finalNumValue(4) * 10 = 4 + 3 => 43
..

Mental Model:
isolate the first digit by looping over the string for the length
turn the digit character into a number by subtracting '0'.charCodeAt(0) from the digit character code
set variable where the final number value will be stored initialize to 0
multiply the variable value by 10 + digitValue (as the iteration continues the value will increase to the required final value)
return the final number value


D: Data Structure
I will utilize variable storage for assignment and reassignment of the value of the final number to return whilst looping.


A: Algorithm
- start
- set function
- receive string argument
- set variable returnValueNum = 0;
- loop for length of string
- isolate character and perform string to number conversion
  - reassign value of char to charDigit.charCodeAt(index) - '0'.charCodeAt(0) to get number conversion
- returnValueNum * 10 + numberConverted
- end loop
- return returnValueNum variable
- end


C: Code With Intent

*/