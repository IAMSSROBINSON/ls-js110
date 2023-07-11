# Other Nested Structures

Objects can be nested inside of array also.

```JavaScript
// the object is the 3rd element inside of the array, it appears an index 2 
let array = [1, 2, {a: 3}]; // using array referencing we can access the object element: array[2] => {a: 3}
```

## Inserting a New Key : Value Pair into the Object

New key: value pairs can be added to nested objects and they are accessed in the usual ways:

```JavaScript
// the element within the array is first referenced: array[2], then the object key: value is updated: ['b'] = 4;
array[2]['b'] = 4;
console.log(array); // [1, 2, {a: 3, b: 4}]

array[2].c = 5; // dot notation and bracket notation can be used with key:value creation syntax
console.log(array); // [ 1, 2, { a: 3, b: 4, c: 5 } ]
```

<br>