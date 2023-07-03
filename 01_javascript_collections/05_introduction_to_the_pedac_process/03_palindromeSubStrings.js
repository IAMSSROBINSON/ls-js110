// Given a string, write a function `palindromeSubstrings` which returns 
// all the substrings from a given string which are palindromes. Consider // palindrome words case sensitive. 

// Test cases: 
// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")) 
// should return: ["ili"] // 
// console.log(palindromeSubstrings("abcddcbA")) 
// should return: ["bcddcb", "cddc", "dd"] // 
// console.log(palindromeSubstrings("palindrome")) // should log: [] // 
// console.log(palindromeSubstrings("")) // should log: []


/*

HOW TO DETERMINE A SUBSTRING?
A SUBSTRING IS A STRING OF 2 OR MORE CHARACTERS

getSubStringsFunction
- receives string argument
- assign string to parameter variable
- collect substrings in an array
- return array at the end

string is 'abba'
substrings possible:

ab
abb
abba

bb
bba

ba

return all substring in array: ['ab', 'abb', 'abba', 'bb', 'bba', 'ba']

observations:
a substring is 2 or more chars
substring starts off being the first char + second char in the string
the first char will need to stay the same while each additional char added becomes a new substring until the length of the string is complete.

the substring will then need to become the second char in the string + the third char.
the second char will need to stay the same as each additional char is added to the substring until the length of the string is complete.

the above must occur until all chars have become the starting char for the substring

string = 'abba'
first substr = first char('a') + second char('b'):  ('ab')
substr = first substr('ab') + next char('b'): ('abb')
substr = second substr('abb') + next char('a'): ('abba')
end of length of string

newSubstr needs to be second char from string('b') + third char ('b'); ('bb')
newSubstr = newSubstr('bb') + fourth char('a'): 'bba'
end of length of string

newNewSubstr needs to be third char from string('b') + fourth char('a'): ('ba')
newNewSubstr is third(3) char
3 < string.length(4)
end of length of string
no more comparisons of 2 chars can be made
ALL SUBSTRINGS POSSIBLE: ['ab', 'abb', 'abba', 'bb', 'bba', 'ba']


string = 'abba'
subStr = ''

subStr = string[0] + string[1]

subStr = subStr + string[2]

subStr = subStr + string[3]

** 

subStr = string[1] + string[2]

subStr = subStr + string [3]

**

subStr = string[2] + string[3]

ALGORITHM

INFORMAL:
- set subStringArr = [] to collect the substrings
- set subString variable to take the form of the subString 
- define guard clause
  - if string.length is less than or equal to 1 return subStringArr

- define for loop
  - let baseChar = 0; this will be the first char in the subString
  - while baseChar < string.length; each char in the string will become the baseChar at each iteration
  - baseChar++ this increases the index position of the baseChar from the string so that all chars are covered
    - set subString = string[baseChar] set the value of the subString to be the first char in the string using string referencing

    - define another for loop
      - let nextChar = baseChar + 1; this defines the next char of the subString
      nextChar < string.length; this ensures all chars get covered in the string
      nextChar++ increase the add the next char to the subString
        - subString += string[nextChar]
        - subStringArr.push(subString) push each substring to array
        - return the array after all potential iterations are covered
          - when the baseChar count has increased to the .length of the string


FORMAL:
start, set, get, read while, if/else/elseIf, print, end

set getSubStringsFunction;
set substrArr = [];
set substr;
set baseChar = 0;
set nextChar = 1;
set guard clause
  - if substrArr.length = 0 return substrArr

while (baseChar < string.length)
substr = string[baseChar]

  while (nextChar < string.length)
    substr += string[nextChar]
    substrArr.push(substr)
    nextChar++

  baseChar++
return substrArr;


CODE WITH INTENT:

// string: 'abba'
function getSubStrings (string) {

  let subStringArr = [];
  let subStr;

if (string.length <= 1) {
  return subStringArr
}

 for (let baseChar = 0; baseChar < string.length; baseChar++) {
    subStr = string[baseChar];
  for (let nextChar = baseChar + 1; nextChar < string.length; nextChar++) {
    subStr += string[nextChar];
    subStringArr.push(subStr);
  }
 }

  return subStringArr;
}
// console.log(getSubStrings('abba')); // [ 'ab', 'abb', 'abba', 'bb', 'bba', 'ba' ]

console.log(getSubStrings("abba").includes('ab' && 'abb' && 'abba' && 'bb' && 'bba' && 'ba')); // true


NOW THAT WE HAVE A LIST OF ALL POSSIBLE SUBSTRINGS
DETERMINE IF THE SUBSTRINGS ARE PALINDROMES

INFORMAL:
create a function isPalindrome
receive the substringArray and assign to local parameter variable
if substrArr.length = 0 return substrArr
else we want to take the current substring and reverse the order of characters to compare it to the current string

.split("") the current substring to an array of individual chars
.reverse() the order of the chars
.join("") the chars back together to form a new substring
compare the current substring to the new substring for strict equality
if they are the same then push to new array holding palindromes
do this for each substring received by the function for as many elements in the array argument
return the final array of palindromes as requested by the problem statement



FORMAL:
set getPalindromes function
receive subStrings array and set to local parameter variable
set empty array palindromes
if substrArr.length = 0 return substrArr
else for loop 
  - set currentString = 0
  - while currentString < subStringsArr.length
  - currentString++
if subStrings[currentString] === subStrings[currentString].split('').reverse().join('')
  - palindromes.push(subStrings[currentString])
... return palindromes


CODE WITH INTENT:


function getSubStrings (string) {
  let subStrings = [];
  let subString;

  // guard clause
  if (string.length <= 1) {
    return subStrings;
  }

  for (let currentChar = 0; currentChar < string.length; currentChar++) {
    subString = string[currentChar];
    for (let nextChar = currentChar + 1; nextChar < string.length; nextChar++) {
      subString += string[nextChar];
      subStrings.push(subString);
    }
  }
  return subStrings;
}

function getPalindromes (subStringsArr) {

  let palindromes = [];

  // guard clause
  if (subStringsArr.length === 0){
    return palindromes;
  }

 
  for (let currentString = 0; currentString < subStringsArr.length; currentString++) {
    if (subStringsArr[currentString] === subStringsArr[currentString].split('').reverse().join('')) {
      palindromes.push(subStringsArr[currentString]);
    }
  }

  return palindromes;
}

// let string = 'abba'; // [ 'abba', 'bb' ]


console.log(getPalindromes(getSubStrings('abba'))); // [ 'abba', 'bb' ] √
console.log(getPalindromes(getSubStrings('supercalifragilisticexpialidocious'))); // [ 'ili' ] √
console.log(getPalindromes(getSubStrings('abcddcbA'))); // [ 'bcddcb', 'cddc', 'dd' ] √
console.log(getPalindromes(getSubStrings('palindrome'))); // [] √
console.log(getPalindromes(getSubStrings(''))); // [] √

TEST CASES CONFIRMED


*/