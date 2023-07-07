# More Flexible Functions

This involved defining functions in such a way that additional arguments can be passed to alter the logic of the iteration and make the function more generic. 

The result can go more than one way depending on the selection criterion provided as an argument along with a collection argument.

<br>

```JavaScript
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
// Try coding a function that lets you multiply every array item by a specified value. As with doubleNumbers, don't mutate the array, but return a new array instead.

// multiplier is the transformation criterion because it could be any number
function multiply (array, multiplier) {
  let multipliedElements = [];
  for (let counter = 0; counter < array.length; counter++) {
    let currentElement = array[counter];
    multipliedElements.push(currentElement * multiplier);
  }

  return multipliedElements;
}
console.log(myNumbers); // [ 1, 4, 3, 7, 2, 6 ]
```

<br>

## Attention

- Pay attention to when the original collection is mutated vs when to return a new collection
- Think about how to make a function more generic by adding parameters to specify criteria for selection or transformation
- When chaining actions on collections pay attention to the return value, especially on empty potential collections or `undefined` as this can lead to broken programs


