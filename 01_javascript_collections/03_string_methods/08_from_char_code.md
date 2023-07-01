# `String.fromCharCode()`

- Called on the String object
- Accepts the character code (Unicode code point) as 1 or more arguments
- Returns the string character represented by the Unicode point

```JavaScript
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(98)); // b
console.log(String.fromCharCode(99)); // c

console.log(String.fromCharCode(97, 98, 99)); // abc
```