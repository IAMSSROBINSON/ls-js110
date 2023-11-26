// function leadingSubstrings (string) {
//   let subst = '';

// return string.split('').flatMap((char) => {
//     subst += char;
//     return subst;
//   });
// }


function leadingSubstrings (string) {
  let holding = [];
  let count = 0;
  while (count < string.length) {
    holding.push(string.slice(0, count+1));
    count++;
  }
  return holding;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

*/