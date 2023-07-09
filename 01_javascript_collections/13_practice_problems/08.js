// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

function arrayToObject (array) {
  let object = {};
  let counter = 0;
  let values = Object.values(array); // to counter non-elements that may appear on other arrays that might be passed into the function

  while (counter < values.length) {
    let currentValue = values[counter];
    object[currentValue] = counter;
    counter++;
  }

  return object;
}
console.log(arrayToObject(flintstones));
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

/*

Create an object
With the array value names as the keys in the object
With the array index positions as the values

- setNewObject
- set counter = 0
- getValues
- Iterate over the values and assign the newObject[values] = to counter
- increment counter
- repeat

*/