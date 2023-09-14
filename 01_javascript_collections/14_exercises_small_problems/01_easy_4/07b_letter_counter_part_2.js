function wordSizes (string) {
  let obj = {};
  if (string.length === 0) {
    return obj;
  }

  let words = string.split(" ");
  for (let idx = 0; idx < words.length; idx++) {
    let newWord = removeNonLetters(words[idx]);
    obj[newWord.length] = obj[newWord.length] ? obj[newWord.length] + 1 : 1;
  }
  return obj;
}

function removeNonLetters (oldWord) {
  let newWord = '';
  let wordArr = oldWord.split('');

  wordArr.forEach((character) => {
    if (/[a-z0-9]/gi.test(character)) {
      newWord += character;
    }
  });
  return newWord;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

/*

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

A: Algorithm
- start
- set function
- receive string argument
- set empty object
- guard clause for empty string argument return object
- split string by spaces to determine word
- loop over array of words
  - reassign the value of the word by eliminating non-letters: use a function and return the newWord
  - update object.length key assignment and value numberOfOccurrencesCount
- return object
- end

C: Code With Intent

*/