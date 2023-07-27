function reverseWords (string) {
  let emptyArray = [];
  let stringArr = string.split(' ');
  stringArr.forEach((word)=>{
    if (word.length >= 5){
      emptyArray.push(word.split('').reverse().join(''));
    } else {
      emptyArray.push(word);
    }
    
  })
  return emptyArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/*

Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

P: Understanding The Problem
Clarification:
Create a function that receives a multi-word string.
The function should return a new string with all words with 5 or more characters reversed.
Words are separated by a character space " ".

Input: string
Output: newString
Rules:
  Explicit: 
  - return new single string
  - words within the string are separated by " "
  - words greater than 5 characters in length should be reversed in order of characters

  Implicit:
  - maintain character casing

Questions:
- n/a

E: Examples and Test Cases
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

Mental Model:
- if the string is a single word more than 5 characters in length then reverse the word 
- separate the string into words as elements in an array 
- iterate over the array 
- if a word/element is >= 5 in character length then coerce to an array of character elements, reverse it, then coerce back to a string
- push everything else as it stands
- convert the array back to a string before returning

D: Data Structure
Array: I will utilize an array data structure to contain all moving elements since the labelling of the elements is also not a concern.

A: Algorithm
- start
- set function 
- receive string 
- set empty array 
- set variable
  - initialize to string.split(' ')
- loop over the variable (words array)
- define if statement
 - if currentWord(use selection).length >= 5
  - currentElement.split('').reverse().join('')
  - push to empty array 
 - push all other elements also so that the string elements appear in place
- join(' ') the array back into a string 
- return the string 
- end

C: Code With Intent


Further Exploration
Did you solve this problem in different way? Try to solve it using map() method.

*/