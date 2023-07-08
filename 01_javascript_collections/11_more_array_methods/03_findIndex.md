# `Array.prototype.findIndex()`

Built in JavaScript array method that returns the index of the first element to evaluate to true from the callback functions expression on the element.

- called on an array
- takes a callback function as an argument
- iterates over each element
  - returns the index of the first element to return a truthy expression value
  - otherwise returns `-1` if no elements returns truthy values from the callback function (instead of `undefined` as with .find())

<br>

## Example:

```JavaScript
let array = [1, 2, 2, 4];
console.log(array.findIndex((el) => el === 2)); // 1
```