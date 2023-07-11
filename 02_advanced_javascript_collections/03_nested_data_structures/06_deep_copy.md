# Deep Copy

There is a round about way to make a deep copy that only works with nested arrays and plain (single level) objects.
Objects with methods and complex objects like dates or custom objects cannot be deep copied.

<br>

## `JSON.stringify()`

- serializes arrays and objects! that only contain primitive values, array and plain objects as elements!
- it converts the array / object to a string value

## `JSON.parse()`

- the string can then be parsed back into an identical object by `JSON.parse()`


```JavaScript
// OBJECT:
let obj = {
  a: 1,
  b: 2,
  c: [3]
}

let copyObjSerialized = JSON.stringify(obj);
console.log(copyObjSerialized); // '{"a":1,"b":2,"c":[3]}'

let deepCopyObj = JSON.parse(copyObjSerialized);
deepCopyObj['c'].push(100);

// mutation made to nested object within the deep copy was not reflected in the original
console.log(deepCopyObj); // { a: 1, b: 2, c: [ 3, 100 ] }
console.log(obj); // { a: 1, b: 2, c: [ 3 ] }


// ARRAY:
let array = [1, 2, [3, 4]];

// array coerced into a string and returned
let serializedCopyArray = JSON.stringify(array);
console.log(serializedCopyArray); // "[1,2,[3,4]]"

// string array repurposed to array and copied to deepCopy
// pushed value to the deep copy was not reflected in the original
let deepCopyArray = JSON.parse(serializedCopyArray);
deepCopyArray[2].push(100);
console.log(deepCopyArray); // [ 1, 2, [ 3, 4, 100 ] ]
console.log(array); // [ 1, 2, [ 3, 4 ] ]
```