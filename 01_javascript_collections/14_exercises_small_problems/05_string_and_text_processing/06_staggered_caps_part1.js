function staggeredCase (string) {
  let stringCharsArr = string.split('');
  stringCharsArr.forEach((char, index)=>{
    if (index % 2 === 0) {
      stringCharsArr[index] = char.toUpperCase();
    } else {
      stringCharsArr[index] = char.toLowerCase();
    }
  });
  return stringCharsArr.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

P: Understanding The Problem
Create a function that accepts a string argument.
The function should take every other character starting with the first and alternate uppercase with lowercase characters and return the final string.

Input: String
Output: String(alternating cases)
Rules:
  Explicit:
  - Create a function
  - alternate the cases
  - return a new string

  Implicit:
  - numbers, symbols and character spaces are unaffected by case but are included in alternating

Questions:
- n/a


E: Examples and Test cases
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Mental Model:
Receive the string.
Split the string so the characters can be reassigned in place(array).
Iterate over the characters for the length of the string.
If the index position is even reassign the character to uppercase
else reassign to lowercase
return the string


D: Data Structure
Array: I will utilize an array data structure for each of manipulating characters of a string.


A: Algorithm
- start
- set a function
- receive the string
- set a variable and initialize to splitting the string into an array of characters
- loop over the charactersArray
- for each character
- if the index % 2 == 0
  - array[index] = array[index].toUpperCase()
- else
  - array[index] = array[index].toLowerCase()
- join the array back to a string
- return the string
- end


C: Code With Intent

*/