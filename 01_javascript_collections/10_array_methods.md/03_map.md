# `Array.prototype.map()`

A built in JavaScript array method that iterates over each element in an array and return an array containing the result of any transformations performed on the element.

- called on the array
- accepts a callback function
  - callback is called on each element 
  - performs transformation based on the return value of the callback
- returns a new array with transformed elements

<br>

## Examples:

```JavaScript
// Select all of the vowels in a string and get a new string that contains all of those vowels, 
// and nothing else.
let str = "What's up, Doc?";
let newString = str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).join('');
console.log(newString); // auo
```

<br>

```JavaScript
// Let's duplicate every character in a string and return the result:
let str = "What's up, Doc?";

let doubleChars = str.split('').map(char => char + char).join('');
console.log(doubleChars); // WWhhaatt''ss  uupp,,  DDoocc??
```