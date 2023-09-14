function stringToInteger (string) {
  let number = 0;

  for (let idx = 0; idx < string.length; idx++) {
    let isolatedChar = string[idx];
    let isolatedCharToNum = isolatedChar.charCodeAt(0) - "0".charCodeAt(0);
    number = (number * 10) + isolatedCharToNum;
  }
  return number;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/*

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.


P: Understanding The Problem
Create a function that takes a string of digits.
The function should convert the string of digits to a number without using methods.

Input: String(ofDigits)
Output: Number(ofStringDigits)
Rules:
  Explicit:
  - create function
  - receive string argument
  - convert each character into number equivalent
  - do not use methods

  Implicit:
  - n/a

Questions:
- n/a


E: Examples and Test Cases
Input: "4321"
Output: 4321

number = 0;

"4"
"4".charCodeAt(0) - "0".charCodeAt(0) => 4
number(0) * 10 + 4 = 4
number = result(4)

"3"
"3".charCodeAt(0) - "0".charCodeAt(0) => 3
number(4) * 10 + 3 = 43

....


Mental Model:
Set function.
receive stringOfDigits.
split stringOfDigits in chars.
coerce chars to numbers
return number.


D: Data Structure
Variable memory: I will utilize the allocated memory for variables to assign and reassign values as required.


A: Algorithm
- start
- set function
- receive argument
- set number = 0;
- loop over stringChars
  - let isolatedChar = currentChar.charCodeAt(0) - "0".charCodeAt(0) => to isolate the number
  - number = number * 10 + isolatedChar
- return number
- end


C: Code With Intent

*/