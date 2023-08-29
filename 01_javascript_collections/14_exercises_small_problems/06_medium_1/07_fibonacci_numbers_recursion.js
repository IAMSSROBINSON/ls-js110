function fibonacci (nthFibNum) {
  if (nthFibNum < 3) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let t;

  do {
    t = a + b;
    b = a;
    a = t;
  } while (fibonacci(nthFibNum - 1));

  return t;
 
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

/*

The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2
This simple sequence can be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}
A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (num === 1), in the sum function above.
The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.


P: Understanding The problem
Create a function that receives an nth fibonacci number argument e.g 5 =>
  representing the fifth fibonacci number.
The function should use recursion to call itself, calculate and return the
  nth(5th) fibonacci number.

Input: Number(nth fibonacci number)
Output: Fibonacci number
Rules:
  Explicit:
  - Create a function
  - Receive the argument(nth number)
  - Use recursion
    - baseCase
    - function calls itself
    - function uses previous value calculated
  - Return nth Fibonacci number
  - Fibonacci numbers start at 1(index0 =>
    first fib number) and 1(index1 => second fib number)
    in a list of fib numbers.

  Implicit:
  - Number provided to the function will be the nth Fibonacci number
  e.g. 1st, 2nd, 3rd, 4th not its index position in a list of numbers

Questions:
- n/a


E: Examples and Test Cases
fibonacci(5);       // 5

Argument: 5
Return the fifth Fibonacci number

firstFibNum = 1
SecondFibNum = 1
ThirdFibNum = 2
FourthFibNum = 3
FifthFibNum = 5 √4
SixthFibNum = 8

Mental Model:
The function will need a condition to stop iterating.
Since the nth number should be the number of times the function needs
    to iterate to retrieve the fibonacci number - a count starting at 0
      can count up to the nth number

count 0
the first fibNum = 1

count 1
the second fibNum = 1

count 2
the third fibNum = 2

count 3
the fourth fibNum = 3

count 4
the fifth fibNum = 5 √ (nth number(5) === the fifth fibNum which happens to be 5

count 5
the sixth fibNum = 8 (if nth number(6) === the sixth fibNum: 8


The number passed recursively will have to be the currentFibNum since it will be used in the next iteration if the count is still less than the nthArgument


D: Data Structure
Array: I will utilize an array data structure,
  potentially for storing calculated fibNums if required.


A: Algorithm
- start
- set a new function
- receive the nthFibNum argument

- return the fibNumOfTheNthNumberArgument
- end


C: Code With Intent

*/