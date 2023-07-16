let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/*

Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

input: object
output: new array (with alterations to object values)

algorithm:
- set objValues = Object.values(obj); 
  - array of objects
- map over values to return new array
- iterate over objValues array of object
  - for each object
  - if property === 'fruit'
    - iterate over the elements in the objects colors
      - return an array with the element strings capitalized 
  - if property === 'vegetable'
    - return the object size string in Uppercase: all caps

*/

let values = Object.values(obj);


let editedValues = values.map((object)=>{

  for (let i in object) {
    if (object[i] === 'fruit') {
      
      return object['colors'].map(col => col.slice(0, 1).toUpperCase() + col.slice(1));
    } else if (object[i] === 'vegetable') {
      return object['size'].toUpperCase();
    }
  
  }
})

console.log(editedValues);

// [
//   [ 'Red', 'Green' ],
//   'MEDIUM',
//   [ 'Red', 'Green' ],
//   [ 'Orange' ],
//   'LARGE'
// ]