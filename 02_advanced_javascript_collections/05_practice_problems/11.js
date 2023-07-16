let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

/*

Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.


*/

let increasedValues = arr.map((obj)=>{
  let currentObj = {};
  
  for (let i in obj) {
    currentObj[i] = obj[i] + 1;
  }
  return currentObj;
})
console.log(increasedValues);
console.log(arr);