# PEDAC

PEDAC is an approach to solving programming problems. It helps to identify and avoid pitfalls, saves time and allows for solving complex problems more efficiently.

<br>

## P - Understand The Problem

1. read the problem description
1. check test cases if any
1. if any part of the problem is unclear, ask the interviewer to clarify

// PROBLEM: 
// Given a string, write a function changeMe which returns the same 
// string but with all the words in it that are palindromes uppercased. 

// TEST CASES:
// changeMe("We will meet at noon") === "We will meet at NOON" 
// changeMe("No palindromes here") === "No palindromes here" 
// changeMe("") === "" 
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

### Clarify

- what is a palindrome?
  - a word that read the same forwards and backwards

- should the words in the string remain the same if they are already uppercase?
  - from the examples the answer would be yes, they should stay the same

- how to deal with empty string as an input?
  - from the test cases, empty strings are returned as such

- can i assume all inputs are strings?
  - can inputs contain non-string values? 
  - what to do with these values?

- should letter casing be considered when deciding whether a string is a palindrome?
  - yes, `nooN` is not a palindrome but `noon` is. 

- do i need to return the same object or an entirely new one?
  - not in this case since strings are immutable

<br>

### Inputs and Outputs

To conclude this stage of PEDAC, the INPUTS and OUTPUTS for the problem need to be documented and also describe the RULES that need to be followed both EXPLICIT (as mentioned in the problem statement) and IMPLICIT (as implied by the inference of the test cases):


INPUT: string

OUTPUT: string (not the same object )

RULES:
  - EXPLICIT:
    - every palindrome in the string must be converted to uppercase
    - palindromes are case sensitive (noon √ nooN x)


  - IMPLICIT:
    - if string is an empty string then return empty string

<br>




