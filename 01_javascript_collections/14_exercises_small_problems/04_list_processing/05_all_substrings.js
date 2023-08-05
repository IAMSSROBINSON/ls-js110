function substrings (string) {
  let finalArray = [];
  for (let index = 0; index < string.length; index++) {
    finalArray.push(leadingSubstrings(string.slice(index)));
    
  }
  return finalArray.flat();
}

function leadingSubstrings (string) {
  let subString = '';
  let sortedSubStringLengths = string.split('').map((char)=>{
    return subString += char;
  })
  return sortedSubStringLengths;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

  /*

  Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

  You may (and should) use the leadingSubstrings function you wrote in the previous exercise:


  A: Algorithm
  - start
  - set a new function 
  - receive the argument
  - set finalArray = []
  - loop for length of the string and push return of leadingSubString to new array
    - pass string[index] to leadingSubString and increment index each time to cover all potential substrings
  - flatten finalArray so that the array is one dimensional
  - return array
  - end

  */