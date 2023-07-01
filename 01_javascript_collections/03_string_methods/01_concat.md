# `String.concat()`

- Used to combine string values together
- Does not mutate the caller since strings are primitive values and are immutable
- Returns a new resulting string value when called on a string object
- Works just like the concatenation operator `'+'` on string operands
- Accepts more than 1 argument which will all be concatenated into a single string

```JavaScript
console.log('Hello'.concat(' ',  'World!')); // Hello World!
```