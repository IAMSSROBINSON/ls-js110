function countOccurrences (arrayOfStrings) {
  let stringOccurrenceCount = {};

  for (let string = 0; string < arrayOfStrings.length; string++) {
    if (stringOccurrenceCount[arrayOfStrings[string]]) {
      stringOccurrenceCount[arrayOfStrings[string]] += 1;
    } else {
      stringOccurrenceCount[arrayOfStrings[string]] = 1;
    }
  }

  for (let property in stringOccurrenceCount) {
    console.log(`${property} =>`, stringOccurrenceCount[property]);
  }
  return stringOccurrenceCount;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles); 
// { car: 4, truck: 3, SUV: 1, motorcycle: 2 }

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

/*

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

P: Understanding The Problem
Clarification:
Create a function that accepts an array of strings. 
The function should count the number of times a string appears in the array.
The function should console.log the name of the string along with the number of occurrences.
The function should should take into account case sensitivity and count differing cases as new strings.

Input: array of strings
Output: Object (string: numberOfOccurrences(int))
Rules:
  Explicit:
    - create a function
    - accept array of strings
    - count the number of times a string occurs
      - cases sensitive = newString
    - return string : occurrences(int) structure

  Implicit:
  - array elements are own values

Questions:
- Does the data type of the count matter when output to the console? Should it be output as a number or as a string.

E: Examples and Test Cases
let vehicles = ['car', 'car', 'car', 'car'];      car => 4

Mental Model: 
- Iterate over the array elements.
- Add the individual elements to an object structure as key/properties. 
- Increase the count value by +=1 if the key exists
- Add the element and increase the count value by +1 if it doesn't exist
- Iterate over the filled object and log the key: values as desired

D: Data Structures
Object: I will use an object to collect the string names as object keys and the amount of times they occur as values to the key. I will return the object in this structure since it is representative of the structure required to tbe returned.

A: Algorithm
- start
- set a new function
- receive the array of string values
- set an empty object 
- loop through the array for as many elements
- if the object[arrayElement] exists => object[arrayElement] += 1
  - else object[arrayElement] = 1
  - repeat loop
  (no concession need be made for case sensitivity since it handles itself)
- iterate inside the object keys
  - for (let key in object)
- print the keyName + '=>', objectValue;
- end

C: Code with Intent

*/