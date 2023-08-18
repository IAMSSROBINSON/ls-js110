function maxRotation (number) {
  let length = String(number).length;
  let stringNumArr = String(number).split('');
  let finalStr = '';

  for (let index = 0; index <= length; index++) {
    stringNumArr = rotateRightmostDigits(stringNumArr, 0);
    finalStr += stringNumArr.splice(0, 1);
  }
  return Number(finalStr);
}

function rotateRightmostDigits (stringNum, index) {
  let first = stringNum.splice(index,  index + 1);
  let second = stringNum.concat(first);
  return second;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

P: Understanding The Problem
Create a function that receives an number.
The function should:
  - take the first digit and put it at the end of the number
  - then keep the new first digit and take the second digit and the end of the number 
  - then keep the two digits and take the third digit and put it at the end of the number
  - then keep the first 3 digits and take the forth and put it at the end of the number
  - then keep the first 4 digits and take the fifth and put it at the end of the number
  - since the number only has 6 digits this is the maximum rotation of the original number
  (use function from previous exercise where required)

Input: number
Output: number(maximumRotations)
Rules:
  Explicit:
  - create function
  - receive argument
  - return maximumRotations

  Implicit:
  - argument could be single number
  - argument could be any amount of numbers
  - leading 0 gets dropped from the start of the number when maxRotated

Questions:
- n/a


E: Examples and Test Cases
735291 // 321579

735291
R0: 7
352917

352917
KEEP: 3
R1: 5
329175

329175
KEEP: 32
R2: 9
321759

321759
KEEP: 321
R3: 7
321597

321597
KEEP: 3215
R4: 9
321579

___________

735291, 0
352917

352917, 1
329175

329175, 2
321759

321759, 3
321597

321597, 4
321579

MaxRotation: 321597

Mental Model:
- Receive number argument
- Coerce to string and then to array of chars
- Iterate for the length of the array, index: 0
- Pass array to previous function with index
  - return new array with element at specified index rotated to the end and assign to value of argument passed in so that it is reassigned on each iteration before iterating again with the new assigned value
- splice the array from element 0 to index and reassign to empty string variable outside of loop
- when iterations complete coerce back to number and return


D: Data Structure
Array: I will utilize an array data structure to manipulate the digits of a number when coerced from number to string to array of characters.


A: Algorithm
- start
- Pass the number argument.
- Receive the number argument to function parameter.
- Coerce number to String and split the string to charArray and initialize to variable.
- Define loop for length of the charArray from index 0.
- Send charArray to previous function as 1st argument, second argument index.
- Within the previous function receive the two arguments to parameter variables.
- Within the function body declare new variable and slice the index to index + 1.
- Declare another new variable and slice from index+1 to the end of the charArray.
- Use .concat to return a new array but invoke the method of the second variable.concat(first) and return.
- When the charArray returns to the caller store in a variable.
- Splice the array to mutate it from 0 to index and reassign to empty string declared outside of the loop.
- This will mean the array is mutated by the amount of elements dictated by the increasing index.
- When the array is emptied gradually and no elements are left it will stop iterating.
- The reassigned variable value will be a final string since the array elements were strings.
- Coerce back to a number before returning from the main function.
- end


C: Code With Intent

*/