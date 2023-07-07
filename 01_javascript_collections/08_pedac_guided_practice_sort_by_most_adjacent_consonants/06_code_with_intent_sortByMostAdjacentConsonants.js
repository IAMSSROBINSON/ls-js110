// #{target-code}

// Original Problem Statement:
// Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

function sortStringsByConsonants (arrayOfStrings) {
  let combinedObj = {};
  let sortedArrayOfStrings = [];
  
  for (let index = 0; index < arrayOfStrings.length; index++) {
    Object.assign(combinedObj, consonantCounts(arrayOfStrings[index]));
  }

  sortedArrayOfStrings.push(sortedCombinedObjects(combinedObj));

  return sortedArrayOfStrings[0];
}

function consonantCounts(string) {
  let counts = [];
  let count = 0;
  let obj = {};

  string = string.includes(" ") ? removeStringSpace(string) : string;

  for (let index = 0; index <= string.length; index++) {
    if (isValidConsonant(string[index])) {
      count++;
    } else {
      switch (count) {
        case 0:
        case 1:
          counts.push(0);
          count = 0;
          break;
        default:
          counts.push(count);
          count = 0;
          break;
      }
    }
  }

  count = counts.reduce((acc, el) => Math.max(acc, el));
  obj[string] = count;

  return obj;
}

function removeStringSpace(string) {
  let stringSpaceRemoved = string
    .split("")
    .filter((char) => char !== " ")
    .join("");

  return stringSpaceRemoved;
}

function isValidConsonant(char) {
  let validConsonants = "bcdfghjklmnpqrstvwxyz";
  return validConsonants.includes(char);
}

function sortedCombinedObjects (combinedObjects) {
  let finalArray = [];
  let arrayOfMembers = Object.entries(combinedObjects);

  let sortedEntries = arrayOfMembers.sort((a, b)=>{
   
    return b[1] - a[1];
  });

  sortedEntries.forEach((array)=>{
    finalArray.push(array[0]);
  });
  return finalArray;
}


// TEST CASES:
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa'] √

console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan'] √

console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar'] √

console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year'] √

