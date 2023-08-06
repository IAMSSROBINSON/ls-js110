function sumOfSums (arrayOfNumbers) {
  let arrayOfSums = getSums(arrayOfNumbers);

  return reduceSums(arrayOfSums);
}

function getSums (arrayOfNumbers) {
  let arrayOfSums = [];
  let previousNumbers = [];
  let sum = 0;

  for (let count = 0; count < arrayOfNumbers.length; count++) {
    let currentNumber = arrayOfNumbers[count];
    previousNumbers.push(currentNumber);
    sum = 0;

    for (let index = 0; index < previousNumbers.length; index++) {
      sum += previousNumbers[index];
    }
    arrayOfSums.push(sum);
  }
return arrayOfSums;
}

function reduceSums (arrayOfSums) {
  return arrayOfSums.reduce((acc, currElem)=>{
    return acc + currElem;
  })
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number. 

P: Understanding The Problem
Create a function that receives an array of at least one number.
The function should consider the first digit a sum.
The function should consider each additional digit + all previous digits a new sum.
The function should combine all the sums for a finalSum and return this number.

Input: array(of numbers)
Output: number(sumOfSums)
Rules:
  Explicit:
  - create a function
  - return a number of sumOfSums
  - input will be at least 1 number in an array

  Implicit:
  - single number in an array returns that number as the sum 

Questions: 
- n/a 

E: Examples and Test Cases
[3, 5, 2]        
(3) + 
(3 + 5) + 
(3 + 5 + 2) --> 21

Mental Model:
How do we add the current number to all previous numbers?
sum = 0;

Start at the first number: 3
currentNumber => 3
push currentNumber
currentSum = 3
push currentSum (3)

Move to the next number: 5
currentNumber => 5
push currentNumber
currentSum = 3 + 5
push currentSum (8)

Move to the next number: 2
currentNumber => 2
push currentNumber
currentSum = 3 + 5 + 2
push currentSum (10)

iterate over all currentSums and return result: 3 + 8 + 10 = result: 21

D: Data Structure
Array: I will utilize an array data structure since selection and transformation will be of importance whilst iterating.

A: Algorithm
- start
- set a function 
- receive the array of numbers
- set variable arrayOfSums and initialize to invocation of getSums(arrayOfNumbers)
  - set function getSums
    - receive arrayOfNumbers
    - set arrayOfSums = [];
    - set previousNumbers = [];
    - set currentSum = 0;
    - define loop
      - count 0
      - for as long as the array.length
      - count++
        - set currentNumber = array[count]
        - push currentNumber to previousNumbersArray 
        - sum = 0;
          - define nested loop
          - index: 0
          - index < array.length
          - index ++
            - sum += previousNumbersArray[index]
          - push sum to arrayOfSums;
      - return arrayOfSums
- set a function reduceSums and pass arrayOfSums
  - iterate over each sum and add to the previous
  - return the result
- return the return of the reduceSums function
- end

C: Code With Intent
(as above OR refactored for simplicity below:)

function sumOfSums (arrayOfNumbers) {
  return arrayOfNumbers.map((value, index)=> arrayOfNumbers.slice(0, index + 1).reduce((acc, currElem) => acc + currElem)).reduce((acc, currElem) => acc + currElem);
}

*/