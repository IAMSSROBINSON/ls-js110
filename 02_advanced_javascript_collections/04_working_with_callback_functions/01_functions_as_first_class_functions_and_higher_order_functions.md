# Functions as First Class Functions and Higher Order Functions

## First Class Value:

- Primitive value, Arrays, Object, Functions
- Passed to other functions as arguments
- Returned from functions as their return value
- Assigned to variables

<br>

## Higher Order Functions

- receive functions as arguments
- return functions as a return value

<br>

## Imperative Approach

Tell JavaScript step by step what needs to occur.

```JavaScript
// Transformation operation using for loop:
let numbers = [1, 2, 3, 4];
let transformedNumbers = [];

// imperative approach tells the interpreter what to do at each step
for (let counter = 0; counter < numbers.length; counter++) {
  let currentNumber = numbers[counter];
  let transformedNum = currentNumber * currentNumber;
  transformedNumbers.push(transformedNum);
}
console.log(numbers); // [[1, 2, 3, 4]
console.log(transformedNumbers); // [1, 4, 9, 16]
```

<br>

## Declarative Approach

Declare to `.map()` what you want to be done.

```JavaScript
// Transformation operation using .map:
let numbers = [1, 2, 3, 4]

// declarative approach, give the interpreter an instruction and let it figure the steps out
// only possible because we can treat functions as values .map() takes an anonymous callback arrow function in this case
let transformedNumbers = numbers.map(number => number * number);
console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(transformedNumbers); // [ 1, 4, 9, 16 ]

/*

`.map(()=>{})`
- take a callback function as an argument 
- invokes the callback for each element in the array
- functions that are 'passed' to other functions are called 'Callback Functions'
- functions that 'take' other functions as arguments are called 'Higher Order Functions'
- functions that 'return' other functions as return values are called 'Higher Order Functions'

*/
```