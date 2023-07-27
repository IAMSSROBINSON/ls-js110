function isBalanced (string) {
  let counterForward = 0;
  let counterBackward = 0;

  if (string.startsWith(')') || string.endsWith('(')){
    return false;
  }

  for (let index = 0; index < string.length; index++) {
   if (string[index] === '(') {
    counterForward += 1;
   } else if (string[index] === ')') {
    counterBackward += 1;
   }
  }

  return counterForward === counterBackward;
}


console.log(isBalanced("What (is) this?") === true); // => true
console.log(isBalanced("What is) this?") === false); // => true
console.log(isBalanced("What (is this?") === false); // => true
console.log(isBalanced("((What) (is this))?") === true); // => true
console.log(isBalanced("((What)) (is this))?") === false); // => true 
console.log(isBalanced("Hey!") === true); // => true 
console.log(isBalanced(")Hey!(") === false); // => true 
console.log(isBalanced("What ((is))) up(") === false); // => true

/*

Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

P: Understanding The Problem
Clarification:
Create a function that receives a string.
If all parenthesis in the string occur in a matching forwards '(' and backwards ')' pair then return true, otherwise return false.

Input: string(with characters and parenthesis);
Output: boolean (true if balanced match, else false)
Rules:
  Explicit:
  - return boolean true/false 
  - must be balanced match of parenthesis to be true 

  Implicit: 
  - if not parenthesis exist in the string return true 
  - Parenthesis can be nested and still balanced 
  - 1 parenthesis is an automatic false 
  - parenthesis may not be symmetrical

Questions: 
- n/a

E: Examples and Test Cases 
((What)) (is this))  : false

(  count: 1
(  count: 2
)  count: 1
)  count: 2

(  count: 3
)  count: 3

)  count: 4

uneven count 
: x : false (has no opposing parenthesis but is the correct direction)

- so must start with (
- must end with )

--------------------

((What) (is this))    : true

( starts with √
(

)

(
)
)



Mental Model:
  - if the string starts with a parenthesis the wrong way around then return false 
  - if a string ends with a parenthesis the wrong way around then return false 

  Count parenthesis:
  - start count at 0
  - if the counts for parenthesis types are not equal return false 
    - if the count of any is 1 return false 
  - otherwise return true

D: Data Structure
Array: I will use an array for ease of looping and storing individual elements
I will also use variable memory allocation for storing data values

A: Algorithm
- start
- set a function 
- set a counterForward 
- set a counterBackward
- if string !includes('()') return true;
  - counter would be 0 so return true
- if string.startsWith ')' return false 
- if string.endsWith '(' return false 
- loop over string and increase counts on occurrence
- return counterForward === counterBackward
- end

C: Code With Intent

function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

*/