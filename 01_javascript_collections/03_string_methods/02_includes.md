# `String.includes()`

- Accepts a string argument
- Iterates over the string since it is a character array and is iterable
- Returns `true` if char is found to exist in the character array / string object
- Returns `false` if argument is not present in the character array / string object
- `.includes()` also accepts a second argument, the index position to start looking

```JavaScript
console.log("Hello".includes('H')); // true
console.log("Hello".includes('H', 1)); // false
```