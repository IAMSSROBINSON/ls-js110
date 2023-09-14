function isPalindromicNumber (number) {
  return number === Number(String(number).split('').reverse().join(''));
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

/*

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

P: Understanding The Problem
Create a function that takes a number.
If the number reads the same forwards and backwards return true, otherwise return false.

Input: Number
Output: Boolean
Rules:
  Explicit:
  - create a function
  - receive number argument
  - return true if number reads the same forwards and backwards, else false

  Implicit:
  - number will be whole
  - can use methods of coercion

Questions:
- n/a

E: Examples and Test Cases
Input: 123210
Output: false

Forward: 123210
Backward: 012321

Mental Model:
Receive number argument.
Coerce to string and store to variable.
Reverse string.
Compare and return result.


D: Data Structure
I will utilize variable storage for assigning values and reassigning as required since complex data structures are not required for the purposes of this task.


A: Algorithm
- start
- set function
- receive number argument
- return number === Number(String(number).split('').reverse().join(''));
- end


C: Code With Intent

*/

/*

Description:

On `line 4` of the code a `console.log()` method is invoked and passes the return of a function invocation as an argument to ouput it's value to the console.

The function passed `isPalindromicNumber` is invoked and passes a number argument to the function. 

The function declaration for this function in on `line 1`. The value of the argument is assigned to the local parameter variable `number`.

Within the body of the function on `line 2` a `return` statement evaluates whether the value of the `number` variable has strict equality to the number in reverse order. It does this by coercing the number into a string using the `String()` coercion method and passing the `number` as an argument. The return value is a string value with the digits of the number as characters. Method chaining is used to invoke the `.split()` method on this string to convert the string into an array of characters. The returned array has the `.reverse()` method invoked on it which mutates and reverses the order of the elements within the array thereby presenting the elements backwards from forwards. The same returned array then has the `.join()` method invoked on it which coerces the elements of the array into a single string value and returns it to the caller. Lastly the `Number()` method is invoked on the reverse string returned and coerces the character digits into a number value which is then compared for strict equality to the version of the number that reads forwards. 

If the number reads the same forwards and backwards the expression evaluates to `true` and returns boolean `true` otherwise it returns boolean `false` and it is this value that is returned to the caller (as we began) on line 4 - to output the value to the console thereby confirming or denying the numbers status as a Palindromic number.

*/

/*

Further Exploration
Suppose the number argument begins with one or more 0s. Will the solution still work? Why or why not? Is there any way to address this?

It would not work with leading 0s since JavaScript removes these since it will treat the value as an octal (base 8) value if the numbers are between 0-7 or decimal(base 10) if it encounters numbers 8, 9.  

To make it work the number can be immediately coerced to a string and the reversed string can be compared to itself thereby maintaining the leading zeros for both comparisions.

*/