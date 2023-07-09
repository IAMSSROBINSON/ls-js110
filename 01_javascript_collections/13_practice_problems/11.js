// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let stringMinusSpace = statement.split(' ').join('');
let objCharCount = {};

stringMinusSpace.split('').forEach((char)=>{

  if (Object.keys(objCharCount).includes(char)) {
    objCharCount[char]++;
  } else {
    objCharCount[char] = 1;
  }
})

console.log(objCharCount);

/*

- remove white space from the string
- since we want to count all chars they must each be added to the object 
- if the object already has the char then increase the count by +1
  - check the .keys of the object
  - as you iterate if the current char is included in the objects keys then this is when to add + 1 to the value
- if the object does not have the char then assign it and give it value 1
- after each char has been iterated over return the object 

*/
