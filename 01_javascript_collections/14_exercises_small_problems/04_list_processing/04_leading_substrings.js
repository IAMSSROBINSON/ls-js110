function leadingSubstrings (string) {
  let subString = '';
  let sortedSubStringLengths = string.split('').map((char)=>{
    return subString += char;
  })
  return sortedSubStringLengths;
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

P: Understanding The Problem
Create a function that receives a string argument.
The function should create an array of all potential substrings from that strings characters starting with 1 character and ending with the full string.
The array of substrings should be returned in ascending.length order.

Input: string
Output: array (of substrings)
Rules: 
  Explicit:
  - create function
  - return array of substrings
  - start with 1 char
  - end with full string
  - return sorted array from smallest.length to highest.length

  Implicit:
  - empty string will not be passed as an argument
  - may pass a single char argument and should return single char in array

Questions:
- n/a

E: Examples and Test Cases
leadingSubstrings('abc');      // ["a", "ab", "abc"]

Mental Model:
split the string and push an increasing substring to an empty array for as long as the length of the string for an array of all potential substrings. The sort by a.length - b.length on the resulting array before returning.

D: Data Structure
Array: I will utilize an array data structure to house the potential substrings before sorting.

A: Algorithm
- start
- set a new function 
- receive the string argument
- set substring variable: ''
- set substringArray variable: []
- split the string
- forEach string substringArray.push(subString += stringChar[index])
- array will already be in ascending order so no need to invoke the .sort method for the length properties
- return substringArray
- end

C: Code With Intent

*/