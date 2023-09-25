function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");
console.log('TODAY:', TODAY);

// ERROR:
// function toString(date) {
//   return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
// }

// INSERTED:
function toString (date) {
  let year = date.getFullYear();
  let monthInYear = date.getMonth() + 1;
  let dayInMonth = date.getDate();

  let formatMonthInYear = monthInYear < 10 ? `0${monthInYear}` : monthInYear;
  let formatDayInMonth = dayInMonth < 10 ? `0${dayInMonth}` : dayInMonth;

  return `${year}-${formatMonthInYear}-${formatDayInMonth}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  console.log('date getDay:', date.getDay());
  return date.getDay() >= 1 && date.getDay() <= 5;
}

// this is myCalendar object: it states the dates the student is occupied and the what they are occupied with as a value
// this date is free of anything planned:  "2018-08-16": [],
// "Back To The Future Movie Night" is on ["2018-07-30"] thus it has already run if todays date is: "2018-08-05", `line 5`
// myCalendar does not go that far back
let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

// the is the offeredClasses object: it states the class title and the date the class is held as an array value with date string element
let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"]
};

function getCompatibleEvents(classes, calendar) { // offeredClasses, myCalendar passed as arguments and assigned to parameter variables

  function isAvailable(date) {
    let dateStr = toString(date); // convert the date object to a string
    console.log('date:', date);
    console.log('dateStr:', dateStr);

    // !calendar[dateStr] => if the date matches then returns truthy but ! coerces to false
    // !calendar[dateStr] => if not matched then returns undefined(falsy) but ! coerces to true to state isAvailable, short circuits to true and returns
    // logicalOR if you match a date the is available the array will be empty thus will have a length with strict equality to 0 and return true that the student is available
    // so if a date is not matched => it will return !false Available
    // if a date is matched and the array is not empty then return false notAvailable 
    // if the date is match and the array is empty then return true Available
    // if the date is matched and therefore returns truthy but coerced to falsy || and the length is not === 0 return false NotAvailable
    
    console.log('dateAsWeCheckCalender:', dateStr);
    console.log('calenderMatchDateStringAbove:', calendar[dateStr]);
    // console.log('calender:', calendar);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  // Object.keys called on the offeredClasses object returning an array with the string classNames as elements
  // forEach called on this returned value via methodChaining => forEach classNameElement
  // objectReferencing classes[className], access the object via the currentClassName to return the arrayValue
  // map over the arrayDateElements and return the dates and store to classDatesVariable
  Object.keys(classes).forEach(className => { 
    console.log('className:', className);
    let classDates = classes[className].map(toDate); // classDates is the dateArrayValue of the current stringClassNameKey
    console.log('toDate:', toDate);
    console.log('classDates:', classDates);
    // maps over the datesArrayValue of the current classNameKey in the classesObject and returns a date object and stores to classDates in an array

    if (classDates.some(isInThePast)) { // if at least 1 date from the classDates `isInThePast` functionCall `line 11`, no (date) argument passed??
      // we want to check if at least 1 of the dates in the classDates array is in the past / prior to todays date
      console.log('inThePast');
      return; // return what? if its in the past do nothing for this iteration of the forEach??
    }

    // if, filter the dates that are between monday(>=1) && friday(<=5) into an array
    // iterate over this array of dates and if ALL of them return Available(truthy)
    // push the className to the empty compatibleClasses array
    // return the array of 
    if (classDates.filter(isWeekday).every(isAvailable)) {
      console.log('pushed:', className);
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

/*

There are a lot of exciting classes offered in our region. We wrote a small script that checks which ones are still upcoming and compatible with our calendar. We must be available to attend all sessions of a particular class in order to sign up for it. We can always arrange that on weekends, but for weekdays we have to check whether our calendar is free.

Although the code below runs, something is wrong with it. Why is everything except for the Back To The Future Movie Night in the list of compatible classes?

=> WHY?
The issues appears to lay in the isAvailable function.
The dateStr is presented as such: 118-8-1
The calendar object keyString it attempts to match is presented as such: "2018-08-13"

These formats are different therefore any attempts to create a match will evaluate to a falsy value. 
This expression: !calendar[dateStr] therefore will return falsy initially and then be coerced to true by the ! operator and thus the expression will short circuit and return `true` as the value from the isAvailable function.

Doing so will invoke the `if clause` from this if statement condition: if (classDates.filter(isWeekday).every(isAvailable)) because `every` argument passed to the isAvailable will return a truthy value and thus this operation: compatibleClasses.push(className); will be executed. 

This is how all of the classes are pushed to the previously empty array: `compatibleClasses` and then this array is returned to the caller on the final line of code and output to the console due to the `console.log` method invocation and function invocation argument that initiated the function call.

Further to this the months are not being expressed properly and output as a month before they are recorded in the offeredClasses object:
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"]
  classDates: [ 2018-09-09T23:00:00.000Z, 2018-09-10T23:00:00.000Z ]

To fix the problem the dates will need to be formatted and used consistently across the program:

This function:

  function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

getDay() => will return a number from 0 - 6 to represent the day of the week(Sunday is 0) => this position needs to return the dayOfTheMonth
getMonth() => will return the month as a number from 0 - 11(Jan - Dec) => this position needs to + 1

new function:

function toString (date) {
  let year = date.getFullYear();
  let monthInYear = date.getMonth() + 1;
  let dayInMonth = date.getDate();

  let formatMonthInYear = monthInYear < 10 ? `0${monthInYear}` : monthInYear;
  let formatDayInMonth = dayInMonth < 10 ? `0${dayInMonth}` : dayInMonth;

  return `${year}-${formatMonthInYear}-${formatDayInMonth}`;
}

// Output: classDates: [ "Mike's Hikes", 'Powerboating 101' ]

The code now successfully matches dates with the correct format and thus we can see when the student isAvailable(date) or otherwise occupied. The className will not push when the student is notAvailable and the dates are matched / occupied. 
*/