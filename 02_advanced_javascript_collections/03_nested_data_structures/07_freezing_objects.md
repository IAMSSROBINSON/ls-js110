# Freezing Objects

When you freeze an array or object it will stop the array and object and their values at the top level from being mutated. This means you cannot add to the array or object and you cannot reassign any values at the top level.

If nested objects exist within the array or object however, they will still be able to be mutated as freezing will not work on them.

<br>

## `Object.freeze()`

Trying to add values to an array or object that has been frozen or if you try to reassign a value it will not throw an error, it will however just fail silently and do nothing to the program, with no changes being reflected.

- if you try to use a method on an array or object that has been frozen, this will throw an error! and raise an exception. 

- Primitive values are already frozen in that they cannot be mutated and only new values or reassignment of the variable that stores them can be performed.

```JavaScript
let array = [1, 2, [3, 4]];
Object.freeze(array);

// using a method on a frozen object throws an error
// array.push(100); // TypeError: Cannot add property 3, object is not extensible

// reassignment on a frozen object element fails silently, no error thrown, reassignment ignored
array[3] = 100;
console.log(array); // [ 1, 2, [ 3, 4 ] ]

// element referencing and assignment within a nested array successful on a frozen object because the freeze only works at the top level not for nest objects
array[2][2] = 100;
console.log(array); // [ 1, 2, [ 3, 4, 100 ] ]
```

<br>

## Checking if an Object is Frozen

When objects are deep copied - the `Object.freeze()` is not carried to the copy.

```JavaScript
// ARRAY:
let array = [1, 2, [3, 4]];

// array object frozen
Object.freeze(array);

// array is copied turned into a string, string returned
let serializedArray = JSON.stringify(array);
console.log(serializedArray); // "[1,2,[3,4]]"

// the string array is redeemed back to an object and stored in a new variable, deep copy complete
let deepCopiedArray = JSON.parse(serializedArray);
console.log(deepCopiedArray); // [ 1, 2, [ 3, 4 ] ]

// push to the deep copied array mutates the deep copy but not the original
deepCopiedArray[2].push(100);
console.log(deepCopiedArray); // [ 1, 2, [ 3, 4, 100 ] ]
console.log(array); // [ 1, 2, [ 3, 4 ] ]

// checking if deep copy array object is frozen and original
console.log(Object.isFrozen(deepCopiedArray)); // false
console.log(Object.isFrozen(array)); // true
```