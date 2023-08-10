function removeVowels (arrayOfStrings) {
  let copyArray = [... arrayOfStrings];
  let VOWELS = 'aeiouAEIOU';
  let placeHolderString = '';

  for (let stringIdx = 0; stringIdx < copyArray.length; stringIdx++) {
    let currentString = copyArray[stringIdx];
      for (let charIdx = 0; charIdx < currentString.length; charIdx++) {
        let currentChar = currentString[charIdx];
        if (VOWELS.includes(currentChar)) continue;

        placeHolderString += currentChar;
      }
      copyArray[stringIdx] = placeHolderString;
      placeHolderString = '';
  }
  return copyArray;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/*

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

P: Understanding The Problem
Create a function that accepts an array of strings.
The function should remove all vowels (a, e, i, o, u)
from each string element regardless of case and return
an array of the same strings value as elements.

Input: Array(of strings)
Output: Array(of the same string value elements)
Rules:
  Explicit:
  - create a function
  - receive the array of strings argument
  - return an array of the same string values

  Implicit:
  - an empty string element may exist once vowels are removed
  - the string elements remain individual elements once updated

Questions:
- Unclear as to whether to mutate the argument or not - please clarify?


E: Examples and Test Cases
['green', 'YELLOW', 'black', 'white'];  // ["grn", "YLLW", "blck", "wht"]


Mental Model:
One array string element is worked on at a time.
Each character will need to be compared within each string.
aeiouAEIOU are the potential vowels that exist.
Since strings are primitive values and cannot be mutated
the string at the index position will need to be reassigned.
Iterate over the arrayOfStrings with a loop for as long as the array
Set a variable of the currentString in the array
  Within a nested loop for as long as the currentString.length
  Split the string into characters
  continue the current iteration if the currrentChar is included in the vowels
  otherwise reassign the array[currentString] to += the currentChar


D: Data Structure
Array: I will be an array data structure to reassign the string elements in place after copying the array so that the original array remains unmutated.


A: Algorithm
- start
- set a function
- receive the array of strings argument
- copy the array: [... array]
- set a const VOWELS to 'aeiouAEIOU'
- set a placeHolderString = ''; to capture any new strings that may get created
- defined an outer loop for as long as the array.length
  - set a variable of currentString to the array[index] so that we are mutating the arrayElement in place
    - define a nested loop for as long as the currentString
    - since strings are character arrays we shouldn't have to split the string
    - set variable: we can access the stringChar for the currentChar
    - if the aeiouAEIOU(vowelsString).includes(stringChar) continue,
    - else placeHolderString += stringChar
  - reassign the array[index] = placeHolderString
  - placeHolderString = '';
- the loop moves to the next string and repeats
- return the copt array since it should be mutated
- end


C: Code With Intent
- above


Further Exploration: look into RegEx solution for simplification:
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

*/