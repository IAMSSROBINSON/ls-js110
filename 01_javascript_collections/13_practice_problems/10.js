
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let values = Object.values(ages);
console.log(values.reduce((acc, el)=>{
  return acc < el ? acc : el;
}));

/*

Pick out the minimum age from our current Munster family object:

- extract the values to an array
- set current element
- iterate over collection
  - assign current element to first element
  - if next element is less than current then reassign the value of current element
- return the final current element

OR: spread the contents of the array to convert the array to a list of arguments and use the Math.min(...array) method on the values




*/