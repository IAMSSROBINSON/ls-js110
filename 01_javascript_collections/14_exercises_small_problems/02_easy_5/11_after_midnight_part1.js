function timeOfDay (number) {

  const MINUTES_IN_A_DAY = 1440;
  const MINUTES_IN_HOUR = 60;

  number = ((number % MINUTES_IN_A_DAY) + MINUTES_IN_A_DAY) % MINUTES_IN_A_DAY;

  let hours = Math.floor(number / MINUTES_IN_HOUR);
  let minutes = number % MINUTES_IN_HOUR;

  let formatHours = String(hours).padStart(2, "0");
  let formatMinutes = String(minutes).padStart(2, "0");

  return `${formatHours}:${formatMinutes}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


/*

The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

P: Understanding The Problem
Clarification:
Positive number of minutes => after midnight
Negative number of minutes => before midnight
Create a function that accepts a number(positive, negative or 0) minutes and returns the time in a 24 hour format (hh:mm).

Input: number(positive or negative)
Output: string(time => hh:mm)
Rules:
  Explicit:
  - create a function
  - return the time in hh:mm
  - do not use the Date class methods
  - should work with an integer input

  Implicit:
  - argument could be 0
  - argument could be negative, less than 0
  - argument could be positive, greater than 0

Questions:
n/a

E: Examples and Test Cases

Input: -1437
Output: "00:03"


Mental Model:
Create function.
Receive argument number.
Convert number to positive number to indicate minutes past next next.
Minutes in a day => 1440
Work out hours / 60 (whole)
Work out minutes % 60 (remainder)
If String(number).length < 2 pasStart it with 0
return `${hours}:${minutes}`


D: Data Structure
Variable memory allocation: I will utilize the memory allocation give to variables to assign and reassign values as required.


A: Algorithm
- start
- set function
- receive argument number
- set const minutes in a day = 1440
- reassign argument to be convert to positive number the next day
  - ((-1437 % 1440) + 1440) % 1440 => 3
  - 3 past midnight = 00:03
- getHours:
  - set hours${hours} => 3 / 60 => 0
  - reassign hours hoursFormat = String(hours).padStart(2, '0'); => 00
- getMinutes:
  - set ${minutes} => 3 % 60 => 3
  - reassign minutesFormat = String(minutes).padStart(2, '0'); => 03
return `${hoursFormat}: ${minutesFormat}`
- end


C: Code With Intent

*/