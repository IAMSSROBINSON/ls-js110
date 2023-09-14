function isRealPalindrome (string) {
  string = removeNonAlphaNumericChars(string).toLowerCase();
  return string === string.split('').reverse().join('');
}

function removeNonAlphaNumericChars (string) {
  let newString = '';
  let stringArrChars = string.split('');

  for (let idx = 0; idx < stringArrChars.length; idx++) {
    let currentChar = stringArrChars[idx];
    if (/[a-z0-9]/i.test(currentChar)) {
      newString += currentChar;
    }
  }
  return newString;
}
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

/*

Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.


P: Understanding The Problem
Create a function that takes a string argument.
The function should determine if the string is a case insensitive palindrome but should ignore non-alphanumeric characters.

Input: String
Output: Boolean (true: if string is palindrome, false: if not palindrome)
Rules:
  Explicit:
  - create a function
  - receive the string argument
  - determine if string is case insensitive palindrome
    - uppercase, lowercase does not matter
  - ignore characters that are not alphanumeric: a-z 0-9 included only

  Implicit
  - empty character spaces are removed since they are not alphanumeric characters

Questions:
- n/a


E: Examples and Test Cases
Input: "Madam, I'm Adam"
Output: true

Remove non-alphanumeric characters:
Forwards: madamimadam
  - removed: case, space, symbols

Backwards: madamimadam

Mental Model:
Set function. Receive stringArgument.
Send string to function: removeNonAlpha and return string
  - split string into chars
  - set newString
  - reassign newString to only contain alphanumeric chars
  - return newString
- return newString === newString.split('').reverse()


D: Data Structure
I will utilize variable storage capacity for assigning and reassigning values as required.


A: Algorithm
- start
- set function
- receive argument string
- set removeNonAlphaNumeric function
  - pass string
  - set newString
  - split string
  - iterate over string
  - reassign newString to only alphanumeric chars
  - return newString
- return newString === newString.split('').reverse().join('');
- end


C: Code With Intent

*/

/*

Description:

On `line 18` a `console.log` method is invoked and passes a function invocation as an argument to output the return value to the console.

The `console.log` method passes the function `isRealPalindrome` which itself passes a string argument to the function. 

The function declaration for the function argument passes is on `line 1` of the code. The value of the string argument passed is assigned to the locally declared parameter variable `string`.

Within the body of the function on `line 2` the local variable `string` is reassigned to the return value of a function invocation `removeNonAlphaNumericChars` and the argumenet `string` is passed to the function. We also can see here that a string value is expected to be returned since method chaining is used to coerce the return value `toLowerCase()`.

The function declaration for the `removeNonAlphaNumericChars` occurs on line 6 and the string value is assigned to the local parameter variable `string`.

Within the body of this function on `line 7` a `newString` variable is declared an initialized to an empty string value.

On `line 8` the `.split()` method is used to convert the value of the `string` variable into an array of characters and assigns this array to a new variable: `stringArrChars`.

On line 10 a `for loop` is defined which will iterate over each character within the array as many times as there are elements within the array.

The current character being iterated on is defined on `line 11` and on `line 12` we encounter an `if` statement which seeks to evaluate a condition using regular expression pattern matching syntax. The condition evaluates whether the current character being iterated on is either of upper or lowercasing and is a character that falls between the letters a-z or digits between 0-9. 

If it is then the `if` clause is invoked and on `line 13` the value of the variable `newString` is reassigned using the `additional assignment operator` to append the value of the `currentChar` to itself. If the condition evalues to a falsy value then the loop iterates to the next case without changes.

When all elements within the array have been iterated over the value of the variable `newString` is completed and it is returned to the caller as seen on `line 16`.

The caller picks up on `line 2` whereby the value of the returned string is coerced to lowercase and reassigns the value of the variable `string`.

On line 3 the final return value evaluates the expression as to whether the value of the `string` variable has strict equality to the same `string` variable but in reverse, essentially asking if the characters of the string read the same forwards and in reverse.

If this evaluates to true then boolean `true` is returned to the caller, otherwise boolean `false` is returned to the caller.

The caller ends as it began, on `line 18` whereby the value returned is output to the console thereby confirming whether the string argument passed reads the same forwards and in reverse thereby confirming or denying it's status as a case insensitive Palindrome.

The same process then occurs for each other test case with different arguments.

*/