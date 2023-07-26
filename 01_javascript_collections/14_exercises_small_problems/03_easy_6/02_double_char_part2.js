function doubleConsonants (string) {
  let arrayCaptureCharacter = [];
  let validConsonants = 'bcdfghjklmnpqrstvwxyz';
  let stringToArray = string.split('');
  
  stringToArray.forEach((char)=>{
    if (validConsonants.includes(char.toLowerCase())) {
      arrayCaptureCharacter.push(char, char);
    } else {
      arrayCaptureCharacter.push(char);
    }
  })

  return arrayCaptureCharacter.join('');
}


console.log(doubleConsonants('String'));          
// "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    
// "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        
// "JJullyy 4tthh"
console.log(doubleConsonants(''));                
// ""

/*

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

P: Understanding The Problem
Clarification:
Create a function that receives a string.
The function should double all consonants only within the string and return a new string. Do not double vowels, digits, symbols or anything else.

Input: string
Output: new string 
Rules:
  Explicit: 
  - double specifically consonants only
  - no digits counted
  - no symbols counted
  - no whites space counted
  - no vowels (a, e, i, o, u)

  Implicit:
  - Cases matters 
  - Must got get rid of symbols or undesirables just don't double them
  - empty string also not doubled

E: Examples and Test Cases
doubleConsonants('String');          
// "SSttrrinngg"
doubleConsonants('Hello-World!');    
// "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        
// "JJullyy 4tthh"
doubleConsonants('');                
// "" 

Mental Model:
- consonants will need to be explicitly defined so that they can not be veered from
- if the character is included in the store of consonants then double it and push it to an array 
  - else push the character
- do this for the length of the string array if the string is split into individual characters
- join the string at the end

D: Data Structure
Array: Since arrays are easily iterable and the label of the data does not matter much I will use arrays to manipulate the data.

A: Algorithm
- start
- set function 
- receive the string 
- set an arrayCaptureCharacter
- set an string validConsonants and list consonants
- split the string into an array of string characters 
- loop over the array elements 
  - if validConsonant.includes(currentElement.toLowerCase())
  - push the currentElement + currentElement to arrayCaptureCharacter 
- join the arrayCaptureCharacter back tot a string
- return the new string 
- end

C: Code With Intent

*/