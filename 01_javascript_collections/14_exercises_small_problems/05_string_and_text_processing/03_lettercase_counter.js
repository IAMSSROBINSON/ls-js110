function letterCaseCount(string) {
  let caseCountsObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  let stringArrayChars = string.split("").map((char) => {
    return sortCase(char);
  });

  for (let idx in stringArrayChars) {
    caseCountsObj[stringArrayChars[idx]] += 1;
  }
  return caseCountsObj;
}

function sortCase(char) {
  if (/[a-z]/.test(char) === true) {
    return "lowercase";
  } else if (/[A-Z]/.test(char) === true) {
    return "uppercase";
  } else {
    return "neither";
  }
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

/*

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

P: Understanding The Problem
Create a function that accepts a string argument.
The function should work out and return an object {
  lowercase: numberOfLowerCaseChars,
  uppercase: numberOfUpperCaseChars,
  neitherUpperNorLower: neitherUpperCaseNorLowerCaseChar
}

Input: string
Output: Object
Rules:
  Explicit:
  - count lowercase chars
  - count uppercase chars
  - count neither upper nor lowercase chars

  Implicit:
  - empty string counted as 0 for all instances
  - number strings are counted as neither
  - symbols are counter as neither
  - character spaces counted as neither

Questions:
- n/a


E: Examples and Test Cases
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }

lowercase : ;
uppercase : ;
neither: ;
'A'
lowercase : ;
uppercase : 1;
neither: ;
'b'
lowercase : 1;
uppercase : 1;
neither: ;
'C'
lowercase : 1;
uppercase : 2;
neither: ;
'd'
lowercase : 2;
uppercase : 2;
neither: ;
''
lowercase : 2;
uppercase : 2;
neither: 1;
'+'
lowercase : 2;
uppercase : 2;
neither: 2;
'E'
lowercase : 2;
uppercase : 3;
neither: 2;
'f'
lowercase : 3;
uppercase : 3;
neither: 2;


Mental Model:
Receive the string.
Split the string.
Iterate over each character.
- determine if char is === char.upperCase()
  - how to determine if uppercase for the character?
    - /[A-Z]/ === true
- determine if char is === char.lowerCase()
  - how to determine if lowercase for the character?
    /[a-z]/ === true
- determine if neither
    - how to determine if neither for the character?
      - if none of above
      - if Number
  return 'upper'
  return 'lower'
  return 'neither' accordingly in an array
- iterate over array and increase value in object accordingly


D: Data Structure
Object: Since an object must be returned I will utilize this data structure to populate with data.


A: Algorithm
- start
- set a function
- receive the string argument
- set an empty object and enter predefined key: values of strings = 0,
- set a variable and split the string
- loop over the chars and pass each char to sortCase() function, map and return to array:
  - if:
    /[A-Z]/ === true return 'uppercase'
    /[a-z]/ === true return 'lowercase'
  - else return 'neither'
- now there will be a variable initialized to an array full of different strings, uppercase, lowercase and neither
- loop over array elements
  - if the object[key] is truthy increase the value += 1 (they start of falsy)
  - otherwise increase the value by += 1
   - this ensures that if the string is present in the array that it will be counted 
   - if the string is not present then the value in the object remains at 0 as it was pre given this value
- return object with keys and counts
- end

C: Code With Intent

*/
