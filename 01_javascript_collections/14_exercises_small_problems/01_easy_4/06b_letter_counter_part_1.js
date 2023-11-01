function wordSizes (string) {
  let obj = {};

  if (string.length === 0) {
    return obj;
  }

  let words = string.split(" ");

  for (let idx = 0; idx < words.length; idx++) {
    let length = words[idx].length;
    obj[length] = obj[length] ? obj[length] + 1 : 1;
  }
  return obj;
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

/*

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

P Understanding The Problem
Create a function that takes a string argument.
The string may or may not contain spaces that separate words.
A word is considered to be separated by a space.
The function should return a object with:
  {
    wordLength : numberOfWordsWithThisLength
  }

Input: String
Output: Object
Rules:
  Explicit:
  - create a function
  - receive argument string
  - return object
  - separate words by space
  - set object key to length of word
  - set object value to count of words with that length

  Implicit:
  - empty string argument returns {}

Questions:
- n/a


E: Examples and Test Cases
Input: "What's up doc?"
Output: { "2": 1, "4": 1, "6": 1 }

Words: length:
What's: 6
up: 2
doc? : 4

length: countOfWordsWithLength
{
  6 : 1
  2: 1
  4: 1
}

Mental Model:
set function, receive argument string, split string into words, set empty object.
iterate over array and set object key to element.length and update value by +1 if encountered again.


D: Data Structure
Object: I will utilize an object data structure since it is adept at storing data with labels that have values that can be updated.


A: Algorithm
- start
- set function
- receive argument
- set empty object: {}
- split split by (' ') for array of word elements
- loop over array elements
- set object key to element.length ? +=1 : 0;
- return object
- end


C: Code With Intent



Mental Model:

*/