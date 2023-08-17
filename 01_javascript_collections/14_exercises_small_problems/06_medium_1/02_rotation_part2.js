function rotateRightmostDigits (argument1, argument2) {
  let stringArray = String(argument1).split('');

  stringArray.push(stringArray.splice(stringArray.length - argument2, 1));

  return Number(stringArray.join(''));
}
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/*

Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

P: Understanding The Problem
Create a function that receives a number and a numberOfDigits to rotate.
The function should take the second argument and count backwards from the end of the number by this amount => take the element there and move it to the end of the number before returning the result.

Input: number, elementSpacesFromTheEndOfTheNumber
Output: number(rotated)
Rules:
  Explicit:
  - must take the number at the second argumentNumberOfElementsToCountFromEnd
  - must return a new number

  Implicit:
  - number could be any length
  - will only provided numbers

Questions:
- n/a


E: Examples and Test Cases
(735291, 4);      // 732915

Mental Model:
The 2nd argument will locate the element at number.length - 2ndArgument(since numbers do not have a .length property the number can be coerced to a string or array of elements to access the characters)
Splice the element at that position
Push the element to the end of the numberArray
Coerce back to a number
return the number


D: Data Structure
Array: I will utilize an array data structure so that the place of digits can be easily accessed


A: Algorithm
- start
- set function
- receive arguments
- coerce 1st argument to a string and split the string into a character array
- Splice the element at numberArray.splice(numberArray.length - 2nd argument)
  - set to variable
- push variable to numberArray so it appears at the end
- join the array to coerce back to a string
- coerce the string to a number
- return the number
- end


C: Code With Intent

*/

