function dms (angle) {
  const MINUTES_IN_DEGREE = 60;
  const SECONDS_IN_MINUTES = 60;

  const degree = getDegree(angle);
  const minutes = getMinutes(angle, degree, MINUTES_IN_DEGREE);
  const seconds = getSeconds(angle, degree, MINUTES_IN_DEGREE, SECONDS_IN_MINUTES);

  return `${degree}°${getPad(minutes)}'${getPad(seconds)}"`;
}

function getPad (value) {
  return String(value).length < 2 ? "0" + String(value) : String(value);
}

function getSeconds (angle, degree, MINUTES_IN_DEGREE, SECONDS_IN_MINUTES) {
  let decimal = angle - degree;
  let minutes = decimal * MINUTES_IN_DEGREE;
  let seconds = Math.floor(((minutes - Math.floor(minutes)) * SECONDS_IN_MINUTES));
  return seconds;
}

function getMinutes (angle, degree, MINUTES_IN_DEGREE) {
  let decimal = angle - degree;
  let minutes = decimal * MINUTES_IN_DEGREE;
  return Math.floor(minutes);
}

function getDegree (angle) {
  return Math.floor(angle);
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/*

Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

P: Understanding The Problem
Create a function that takes a float number.
The number represents an angle between 0 and 360 degrees.
The function should return a string representing:
  - the angle in degrees,
  - the angle in minutes,
  - the angle in seconds,

  use symbols:
  ˚ for degrees
  ' for minutes
  " for seconds

1degree = 60 minutes
60 seconds / 1 minute

Input: Int (float))
Output: String
Rules:
  Explicit:
  - create function
  - receive number(degrees)
  - return string representing:
    - degrees
    - minutes
    - seconds

  Implicit:
  - Input: 0 => returns 0°00'00"

Questions:
- n/a


E: Examples and Test Cases

Input: 76.73
Output: 76°43'48"


degrees:
`${degrees}°${minutes}'${seconds}"`

degrees:
  input: 76
  output: 76°
  let degrees = Math.floor(argumentNumber) => 76

minutes: 43
  decimal = number - degrees
  0.730000000000004
  minutes = decimal * 60 .toFixed(1)
  43.8

seconds: 48
  round minutes = Math.floor(minutes)
  seconds = minutes - roundMinutes * 60 .toFixed(0)
  48


Mental Model:


D: Data Structure
Variable memory allocation: I will utilize variable memory allocation for assigning values and reassigning values as required.


A: Algorithm
- start
- Set function.
- Receive argumentNumber.
- const MINUTES_IN_DEGREE = 60;
- const SECONDS_IN_MINUTE = 60;
- let degrees = Function: getDegrees(argumentNumber)
- let minutes = Function: getMinutes(argumentNumber, degrees, MINUTES_IN_DEGREE)
- let seconds = Function: getSeconds(minutes, SECONDS_IN_MINUTE)
- return `${degrees}°${minutes}'${seconds}"`
- end


C: Code With Intent

*/