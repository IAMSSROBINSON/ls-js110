function palindromes (string) {
  let holding = [];
  let splitString = string.split('');
  
  for (let i = 0; i < string.length; i++) {
    holding.push(getSubStrings(splitString.slice(i)));
  }
  return isPalindromic(holding);
}

function getSubStrings (substringArrChars) {
  let holding = [];
  let string = '';
  
  substringArrChars.map((char) => {
    string += char;
    holding.push(string);
  });
  return holding;
}

function isPalindromic (arrayOfAllSubs) {
 
  return arrayOfAllSubs.flatMap((arr) => {
   return arr.filter((word) => {
      return word === word.split("").reverse().join('') && word.length > 1 ;
    })
  })
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/*

Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Input: String(multi-word)
Output: Array(of palindromic substrings from the string)

- in order they appear in string
- include repeat substrings
- case sensitive
- single characters are not palindromes

E:

Mental Model:
Receive string argument.
Create all potential substrings and store in an array.
Iterate through all substrings and filter only substrings that are the same forwards and backwards.

A: 
- start
- set function
- receive argument string
- create all substrings
  - loop: flatMap
  - split string 
  - slice from index to end of string
  - send sliced string to getSubStrings function
- getSubStrings function  
  - receive sliced string array of characters
  - set holding string = ''
  - map over array 
  - reassign holding string += char
  - return mapped array
    - push returned array of substrings to holding array
- once you have all potential substrings
  - create isPalindromic function(array of substrings)
    - filter the words that are === when .split('').reverse().join('')
- return the array of palindromic substrings
- end

*/