# `String.endsWith()`

- Called on a string
- Accepts a string as an argument
- Returns boolean `true` if string endsWith the argument string (can be more than one character)
- Returns `false` otherwise

```JavaScript
let string = "abcd";
console.log(string.endsWith('cd')); // true
console.log(string.endsWith('d')); // true
console.log(string.endsWith('a')); // false
```