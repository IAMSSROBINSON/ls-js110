# `Array.prototype.reverse()`

A built in JavaScript array method that reverses the order of elements as they are presented in the array. It does return a new array but the caller is still mutated unless copied first with `.slice() or [...array]`. Can be called back and forth more than once to reverse the order back to the original order and so on.

<br>

## Example:

```JavaScript
let array = [1, 2];
array.reverse(); 
console.log(array); // [ 2, 1 ], mutates the caller in-place / at the same address in computer memory
```