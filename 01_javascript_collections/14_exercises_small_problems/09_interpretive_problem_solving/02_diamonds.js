function diamond (number) {

}

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.


diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

P: Understanding The Problem
Create a function that takes a number argument.
The function should display a 4-pointed diamond(main: top, left, right, bottom) in a grid n * n(vertical and diagonal).
n => should be an odd number

Input: Number(n)
Output: String(Grid of Spaces and Asterix)
Rules:
  Explicit:
  - create function
  - accept argument number
  - return string grid
  - n: number => n Asterix, rows
  - number should be odd

  Implicit:
  - n/a

Questions:
- should I check the number argument to see if odd first?
- if not odd what should I do?


E: Examples and Test Cases
Argument: 5

Output:
  *
 ***
*****
 ***
  *

line1 spaces: 2 then Asterix: 1
line2 spaces: 1 then Asterix: 3
line3 spaces: 0 then Asterix: 5
line4 spaces: 1 then Asterix: 3
line5 spaces: 2 then Asterix: 1

Observation:
Number of rows === argumentNumber
Spaces exist on the left side of the Asterix

Mental Model:

*/