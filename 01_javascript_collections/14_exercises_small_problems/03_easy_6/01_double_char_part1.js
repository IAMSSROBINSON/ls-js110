function repeater (string) {
  let arrayFromString = string.split('');
  
  let repeatedCharacters = arrayFromString.reduce((acc, currentElement)=>{
    return acc += currentElement.repeat(2);
  },[].join(''))
  return repeatedCharacters;
}

console.log(repeater('Hello'));        
// "HHeelllloo"
console.log(repeater('Good job!'));    
// "GGoooodd  jjoobb!!"
console.log(repeater(''));             
// ""

/*

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

P: Understand The Problem
Clarification:
Create a function that receives a string.
The function should double each individual character of the string and return it as a new string result.

Input: string
Output: new string
Rules: 
  Explicit: 
  - double each character
  - return a new string


  Implicit:
  - must maintain character case 
  - empty character spaces are included: " " / "  "
  - empty string it still an empty string / no change
  - Symbols are included

Questions:
- n/a

E: Examples and Test Cases
('Hello');        // "HHeelllloo"
('Good job!');    // "GGoooodd  jjoobb!!"
('');          

Hello
H: HH
e: ee
ll: llll
oo: oo

Mental Model:
The present string character is repeated twice.
The next character is concatenated to the previous and repeated twice. 
Strings are character arrays so even spaces are counted as characters since they are contained within some strings.

D: Data Structure
Array: I will use an array since the labelling of elements is not relevant to this problem and since arrays are easily iterable collections that allow for quickly accessing data.

A: Algorithm
- start
- set a new function: repeater
- turn the string into an array of characters so that they are easily iterable: string.split('')
- use reduce on the array of characters to loop over array elements
  -acc.repeat(element, 2) and return 
- set new variable to the return
- return the variable from the function 
-end

C: Code With Intent
*/