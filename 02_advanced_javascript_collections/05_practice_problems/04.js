
let arr1 = [1, [2, 3], 4];
// access arr1 using element referencing and reassign the value in place
arr1[1][1] = 4;
console.log(arr1); // [ 1, [ 2, 4 ], 4 ]

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// access arr2 and use element referencing to access the value at index position [2] and reassign the value in place from 3 to 4
arr2[2] = 4;
console.log(arr2); // [ { a: 1 }, { b: 2, c: [ 7, 6, 5 ], d: 4 }, 4 ]

let obj1 = { first: [1, 2, [3]] };
// access the property of obj1 using object property syntax, then using array element referencing to access the value at index position [2], using element referencing once more to access the element at index position[0] and reassign the value in place from 3 to 4
obj1['first'][2][0] = 4;
console.log(obj1); // { first: [ 1, 2, [ 4 ] ] }

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// use object property referencing to access the value of the first property: an object
// access the first property within the returned object in the same way to return the value: an array
// use element referencing to access the value at index position [2]
// reassign the element value in place from 3 to 4
obj2['a']['a'][2] = 4;
console.log(obj2); // { a: { a: [ '1', 'two', 4 ], b: 4 }, b: 5 }

/*

For each of these collection objects, demonstrate how you would change the value 3 to 4.

*/