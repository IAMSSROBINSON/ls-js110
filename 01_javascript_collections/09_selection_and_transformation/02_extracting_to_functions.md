# Extracting To Functions

Specific actions on transforming collections can be extracted for convenience to helper functions that may or may not need to be repeated on another occasion.

<br>

## Transforming a Subset of Elements in a Collection

Instead of transforming every single element in a collection, a subset of elements can be transformed based on certain criteria / conditions being met e.g. transform only odd numbers.

- Remember to be intensional about not mutating the argument or mutating it and whether to return a new collection. 

```JavaScript
// double elements at odd indices in an array and return a new array
let myNumbers = [1, 4, 3, 7, 2, 6];

function transformOddIndices(array) {
  let oddIndicesTransformed = [];

  for (let i in myNumbers) {
    if (i % 2 !== 0) {
      oddIndicesTransformed.push(myNumbers[i] * 2);
    } else {
      oddIndicesTransformed.push(myNumbers[i]);
    }
  }

  return oddIndicesTransformed;
}

console.log(transformOddIndices(myNumbers)); // [ 1, 8, 3, 14, 2, 12 ]
```

### Identity Transformation

`Identity Transformation` is a term used that occurs when we state a condition for transforming elements but no elements meet the condition and thus no transformations to the collection or subset are made. Although no actual transformations are made it is still considered an `Identity Transformation`.