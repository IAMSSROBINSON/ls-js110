# `Array.prototype.filter()`

A built in JavaScript array method that iterates over each element within the array and returns the elements that evaluate to true when evaluated as an expression.

- performs selection and filters elements
- applied on the array
- performed on each element within the array
  - determines truthiness of the callback return value, if it evaluates as truthy it returns the element iterated on 
    - if falsy the element iterated on is not returned
    - falsy values are: `null, undefined, false, 0, 0n, NaN, "",`
    - all other values are truthy 
    - pay attention to the callbacks return value
- returns a new array of elements

<br>

```JavaScript
// .filter() returns a new array with elements that meet the condition expression
let array = [1, 2, 3];

console.log(array.filter(element => element % 2 !== 0)); // [1, 3]
```

<br>

```JavaScript
// the callback performs an operation on each element and if the return is a truthy value as evaluated as an expression then the callback returns that value to be included in the resulting array
[1, 2, 3].filter(num => num + 1);
```

<br>

```JavaScript
// Select the key-value pairs from our produce object where the value is Vegetable. Let's give it a shot with Array.prototype.filter.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let entries = Object.entries(produce);
console.log(entries);
// [
//   [ 'apple', 'Fruit' ],
//   [ 'carrot', 'Vegetable' ],
//   [ 'pear', 'Fruit' ],
//   [ 'broccoli', 'Vegetable' ]
// ]

let vegOnly = entries.filter((array)=>{
  let [key, value] = array;
  return value === 'Vegetable';
})
console.log(vegOnly); // [ [ 'carrot', 'Vegetable' ], [ 'broccoli', 'Vegetable' ] ]

let vegOnlyObj = {};

vegOnly.forEach((array)=>{
  let [key, value] = array;
  obj[key] = value;
})
console.log(vegOnlyObj); // { carrot: 'Vegetable', broccoli: 'Vegetable' }

// SUCCINCT:
// Object.entries(produce).forEach((array)=>{if (array[1]=== 'Vegetable'){vegOnlyObj[array[0]] = array[[1]]}}); // { carrot: 'Vegetable', broccoli: 'Vegetable' }
```
