function letterPercentages (string) {
  let charArray = string.split('');
  let hundredPercent = charArray.length;
  let obj = { lowercase : 0, uppercase : 0, neither : 0 };

  for (let idx = 0; idx < charArray.length; idx++) {
    if  (charArray[idx] >= 'a' && charArray[idx] <= 'z') {
      obj['lowercase'] = obj['lowercase'] ? obj['lowercase'] + 1 : 1;
    } else if  (charArray[idx] >= 'A' && charArray[idx] <= 'Z') {
      obj['uppercase'] = obj['uppercase'] ? obj['uppercase'] + 1 : 1;
    } else {
      obj['neither'] = obj['neither'] ? obj['neither'] + 1 : 1;
    }
  }

  for (let x in obj) {
    obj[x] = getPercentage(obj[x], hundredPercent);
  }

  return obj;
}

function getPercentage (valueToPercentage, hundredPercent) {
  return (valueToPercentage / hundredPercent * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/*

Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.


P: Understanding The Problem
Create a function that takes a string argument (that may contain digits).
The function should work out:
  - the percentage of chars that are lowercase
  - the percentage of chars that are uppercase
  - the percentage of chars that neither uppercase nor lowercase

and present this data in an object before returning it.

Input: String
Output: Object(containing properties)
Rules:
  Explicit:
  - create a function
  - calculate properties
  - return properties in object

  Implicit:
  - empty space character are counted as chars neither uppercase nor lowercase
  - numbers are considered neither uppercase nor lowercase as well as symbols
  - do not round the result
  - present int to two decimal places

Questions:
- n/a


E: Examples and Test Cases
// 'abCdef 123'
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

Total chars = 10
lowercaseChars: a, b, d, e, f :
length => 5 chars
5 : 10, 5 to 10, 5/10
cancelDown:
5 => factors: 1, 5
10 => factors: 1, 2, 5, 10
GreatestCommonFactor: 5
5 / 5 = 1
10 / 5 = 2
1/2 as percentage => 50% of totalChars(10) are lowerCaseChars
5 / 10 * 100 = 50 (divide the number by the whole and multiply by 100 to get the percentage)

uppercaseChars: C : => 1 char = 10% of totalChars
neither: " ", 1, 2, 3 : => 4 chars = 40% of totalChars
50% + 10% + 40% = 100% of chars accounted for

Mental Model:
String received.
split string into chars.
set object with properties : value = 0;
set totalChars.length, this is 100% of chars values
iterate over each char:
  - if (char >= 'a' && char <= 'z') => lowerCase
    - add 1 to lowerCase
  - else if (char >= 'A' && char <= 'Z') => upperCase
   - add 1 to upperCase
  - else => neither
    - add 1 to neither
- convert the counts to percentage values to two decimal places(store as strings(.toFixed() coerces to string))

or push to labelled arrays first and then calculate the percentage at the end for each respective array, lowerCase, upperCase and neither and add to object that way 


D: Data Structure
Object: is the main data structure I will utilize since it is required as the return value with labels taking priority over ease of iteration


A: Algorithm
- start
- set function
- receive string argument
- split string into charArray('')
- set hundredPercent = charArray.length
- set obj = {}
- loop over charArray:
  - if (char >= 'a' && char <= 'z')
    - obj['lowercase'] ? obj['lowercase'] =1 : obj['lowercase'] += 1;
  - else if (char >= 'A' && char <= 'Z')
    - obj['uppercase'] ? obj['uppercase'] =1 : obj['uppercase'] += 1;
  else
    - obj['neither'] ? obj['neither'] =1 : obj['neither'] += 1;
- each property should now have the correct count
- for let i in Object
  - obj[i] = convertToPercentage
  - function convertToPercentage (obj[i]) {
    return parseFloat(obj[i] / hundredPercent * 100).tofixed(2);
  }
- return object
- end


C: Code With Intent

*/