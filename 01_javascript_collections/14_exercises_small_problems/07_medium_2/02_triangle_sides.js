function triangle (length1, length2, length3) {
  let arrayOfLengths = [length1, length2, length3];

  if (!isValidTriangle(arrayOfLengths)) {
    return 'invalid';
  }

  return isEq(arrayOfLengths) || isIso(arrayOfLengths) || 'scalene';
}

function isIso (arrayOfLengths) {
  let [arg1, arg2, arg3] = arrayOfLengths;
  return arg1 === arg2 || arg2 === arg3 || arg3 === arg1 ?  'isosceles' : null;
}

function isEq (arrayOfLengths) {
  let comparisonValue = arrayOfLengths[0];
  return arrayOfLengths.every(element => element === comparisonValue) ? 'equilateral' : null;
}

function isValidTriangle (arrayOfLengths) {
  arrayOfLengths.sort((a, b) => {
    return a - b;
  });
  let [smallestOne, smallestTwo, largest] = arrayOfLengths;
  let validSum = (smallestOne + smallestTwo) > largest;
  return validSum && arrayOfLengths.every(element => element > 0);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/*

A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.


P: Understanding The Problem
Create a function that takes 3 number arguments.
The function should validate whether the arguments constitute a valid triangle.
If they evaluate to an invalid triable then return the string 'invalid'.
If they are a valid triable then return the string that corresponds to the type of triangle they represent.

Input: 3 Numbers(representing lengths of triangle sides)
Output: String(representing the type of triangle or invalid)
Rules:
  Explicit:
  - create a function
  - receive arguments
  - valid triangle
      - all arguments must be greater than 0, otherwise 'invalid' string
      - sum two shortest arguments should be greater than the largest argument value
        - sort all 3 arguments ascending and take the first two

    - if valid triangle and all sides are the same/equal return 'equilateral' string 
    - if any two values are the same and the third is different return 'isosceles' string
    - if all values are different from each other return 'Scalene' string

  Implicit:
  - not all length values are whole numbers
  - 0 as a length returns 'invalid'
  - two length that sum: 2 and are not greater than third length(3) returns 'invalid'

Questions:
- n/a


E: Examples and Test Cases
3, 3, 1.5     // "isosceles"

aLength => 3
aLength => 3
aLength => 1.5

[1.5, 3, 3] => sorted ascending
=> All values greater than 0 => true


=> sum of smallest two values greater than the largest value => true:
  array[0] => 1.5
  array[1] => 3
  Total => 4.5

  largestValue => array[array.length-1] => 3
  4.5 > largestValue ? true : false // Output: => true

=> what type of triangle is it now that it is a validTriangle?

// evaluate first
function isEq(arg1, arg2, arg3){
  return arg2 === arg1 && arg3 === arg1;
}
// if returns true then return string: 'equilateral'

// evaluate second
function isIso () {
  return arg1 === arg2 || arg2 === arg3 || arg3 === arg1;
}
// if returns true then return string: 'isosceles'

// evaluate third: if above evaluate to false then this should by default be true
- if isValidTriable => true
- if isEq => false
- if isIso => false
- return string: 'scalene'

Mental Model:
Receive arguments
validate for isValidTriangle(arg1, arg2, arg3)
if !isValidTriangle(arg1, arg2, arg3) {
  return 'invalid';
}

if function isEq => return 'equilateral'
else if function isIso => return 'isosceles'
else return 'scalene'


D: Data Structure
Array: I will utilize an array data structure to store the length values for ease of selection when sorting


A: Algorithm
- start
- set new function: triangle
- receive arguments: arg1, arg2, arg3
- copy values to empty array: [arg1, arg2, arg3]
- set function: isValidTriangle
- if !isValidTriangle (arrayOfLengths) { return 'invalid'}
  - receive array of arguments
  - sort array descending (mutates the array)
  - destructure for clarity
    - [smallestOne, smallestTwo, largest] = arrayOfLengths
  - set validSum = (smallestOne + smallestTwo) > largest;
  - return validSum && arrayOfLengths.every(element => element > 0);
- if the function gets past validation the we have a valid triangle to work with
- set function isEq(arrayOfLengths)
   - function isEq(arrayOfLengths){
    let comparisonValue = arrayOfLengths[0];
    return arrayOfLengths.every(element => element === comparisonValue);
  }
- set function isIso(arrayOfLengths) {
  // destructureArray
  let [arg1, arg2, arg3] = arrayOfLengths;
  return arg1 === arg2 || arg2 === arg3 || arg3 === arg1;
}
- define is statement:
  if (isEq(arrayOfLengths)) {
    return 'equilateral'
  } else if (isIso(arrayOfLengths)) {
    return 'isosceles';
  } else return 'scalene';
- end


C: Code With Intent

*/

