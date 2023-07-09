# Array Keys

Arrays are also objects. An arrays indices are also it's object property names. When used as its property name the indices are coerces to strings.

Not all properties of the array object are always represented by a present array element.

<br>

## `Object.keys(nameOfArray)`

```JavaScript
// when an array contains no elements:
let array = [];
let keys = Object.keys(array); 
console.log(array) // []
console.log(keys); // [], currently no property/keys/indices converted to strings since the array is empty
console.log(array.length); // 0
```

<br>

```JavaScript
// when the array contains elements:
let array = [1, 2, 3, 4];
let keys = Object.keys(array);
console.log(array); // [1, 2, 3, 4]
console.log(keys); // ['0', '1', '2', '3']
console.log(array.length); // 4
```

<br>

## Adding properties to an array object that are not properties

- this is done by adding a property that is not a non-negative number so to put simply it is different to using positive numbers as properties 
- it can be anything and does not have to be a number

```JavaScript
array['Hi'] = 'Hello';
console.log(array); // [ 1, 2, 3, 4, Hi: 'Hello' ], the non-elements appear in the array
console.log(keys); // [ '0', '1', '2', '3' ], the non-elements are assigned an index position / property name
console.log(array.length); // 4, the array object property is not counted by the .length property
console.log(array.map(el => el + 1)); // [2, 3, 4, 5], .map() method ignores non-elements, all methods do this
```

<br>

## Is the array empty?

Since the `.length` property ignores non-elements, it is best to check for the presence of an array objects properties to see if the array is truly empty. This can be done with Object.keys(arrayName) to see what properties exist on the array or to check that the .length of the keys is 0.