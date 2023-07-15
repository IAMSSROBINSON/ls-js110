let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/*

Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

input: object of key: values(arrays of strings)
output: console.log(charVowels);
  - vowels: a, e, i, o, u
rules:
  - use forEach

algorithm:
- set validVowels to all valid vowels string
- set objValues to Object.values(obj)
- forEach over the values for each array
  - forEach over each array for the words
    - split the word in array of chars
      - forEach over the arrayOfChars for the chars
        - if char is included in vowelString
          - print char

*/

let validVowels = 'aeiou';
let objValues = Object.values(obj);
objValues.forEach(array => array.forEach(word => word.split('').forEach(char => {
  if (validVowels.includes(char.toLowerCase())) {
    console.log(char.toLowerCase());
  }
})));

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o



