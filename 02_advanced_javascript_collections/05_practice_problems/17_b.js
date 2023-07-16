/*

A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.

input:
output: function (return a string containing UUID)
rules: 
  - 32 hexadecimal characters
    - 0-9
    - a-f
  - 5 sections
    - 8-4-4-4-12
  - example: 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

  mental model:
  - create each of 5 sections separately as functions: section1, section2 ect..
    - create object with numbers 1 - 15 as keys
    - create object with all possible hex chars as values
  - generate a random number between 1 and 15
    - retrieve the hex char at that number from the object
  - loop and do this for each number of random numbers required for the section 
  - concatenate them to form the final UUID string

*/

function getUuid () {
  let UUID = [];
  let sectionLength = [8, 4, 4, 4, 12];
  let hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let count = 0; count < sectionLength.length; count++) {
    UUID.push(getSection(sectionLength[count], hexChars));
  }

  return UUID.join('-');
}

function getSection (hexLength, hexChars) {
  let hexString = '';
  
  for (let count = 0; count < hexLength; count++) {
    let random = Math.floor(Math.random() * hexChars.length);
    hexString += hexChars[random];
  }
  
  return hexString;
}

console.log(getUuid());