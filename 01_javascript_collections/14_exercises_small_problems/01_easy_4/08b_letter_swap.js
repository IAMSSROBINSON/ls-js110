function swap (string) {

  if (string.length <= 1) return string;

  let words = string.split(' ');
  let swappedLetters = words.map((currentWord) => {

    return currentWord[currentWord.length -1] +
    currentWord.slice(1, currentWord.length - 1) + currentWord[0];
  });
  return swappedLetters.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

/*

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.


P: Understanding The Problem
Create a function that takes a string (may contain words separated by spaces).
The function should swap the first letter and last letter of each word.

Input: String (word or words)
Output: String (the word, words with first and last letter swapped)
Rules:
  Explicit:
  - create function
  - take string argument
  - swap first and last letter of each word that exists
  - word delimited by " "

  Implicit:
  - may be a single string word
  - single character string returns the single character

Questions:
- n/a


E: Examples and Test Cases
Input: 'Oh what a wonderful day it is'
Output: "hO thaw a londerfuw yad ti si"

word: Oh
reversed: hO

word: what
reversed: thaw

word[0] = tempVariable
word[0] = word[word.length] // firstLetter become the last
word[word.length] = tempVariable // lastLetter become the first


Mental Model:
Set function, receive string, split string by space into array of words.
map over words array
  - let firstChar = element[0]
  - let lastChar = element[element.length]
  - let tempChar = '';
     - word[0] = tempVariable
     - word[0] = word[word.length] // firstLetter become the last
     - word[word.length] = tempVariable // lastLetter become the first


D: Data Structure
I will utilize variable memory allocation to assign and reassign values as required.


A: Algorithm
- start
- set function
- receive argument string
- set guard clause: if string.length <= 1 return string
- split string by empty space characters
- map over wordsArray
  - set firstChar
  - set lastChar
  - set tempChar
    - swap first and last char of currentWord in place
- map returns array of words
- join array to string
- return string
- end


C: Code With Intent

*/