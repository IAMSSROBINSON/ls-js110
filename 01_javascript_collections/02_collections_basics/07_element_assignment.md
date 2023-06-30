# Element Assignment

## Array Element Assignment

An array elements index position can be used to reassigned its value using the assignment operator - this will be a destructive action that will mutate the original array.

- trying to increase the value of an array element that does not exist will return `NaN`.

<br>

## Object Key Assignment

Dot notation and Bracket notation can be used with the assignment operator to reassign the values in an object by referencing the object property. This is also a destructive action that mutates the original object.

<br>

## String Character Assignment

JavaScript Strings are immutable and cannot be mutated permanently - reassignment of a character using bracket notation to access the character at an index position will throw raise an error but it will be ignored (this is not the same as in C when using the `<string.h>` header file and the strstr()` function). 

Instead just create / construct / return a new string if wanting to change a string variables value.



