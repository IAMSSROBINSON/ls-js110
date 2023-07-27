function reverseSentence (string) {
  let newString = string.split(' ').reverse().join(' ');
  return newString;
}
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/*

Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

P: Understand The Problem
Clarification:
Create a function. 
The function should receive a string.
The function should return a new string.
The returned string should be the reverse of the received string.

Input: string
Output: string(reversed)
Rules:
  Explicit:
  - create a function 
  - return a reversed string

  Implicit:
  - empty string returns empty string
  - words are separated by character space " "

Questions: 
- n/a

E: Examples and Test Cases
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Mental Model:
- turn the string into an array of string elements separated by a character space " "
- reverse the order before joining the string back together and returning

D: Data Structure
Variable memory allocation may be used to store data.

A: Algorithm
- start
- set a function 
- receive the string argument
- set newString variable 
- initialize to string.split(' ').reverse().join(' ');
- return the variable
- end

C: Code With Intent

*/