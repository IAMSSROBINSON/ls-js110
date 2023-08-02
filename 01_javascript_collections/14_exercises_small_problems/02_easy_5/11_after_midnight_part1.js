
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
Create a function that accepts a number(positive or negative) minutes and returns the time in a 24 hour format (hh:mm).

Input: number(positive or negative)
Output: string(time => hh:mm)
Rules:
  Explicit:
  - create a function
  - return the time in hh:mm
  - do not use the Date class methods
  - should work with an integer input

  Implicit:
  - 

Questions:
n/a

E: Examples and Test Cases

timeOfDay(-1437) === "00:03"

Positive number of minutes => after midnight(morning to midday)
Negative number of minutes => before midnight(midday upto midnight)

The result is 3 minutes past midnight the previous day as if counting backwards anticlockwise


1hr => 60 minutes
12hrs => 720 minutes
24hrs => 1440 minutes

- 24:00 (midnight) => 0 / 1440
- 23:00 => 1380
- 22:00 => 1320
- 21:00 => 1260
- 20:00 => 1200
- 19:00 => 1140
- 18:00 => 1080
- 17:00 => 1020
- 16:00 => 960
- 15:00 => 900
- 14:00 => 840
- 13:00 => 780
- 12:00 => 720
- 11:00 => 660
- 10:00 => 600
- 09:00 => 540
- 08:00 => 480
- 07:00 => 420
- 06:00 => 360
- 05:00 => 300
- 04:00 => 240
- 03:00 => 180
- 02:00 => 120
- 01:00 => 60
- 00:00 => 0

Mental Model:






*/