let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let summedAges = Object.values(ages).reduce((acc, el)=>{
  return acc + el;
});
console.log(summedAges); // 6174


/*

Add up all of the ages from the Munster family object:

- extract values from the object to an array
- iterate over the elements in the array and sum the values
- return the final value

*/