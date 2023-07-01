# `String.charAt()`

- Called on a String object
- Accepts a numerical index position argument
- Returns a new string of the character of the string at that index position
- Similar to accessing a specific character at an index position within a string using bracket notation[] and returning that character
- Returns an `emptyString` "" if providing an unoccupied index position (bracket notation will return `undefined` for attempting to access unoccupied index positions)

```JavaScript
let characterArray = 'Hello World!';
console.log(characterArray.charAt(0)); // H
console.log('Hello'.charAt(5)); // ""
```