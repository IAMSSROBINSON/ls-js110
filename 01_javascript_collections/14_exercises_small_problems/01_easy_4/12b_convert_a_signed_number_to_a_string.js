function signedIntegerToString (number) {
  if (number === 0) {
    return "0";
  }

  let sign = getSign(number);

  switch (sign) {
    case "+":
      return sign + numberToString(number);

    case "-":
      return sign + numberToString(Math.abs(number));
  }
}

function numberToString (number) {
  let string = '';

  while (number > 0) {
    let digit = number % 10;
    string = digit + string;
    number = Math.floor(number / 10);
  }
  return string;
}

function getSign (number) {
  if (Math.sign(number) === 1) {
    return "+";
  } else return "-";
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

/*

In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.


A: Algorithm
- start
- set function
- receive argument number
- set guard clause for 0 => returns "0"
- let sign = Math.sign(number)
  - if Math.sign(number) === 1 => return "+"
    - return sign + numberToStringConversion(number) => for "+"
  - else return sign + numberToStringConversion(Math.abs(number)) => for "-"
- end

*/