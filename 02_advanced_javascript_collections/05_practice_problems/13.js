let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];


/*

Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
[[1, 6, 7], [1, 5, 3], [1, 8, 3]]
  [[1, 7], [1, 5, 3], [1, 3]]
    [[8], [9], [4]]
      [[4], [8], [9]]
        [[1, 8, 3], [1, 6, 7], [1, 5, 3]]

*/

arr.sort((a, b)=>{

  let oddNumsA = a.filter(num => num % 2 === 1).reduce((acc, el)=> acc + el);
  let oddNumsB = b.filter(num => num % 2 === 1).reduce((acc, el)=> acc + el);

  return oddNumsA - oddNumsB;
  
})
console.log(arr)