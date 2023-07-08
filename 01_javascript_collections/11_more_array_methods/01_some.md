# `Array.prototype.some()`

This method tests whether at least one element in the calling array passes a conditional test. If at least one element does then the method returns `true`, otherwise it returns `false.`

- called on an array
- does not mutate the caller
- callback invoked on each element in the calling array 
  - callback has a boolean return value for the element used in the expression
- the method returns boolean true if at least 1 return value from the callback is truthy
  - otherwise the method returns `false`
  
<br>

## Example:

```JavaScript
console.log([1, 2, 3].some(num => num > 2)); // true
console.log([1, 2, 3].some(num => num > 4)); // false
```

<br>

## Using `array.some()` with Objects

```JavaScript
let animals = {
  a: 'ant',
  b: 'bear',
  c: 'cat'
}
console.log(Object.values(animals).some(animal => animal === 'bear')); // true
```