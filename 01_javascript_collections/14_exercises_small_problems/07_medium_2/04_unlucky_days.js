function fridayThe13ths (yearArgument) {
  let arrayOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let count = 0;
  let thirteenth = 13;

  arrayOfMonths.forEach((month) => {
    let date = new Date(`${month} ${thirteenth} ${yearArgument}`);
    let day = date.getDay();
    if (day === 5) {
      count += 1;
    }
  });
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

/*

Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.


P: Understanding The Problem
Create a function that takes a year as an argument.
The function should calculate the number of Friday the 13ths in that year and return the amount.

Input: Number(year)
Output: Number(countOfFriday13thsInThatYear)
Rules:
  Explicit:
  - create a function
  - receive year
  - calculate amount of times Friday the 13th occurs in that year
  - return amount as a number
  - year argument will be greater than 1752(the start of the UK Gregorian Calendar)

  Implicit:
  - n/a


E: Examples and Test Cases
2017;     // 2

We know the names of all months in a year
We know we want to count the occurrences of Friday which falls on day 5
We know we want to identify the 13th date

So if we iterate over each month and look for the 13th date, if the day === 5 this is a Friday 13th so increase a counter

Mental Model:
get a new date: let date = newDate();
If you pass an argument of the Month, Day, Year so have access to extra data using that date
To get the day use date.getDay()
  Date:
  let day = date.getDay();
  - 1: Monday
  - 2: Tuesday
  - 3: Wednesday
  - 4: Thursday
  - 5: Friday
  - 6: Saturday
  - 0: Sunday
loop over months and pass arguments and set parameters each time:
  - let date = newDate(${currentMonthBeingIterated} ${13VariableInstance} ${yearArgument});
  let day = getDay();
  - if (day === 5)
    - increase counter += 1;
- return the counter after all months have been iterated on

D: Data Structure
Array: I will utilize an array data structure to store a list of predetermined months for comparison


A: Algorithm
- start
- set function: fridayThe13ths() {}
- receive yearArgument
set arrayOfMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
- set count = 0;
- loop over array
  - forEach((month)=>{
    let date = new Date(${month} 13 ${yearArgument});
    let day = getDay();
    if (day === 5) {
      count += 1;
    }
  - return count;
  })
- end


C: Code With Purpose

*/

/*

DIFFERENT SOLUTION:

function fridayThe13ths(year) {
  let thirteenths = [];


  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));

  }
  console.log('thirteenths', thirteenths);

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

console.log(fridayThe13ths(2017));

*/