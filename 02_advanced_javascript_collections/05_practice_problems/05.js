let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

/*

Consider the following nested object:

Compute and display the total age of the male members of the family.

- isolate the values of the munsters object: to return an array of objects as elements
- isolate the male members of the object
  - set total variable = 0;
  - for each object
  - if object['gender'] === 'male'
  - total = total += object['age']
console.log(total)

*/

let values = Object.values(munsters);
let totalMaleAge = 0;

values.forEach((object)=>{
  if (object['gender'] === 'male') {
    totalMaleAge += object['age'];
  }
})
console.log(totalMaleAge); // 32 + 402 + 10  = 444 √
