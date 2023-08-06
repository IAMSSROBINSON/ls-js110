function palindromes (string) {
let allPotentialSubstringsArray = getAllSubStrings(string);
let palindromicSubStringsArray = isPalindromic(allPotentialSubstringsArray);
return palindromicSubStringsArray;
}

function getAllSubStrings (string) {
  let subString = '';
  let subStringsArray = [];
  let stringCharArray = string.split('');

  for (let indexA = 0; indexA < stringCharArray.length; indexA++) {
    subString = stringCharArray[indexA];
    subStringsArray.push(subString);

    for (let indexB = indexA+1; indexB < stringCharArray.length; indexB++) {
      subString += stringCharArray[indexB];
      subStringsArray.push(subString);
    }
  }
return subStringsArray;
}

function isPalindromic (allPotentialSubstringsArray) {
  let arrayPalindromes = allPotentialSubstringsArray.filter(element => element === element.split('').reverse().join('') && element.length >= 2);
return arrayPalindromes;
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

P: Understanding The Problem
Create a function that receives a string.
The function should return an array of substrings that reads the same forward and backward(palindromic).
The returned array should be sorted by when they appear in the original string.
If a duplicate substring exists it should be included.

Input: string
Output: array (of all palindromic substrings)
Rules:
  Explicit:
  - Create a function
  - Return an array of substrings
  - Substrings should be palindromic (same forwards and backwards)
  - Returned array contain multiple of the same substring
  - Returned array should contain substrings as they are encountered
  - Pay attention to case and all characters(symbols, characters spaces, punctuation ect)
  - Single characters are not palindromes

  Implicit:
  - all substrings are 2 or more characters in length

Questions:
- n/a


E: Examples and Test Cases
String:
'knitting cassettes'

k
kn
kni
knit
knitt
knitti
knitti
knittin
knitting
knitting' '
knitting' 'c
knitting' 'ca
knitting' 'cas
knitting' 'cass
knitting' 'casse
knitting' 'casset
knitting' 'cassett
knitting' 'cassette
knitting' 'cassettes


n
ni
nit
nitt
nitti
nitti
nittin √
nitting
nitting' '
nitting' 'c
nitting' 'ca
nitting' 'cas
nitting' 'cass
nitting' 'casse
nitting' 'casset
nitting' 'cassett
nitting' 'cassette
nitting' 'cassettes


...
......

isPalindromic:
[
'nittin',
'itti',
'tt', 

'ss',
'settes',
'ette',
'tt'
]


Mental Model:
The string is received by the function.
The function is slit in a character array.
- we want the string to be split into all potential substrings starting from the first char to the last 
- we also want all potential substrings starting from the successor in line, this must increase each time for as long as the string is 
- once we have those lists if the current substring === currentSubstring.split('').reverse().join('') then push to a new array
- once that is done filter the substrings >= 2.length and return that array 

D: Data Structure
Array: I will utilize the array data structure for this problem since ease of iteration is of the most importance. 

A: Algorithm
- start
- set a new function 
- receive the string
- set a variable allPotentialSubstrings and pass the string
  - this function will set a substring variable and initialize to empty string
  - this function will set a variable and initialize to an empty array
  - this function will split the string into a char array
  - it will define a loop
  - count from 0
  - while the count is less than the array length
  - increment the count
    - substring = charArray[indexA]
    - push substring
      - define a nested loop 
      - count from indexA+1
      - for as long as the array length
      - increment the count 
        - substring += stringArray[indexB]
- allPotentialSubstrings will be returned in an array
- set a function is palindromic
- pass the allPotentialSubstrings array
  - receive the array
  - this function will set a variable arrayPalindromes and initialize to the return of:
    - invoking filter on the array and iterating over each element and returning the element === element.split('').reverse().join('') && element.length >= 2 to return an array of elements that are the same forwards and backwards
  - return this array full of palindromes
- return the returned array full of palindromes from the original function
- end


C: Code With Intent

*/