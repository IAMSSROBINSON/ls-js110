# `String.toUpperCase()` and `String.toLowerCase()`

- Instance methods called on an instance of a String object
- Instead they are applied to the string object
- Returns a new resulting string of the caller in Uppercase / Lowercase respectively
- Bracket notation can be used to access a specific character of the string to apply the method to, returning that character as a new character transformed
  
```JavaScript
let string = "hello";
console.log(string[0].toUpperCase().concat(string.slice(1),' ', 'World!')); // Hello World!
```