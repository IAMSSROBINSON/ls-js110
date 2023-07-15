let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

/*

Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

*/

let sortedArr = arr.map((arr) =>{
  return arr.slice().sort((a, b)=>{
    if (typeof arr[0] === 'number') {
      return b - a;
    } else {
      if (a < b) {
        return - 1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }
  })
})
console.log(sortedArr);
console.log(arr);