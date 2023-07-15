function wordSizes (string) {
  let newObj = {};
  if (string.trim().length === 0) {
    return newObj
  };

  let splitString = string.split(' ');
  let reassignNonLetters = getLetters(splitString);

  reassignNonLetters.forEach((word, index)=>{
    newObj[word.length] ? newObj[word.length]++ : newObj[word.length] = 1;
  });
  return newObj;
}

function getLetters(arrayOfSplitStrings) {
  for (let i = 0; i < arrayOfSplitStrings.length; i++) {
    let word = arrayOfSplitStrings[i];

    let finalWord = '';
    for (let x = 0; x < word.length; x++) {
      if (validReg(word[x])) {
        finalWord+=word[x];
      };
    };
    arrayOfSplitStrings[i] = finalWord;
  };

  return arrayOfSplitStrings;
}

function validReg (char) {
  return /[a-zA-Z0-9]/.test(char);
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

/*

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

*/