function integerToString (number) {
  let string = '';

  if (number === 0) {
    return "0";
  }

  while (number > 0) {
    let digit = number % 10;
    string = digit + string;
    number = Math.floor(number / 10);
  }
  return string;
}
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

/*

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.


A: Algorithm:
- start
- set function
- receive number argument
- set guard clause for 0 => return "0"
- set string = ''
- loop while number > 0
  - isolate the lastNumber:
    - digit = number % 10
    - string = digit + string (to put the next digit first)
    number = Math.floor(number / 10) (to remove last digit)
return string;
- end

*/