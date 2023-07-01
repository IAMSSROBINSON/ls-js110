# `String.includes()`

- accepts a string argument
- iterates over the string since it is a character array and is iterable
- returns `true` if char is found to exist in the character array / string object
- returns `false` if argument is not present in the character array / string object
- `.includes()` also accepts a second argument, the index position to start looking

```JavaScript
console.log("Hello".includes('H')); // true
console.log("Hello".includes('H', 1)); // false
```