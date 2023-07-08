# `Array.prototype.find()`

- called on an array
- takes a callback as an argument
- returns the first element for which the callback returns a truthy value
  - if none of the callbacks return a truthy result then `undefined` is returned by the method

<br>

## Example:

```JavaScript
let array = [1, 2, 2, 4];
console.log(array.find(el => el > 2)); // 4
// method returns `undefined` if no callback return values were truthy
```