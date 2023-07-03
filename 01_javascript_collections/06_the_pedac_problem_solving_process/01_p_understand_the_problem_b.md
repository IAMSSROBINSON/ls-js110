### PROBLEM STATEMENT

Given a string, produce a new string with every other word removed.

<br>

#### P: Understanding The Problem

#### Clarify & Restate The Problem:

A string is passed to a function
The function should receive the string
Within the function after the first word within the string, every other word should be removed
The strings that remain should form a final string
The final string should be returned

QUESTIONS:

- Can it be expected that the argument will always be a string data type?
- If not what to do with the non-string data type?
- What should be done with empty strings or space character only arguments?
- What constitutes a word within the string?
  * words are delimited by spaces
- What is meant by 'other' word?
- Should the returned value be a single string or when each other word is removed should that produce a string to be returned before continuing to the next iteration?


#### Rules & Requirements:

  ##### Explicit Requirements:

  INPUT: string
  OUTPUT: new string 
  RULE: new string literal should be composed of every other word in the string removed


  ##### Implicit Requirements:

  - create a mechanism / function that can perform this action
  - the mechanism should be able to return the result of performing the action

