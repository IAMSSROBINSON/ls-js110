
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

/*

P: Understand the problem
Clarification:
Create a function that takes a decimal number as an argument.
The decimal number will be between 0 and 360.
Convert the decimal number to:
  - a degree string representation denoted by:˚
  - a minutes string representation denoted by: '
  - a seconds representation denoted by: "
Use this conversion to help: 
- There are 60 minutes in a degree.
- There are 60 seconds in a minute.

input: floating point number (decimal number between 0 and 360)
output: string (representing the number in degrees, minutes and seconds)
rules:
  explicit:
  - must return a final string
  - must use symbol:
    - degrees: ˚
    - minutes: '
    - seconds "
  - there are 60 minutes in 1 degree
  - there are 60 seconds in 1 minute
  
  implicit:
  - a single string is returns with concatenated results
  - the degree˚ is always the left side of the decimal point where present or the whole number 
  - is it not stated whether methods are not allowed to be used to use methods in the process

questions:
- are methods allowed to be used?
- what is meant by a string representing that angle?

E: Examples and test cases
dms(93.034773);    // 93°02'05"

floating point number: 93.034773
resulting string: '93°02'05"'
degree: '93°'
minutes: "02'"
seconds: '05"'

mental model 
if there are 60 minutes in 1 degree 
then to find the minutes equivalent of 93 degrees the calculation must be 93 * 60 = 5580 minutes

*/

