# Shallow Copy

Sometimes it is useful to make a copy of a collection. This is especially true when you want to make changes to a collections values but you don't want to mutate the original values.

<br>

## Shallow Copy Arrays

Shallow copies only copy the top level of the elements to the new array (nested objects will be copied as references to the original values and changes made to either object will update the copy and original - nested objects are shared objects between both the original and the copy, this goes for both nested array and nested objects within arrays).

- `array.slice()`
  - passing no arguments will return a copy of an array

- `[...array]`, `(...array)`
  - the spread operator can copy the values of an array to a new array
  - the array values can also be extracted for other purposes and not put into a new array 

- `let newArray = Array.from(originalArray)`
  - Array.from() creates a copy of an array and returns it to the variable

<br>

Mutations to the top level elements (not objects) will not be updated on the original:

```JavaScript
let array = [1, 2];
let newArray = Array.from(array);
newArray.push(100);
console.log(newArray); // [ 1, 2, 100 ], top level pushed to
console.log(array); // [ 1, 2 ], original array stayed the same
```

<br>

## Shallow Copy Objects

Copies of objects can be made also:

- `Object.assign(objCopyVariable, originalObjVariable);`
  - `Object.assign()` copies the properties from the source and adds them to the copy
  - any properties with the same key are overwritten with the new values
  - creates shallow copy, any nested objects or arrays are shared by the original and the copy and changes will reflect in both since they are references to the same object

```JavaScript
let obj = {
  a: 1, 
  b: 2,
  c: [3, 4]
}

// original values copied
let copyObj = {};

Object.assign(copyObj, obj);
console.log(copyObj); // { a: 1, b: 2, c: [ 3, 4 ] }
console.log(obj); // { a: 1, b: 2, c: [ 3, 4 ] }

// shared object mutates original and copy
copyObj['c'].push(5);
console.log(copyObj); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
console.log(obj); // { a: 1, b: 2, c: [ 3, 4, 5 ] }

// changes made at the top level are not shared between original and copy
copyObj['b'] = 100;
console.log(copyObj); // { a: 1, b: 100, c: [ 3, 4, 5 ] }
console.log(obj) // { a: 1, b: 2, c: [ 3, 4, 5 ] }
```