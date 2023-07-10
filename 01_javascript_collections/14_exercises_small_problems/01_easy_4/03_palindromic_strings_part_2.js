function isRealPalindrome (string) {
  let stringIsAlpha = getAlpha(string);
  let stringReversed = reverseString(stringIsAlpha);

  return stringIsAlpha.toLowerCase() === stringReversed.toLowerCase();
}

function getAlpha (string) {
  let buildAlphaString = [];
  let regExAlphaPattern = /[a-zA-Z0-9]/;
  let counter = 0;

  while (counter < string.length) {
    if (regExAlphaPattern.test(string[counter]) === true) {
      buildAlphaString.push(string[counter]);
    }
    counter++;
  }
  return buildAlphaString.join('');
}

function reverseString (string) {
  let reversedString = string.split('').reverse().join('');
  return reversedString;
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

/*

Palindromic Strings (Part 2)
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

- alphanumeric / alphameric: all letters and numbers in a language set
  - therefore punctuation and whitespace should be removed before comparing as these are non-alphanumeric
  - start by removing whitespace
    - .split(' ').join('')
    - then test each char against a regex pattern for a-z and 0-9: /[a-zA-Z0-9]/
      - if you just test against the regEx it will remove punctuation and white space
        - pass string to a function that compares each char to the regEx for alphanumeric 
        - if it returns true then push the char to an array
        - convert the array back to a string before returning
    - compare string to the string when split, reversed and joined
- return the result 
*/