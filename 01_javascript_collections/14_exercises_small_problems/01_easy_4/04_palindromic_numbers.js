function isPalindromicNumber (number) {
  let stringNum = String(number);
  let stringOfCharsArrReversed = stringNum.split('').reverse().join('');
  let toNumFromString = Number(stringOfCharsArrReversed);

  return number === toNumFromString;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

/*

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

PEDAC:

- set function isPalindromicNumber
- coerce number to string
- split string into chars arr
- reverse chars arr
- join char arr
- coerce to number with number function 
- strict equality comparison to original num and reversed num



*/