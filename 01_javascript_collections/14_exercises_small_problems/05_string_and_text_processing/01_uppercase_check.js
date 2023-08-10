function isUppercase (string) {
  return string === string.toUpperCase();
}
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/*

Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

P: Understand The Problem
Create a function that accepts a string.
The function should determine where all of the 'alphabetic' characters in the string are UPPERCASE.
If they are return true, if not return false.

Input: String(alphabetic and numerical characters)
Output: Boolean(true: if all alphabetic characters are uppercase /false: if not all are uppercase)
Rules:
  Explicit:
  - create a function
  - return boolean value
  - if all alpha chars are UPPERCASE return true
  - if not all alpha chars are UPPERCASE return false

  Implicit:
  - ignore alpha numeric chars
  - ignore empty character spaces and punctuation
  - empty string returns true

Questions:
- n/a


E: Examples and Test Cases
'4SCORE!'         // true


Mental Model:
Use selection to determine if all the currentString has strict equality to the currentString.toUpperCase()
- If so return true
- If not return false

D: Data Structure
I will use variable memory allocation to store the data provided since complex data structures should not be required for this task.


A: Algorithm
- start
- set function
- receive string
- return string === string.toUpperCase();
- end


C: Code With Intent

*/