# Variable Reference For Nested Collections

Variables can reference arrays that are within a collection:

```JavaScript
let a = [1, 2];
let b = [3, 4];

let array = [a, b];
console.log(array); // [ [ 1, 2 ], [ 3, 4 ] ]
```

The variables `a` and `b` are pointers to their respective array objects and reference them when referred to.

If the `a` array object is modified then all references that contain `a` are updated since `a` is a pointer to the mutually referenced array object.

```JavaScript
let a = [1, 2];
let b = [3, 4];

let array = [a, b];

a.push(5);
console.log(array); // [ [1, 2, 5], [3, 4]];
```

Modifying the first array in variable `array` at index position `[0]` will also update the array `a` points to since they are the same array object.


```JavaScript
array[0][3] = 6; // an element at index position [2] was previously pushed so [3] is the next sequenced index
console.log(array); // [ [ 1, 2, 5, 6 ], [ 3, 4 ] ]
console.log(a); // [ 1, 2, 5, 6 ]
```

<br>