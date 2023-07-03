# Data Structures and Algorithms

Data structures influence the algorithm to come after. 
Decide what data structure is required to use - array / object?
Provide sufficient detail in the algorithm so that the coding with intent becomes easier to implement.

<br>

Try to work through the "understand the problem" part of this problem on your own, and write the input, output, and rules for it.

// PROBLEM: 
// Given a string, write a function `palindromeSubstrings` which returns 
// all the substrings from a given string which are palindromes. Consider // palindrome words case sensitive. 

// Test cases: 
// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")) 
// should return: ["ili"] // 
// console.log(palindromeSubstrings("abcddcbA")) 
// should return: ["bcddcb", "cddc", "dd"] // 
// console.log(palindromeSubstrings("palindrome")) // should log: [] // 
// console.log(palindromeSubstrings("")) // should log: []


P: Understand The Problem

CLARIFY
- What is a Palindrome?
  - a word that reads the sames forwards and backwards
- Since we are dealing with sub-strings of a string, how many characters would be considered a palindrome?
  - a palindrome substring is 2 or more characters in length
- What to do with empty strings?
  - return empty array
- Will all values be strings?
  - yes it does appear that way
- What to do with non-string values?
  - assume all values to be strings for now
- What if a string contains substrings separated by a space?
  - there are no examples of this consider only single word arguments
- What to do with non palindromes?  
  - return empty array


INPUT: string

OUTPUT: array of substring elements that are palindromes

RULES:
  EXPLICIT:
    - palindromes are strings read the same forwards and backwards
    - return only confirmed palindromes
    - strings that are palindromes are case sensitive (noon √, nooN x)

  IMPLICIT:
    - a substring palindrome is 2 or more characters
    - empty strings return an empty array
    - no palindromes return an empty array

DATA STRUCTURE: return an array

<br>

## Algorithm

DETERMINING A SUBSTRING

- 2 or more characters

STRING: halo
ha
hal 
halo
alo
al
lo 

['ha', 'hal', 'halo', 'alo', 'al', lo]  