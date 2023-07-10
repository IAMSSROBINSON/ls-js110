# Sorting In JavaScript

Comparisons on elements / values are the basis for how sorting works. The result of the comparison is used to rearrange the order of a collection resulting in a collection with sorted elements / values.

<br>

## Default behavior of `array.sort();`

As the `array.sort()` method stands without arguments, it coerces all elements except `undefined` (`undefined` is placed at the end of a sorted array) to their string equivalent values and then makes a comparison based on the string values Unicode character codes - the result is not a sorted array as you would expect but there is a certain logic to it. The characters are compared on a digit by digit basis for their Unicode Character Codes (shorter strings that are the same up until a point of difference will be placed first). 

<br>