let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

/*

Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.

input: array
output: object

- for each sub-array
  - objKey = arr[0]
  - objValue = arr[1]

*/

let obj = {};
for (let i in arr) {
  let key = arr[i][0];
  let value = arr[i][1];
  obj[key] = value;
}
console.log(obj)