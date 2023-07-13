  let arr = ['10', '11', '9', '7', '8'];
  
  console.log(arr.sort((a, b) => parseInt(b, 10) - parseInt(a, 10))); // [ '11', '10', '9', '8', '7' ]

/*

How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

The .sort() method is an inbuilt destructive JavaScript method.
- invoking the .sort() method without passing an argument with attempt to sort the elements alphabetically. Since the strings are numerical the method will sort the elements on a character by character basis. Each character will be coerced to its UTF-16 code point number and will be sorted in ascending order(smallest to largest).

This will not produce the desired result so the method should take a callback function as an argument and accept two parameter variables so that the sort order can be determined.

The values of the elements are assigned to the parameter variables (a, b) and start with the first two values

When using the arithmetic operator two operands javascript implicitly coerces the operands to a number to perform the operation. 

When performing the operator a - b, if a negative number is returned then this signifies that operand `b` should be placed before operand `a`

If the return is positive then operand `a` should be placed before `b`

If the return is `0` then the relative order should stay the same.

These operations are performed on the element values to sort the entire array and return the sorted array in ascending order to a new array. 

reversing the order of the operands will produce descending order from largest to smallest values" b - a.

The sort method is destructive however so it will mutate the calling array in place. 

*/