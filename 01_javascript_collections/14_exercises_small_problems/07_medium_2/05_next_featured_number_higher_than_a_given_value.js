function featured (numberArgument) {
  const LIMIT = 9876543201;
  if (numberArgument === LIMIT) {
    return "There is no possible number that fulfills those requirements.";
  }

  for (let idx = numberArgument + 1; idx < LIMIT; idx++) {
    if (isOdd(idx) &&
    isMultipleOf7Function(idx) && isEachDigitAppearsOnlyOnceFunction(idx)) {
      return idx;
    }
  }
  return LIMIT;
}

function isOdd (currentNum) {
  return currentNum % 2 === 1;
}

function isMultipleOf7Function (currentNum) {
  return currentNum % 7 === 0;
}

function isEachDigitAppearsOnlyOnceFunction (currentNum) {
  let match = false;
  let currentNumStrArr = currentNum.toString().split('');

  for (let idx1 = 0; idx1 < currentNumStrArr.length; idx1++) {
    let currentDigit = currentNumStrArr[idx1];

    for (let idx2 = (idx1 + 1); idx2 < currentNumStrArr.length; idx2++) {
      let nextDigit = currentNumStrArr[idx2];

      if (currentDigit === nextDigit) {
        return match;
      }
    }
  }
  return !match;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.


P: Understanding The Problem
Create a function that takes a unique number.
The function should determine if the number is aFeatureNumber: isAnOddNumber, isMultipleOf7 and if eachDigitOnlyAppearsOnce(no repeating digits). 
It is is then the function should return the next featured number greater than the argumentNumber.
The return value should not be greater than the feature number limit: 9876543201
If the argument is not a feature number or there is no next feature number then return the error message

Input: Number(unique number)
Output: Number(next feature number greater than argument number)
Rules:
  Explicit:
  - create a function
  - receive the argument number
  - validate isFeatureNumber
    - isOddNumber
    - isMultipleOf7
    - eachDigitAppearsOnlyOnce

  Implicit:
  - if next feature number must be greater than limit 9876543201 then return limit 9876543201
  - if numberArgument is the limitNumber 9876543201 then return error message

Questions:
- n/a


E: Examples and Test Cases
12          // 21

numberArgument: 12
nextNumber: 13
  - isOdd => true
  - isMultipleOf7 => false
    - nextFeatureNumber => false
nextNumber: 14
  - isOdd => false
    - nextFeatureNumber => false

nextNumber: 15
  - isOdd => true
  - isMultipleOf7 => false
    - nextFeatureNumber => false

nextNumber: 16
  - isOdd => false
    - nextFeatureNumber => false

nextNumber: 17
  - isOdd => true
  - isMultipleOf7 => false
    - nextFeatureNumber => false

nextNumber: 18
  - isOdd => false
    - nextFeatureNumber => false

nextNumber: 19
  - isOdd => true
  - isMultipleOf7 => false
    - nextFeatureNumber => false

nextNumber: 20
  - isOdd => false
    - nextFeatureNumber => false

nextNumber: 21
  - isOdd => true
  - isMultipleOf7 => true
  - eachDigitAppearsOnlyOnce:
    - 2 => true
    - 1 => true
      - nextFeatureNumber => true => return 21

Mental Model:
ReceiveNumberArgument
  - guardClause:
    - if argument === isLimit(9876543201)
    - return:  "There is no possible number that fulfills those requirements."

    - isOddFunction
    - isMultipleOf7Function
    - isEachDigitAppearsOnlyOnceFunction
  - if any function fails return error message:
  - if all pass then continue to findNextFeatureNumber
    - for loop
      - index = argumentNumber; index < limit; index++
      if (isOddFunction(index) && isMultipleOf7Function(index) && isEachDigitAppearsOnlyOnceFunction(index)) {
        return index;
      }


D: Data Structure
Array: I will utilize an array data structure to validate each digit appearing only once.


A: Algorithm
- start
- set function: featured
- receive argument integer: function featured (argumentNumber) {}
- set guardClause
 - if numberArgument === limit/9876543201 return "There is no possible number that fulfills those requirements.";

- define loop:
 - idx = numberArgument
 - while idx < limit;
 - idx++

  - set function: isOdd(idx)
  - return idx % 2 === 1;
  - set function: isMultipleOf7Function(idx)
  - return idx % 7 === 0;
  - set function: isEachDigitAppearsOnlyOnceFunction(idx)
  - coerce idx to string
  - split string into charArray
  - set eachDigitOnce = false;
  - define 2dimensional loop:
        - loop1: iterate over charArray for as long as the array length
        - idx1 = 0
        - currentDigit = loop1[idx1]
        - idx1++
          - loop2: iterate over charArray for as long as the array length
          - idx2 = idx1 + 1
          - idx2++
          - nextDigit = loop2[idx2]
          - if (currentDigit === nextDigit) {
            return eachDigitOnce;
          }
        - eachDigitOnce = true;
        - return eachDigitOnce

- if (isOdd(idx) && isMultipleOf7Function(idx) && isEachDigitAppearsOnlyOnceFunction(idx)) {
  return idx;
} else return limit;
- end


C: Code With Intent

*/