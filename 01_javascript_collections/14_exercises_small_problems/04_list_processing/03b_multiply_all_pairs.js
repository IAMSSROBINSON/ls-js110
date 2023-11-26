function multiplyAllPairs (array1, array2) {
  return array1.flatMap(value => array2.map(element => value * element)).sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Input: Array(2 arrays of numbers)
Output: Array(1 array with the product of all pairs in ascending order)

E: 

Mental Model:
Receive array arguments
Set a holding array = []
Iterate over the first array [i]
  Next loop [j]
    holding.push(array2[j] * [array1[i]])
- return holdingArray

*/