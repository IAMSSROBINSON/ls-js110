let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

/*

Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

- input: arr
- output: arr(with ordered sub-arrays)
- rules: 
  - keep structure, DO NOT MUTATE THE ORIGINAL
  - only sort sub-arrays
    - alphabetically
    - numerically
  - ascending order: from smallest to largest

mental model: 
- copy the original array since .sort() is destructive 
  - check the copy and original for mutation
- iterate over the array
  - the array contains 3 nested array elements
    - within the current array
      - iterate over the elements
        - if the typeof element is string
          - sort for strings
        - else sort for numbers 
- log the new array

*/

// DEEP COPY:
// let arrSerialize = JSON.stringify(arr);
// let arrDeepCopy = JSON.parse(arrSerialize);
//  arrDeepCopy.map(arr =>{
//   arr.forEach(elem => {
//     if (typeof elem === 'string') {
//       arr.sort();
//     } else {
//       arr.sort((a, b ) => a - b);
//     }
//   })
//  })
//  console.log(arrDeepCopy); 

// SHALLOW COPY
let sortedArr = arr.map((arr)=> {
  if (typeof arr[0] === 'string') {
    return arr.slice().sort();
  } else {
    return arr.slice().sort((a, b) => a - b);
  }
});
console.log(sortedArr);
console.log(arr);
// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
