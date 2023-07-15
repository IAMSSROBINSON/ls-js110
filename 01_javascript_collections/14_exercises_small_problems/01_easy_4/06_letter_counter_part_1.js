function wordSizes (string) {
  if (string.trim().length === 0) {
    return {}
  }
  let objOfWordLengthCounts = {};
  let stringSplit = string.split(" ");

  for (let index = 0; index < stringSplit.length; index++) {
    objOfWordLengthCounts[stringSplit[index].length] ? objOfWordLengthCounts[stringSplit[index].length]++ :  objOfWordLengthCounts[stringSplit[index].length] = 1;
  }

  return objOfWordLengthCounts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

/*

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

PEDAC:

input: string (with spaces)
output: object (showing number of words of different sizes)

the smallest word count is added to the object first 
the length of the string is the property and the amount of strings with that length is the value
if the string is empty then return empty object

split string into word elements array by space
for the length of the array 
if the property in the object exists then += 1, else +1

*/