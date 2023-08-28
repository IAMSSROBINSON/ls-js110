function triangle (degree1, degree2, degree3) {
  let degreesArray = [degree1, degree2, degree3];

  if (!isTriangle(degreesArray)) {
    return 'invalid';
  }
  return isRight(degreesArray) ||
  isAcute(degreesArray) ||
  isObtuse(degreesArray);
}

function isRight (degreesArray) {
  return degreesArray.some(element => element === 90) ? 'right' : null;
}

function isAcute (degreesArray) {
  return degreesArray.every(element => element < 90) ? 'acute' : null;
}

function isObtuse (degreesArray) {
  return degreesArray.some(element => element > 90) ? 'obtuse' : null;
}

function isTriangle(degreesArray) {
  let sum = degreesArray.reduce((acc, el) => {
    return acc + el;
  });

  return degreesArray.every(element => element > 0) && sum === 180;
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

/*

A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.


P: Understand The Problem
Create a function that takes three integers as arguments.
The function should validate the arguments initially to determine if they constitute a validTriangle.
If not a valid triangle then return the string 'invalid'.
If it is determined that the values constitute a valid triangle then use other functions to determine which type of triangle is being represented and return the corresponding string value.

Input: 3 Ints(angles of a triangle)
Output: String('invalid', 'right', 'acute' or 'obtuse')
Rules:
  Explicit:
  - create a function
  - receive 3 arguments
  - validate arguments
    - return 'invalid' string if not all arguments are greater than 0
    - if sum of all arguments is not 180 then return 'invalid'
  - determine the type of triangle
    - out of all arguments if one argument is 90 degrees return 'right' string
    - out of all arguments if all arguments are less than 90 degrees return 'acute' string
    - out of all arguments if one argument is greater than 90 degrees return 'obtuse' string

  Implicit:
  - 0 argument returns string 'invalid'
  - sum 150 returns string 'invalid' (since sum does not total 180)

Questions:
- n/a


E: Examples and Test Cases
120, 50, 10)      // "obtuse"


Mental Model:
Arguments received.

=> Validation:
All arguments are greater than 0.
Sum of arguments is equal to 180.
=> it is a validTriangle.

=> TypeOfTriangle

isRight
- out of all arguments if some argument(at least one) is === 90 return 'right'
(this is valid since all arguments are vetted as being greater than 0 thus two arguments cannot be 90 degrees each and a third 0 and still be a valid triangle)

isAcute
- out of all arguments if every arguments are < 90 return 'acute'

isObtuse
- out of all arguments if some argument(at least one) is > 90 return 'obtuse'


D: Data Structure
Array: I will utilize an array data structure for ease of collection of multiple data point arguments.


A: Algorithm
- start
- set new function: triangle
- receive arguments: (degree1, degree2, degree3)
- set empty array and copy contents to array as elements: let degreesArray = [degree1, degree2, degree3]
- set function: !isTriangle(degreesArray)
  - if degreesArray.every(element => element > 0) && degreesArray.reduce((acc, ele) => acc + el) === 180;
  - return 'invalid'
- if the function makes it past validation the triangle arguments are valid
- validateTypeOfTriangle
return:
  - set function isRight(degreesArray) ||
    - if degreesArray.some(element => element === 90)
    - return 'right'

  - set function isAcute(degreesArray) ||
    - if degreesArray.every(element => element < 90)
      - return 'acute'

  - set function isObtuse(degreesArray) ||
    - if degreesArray.some(element => element > 90)
    - return 'obtuse'
- end


C: Code With Intent

*/