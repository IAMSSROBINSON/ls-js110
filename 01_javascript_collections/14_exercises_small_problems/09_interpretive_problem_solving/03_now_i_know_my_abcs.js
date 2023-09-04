function isBlockWord (stringWord) {
  console.log({stringWord});
  let blocks = {
    B:'O', X:'K', D:'Q', C:'P', N:'A', G:'T', R:'E',
    F:'S', J:'W', H:'U', V:'I', L:'Y', Z:'M'
  };

  let charMatch = '';
  let stringWordArr = stringWord.split('');

  for (let index = 0; index < stringWordArr.length; index++) {
    if (isMatch(stringWordArr[index].toLowerCase(), blocks)) {
      charMatch += stringWordArr[index].toLowerCase();
    } else return false;
  }
  return charMatch === stringWord.toLowerCase();
}

function isMatch (char, blocks) {
  let charMatched = '';
  for (let key in blocks) {
    if (key.toLowerCase() === char
    || blocks[key].toLowerCase() === char) {
      if (key.toLowerCase() === char) {
        charMatched = key.toLowerCase();
      } else {
        charMatched = blocks[key].toLowerCase();
      }
      delete blocks[key];
    }
  }
  return charMatched;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true


/*

A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.


P: Understanding The Problem
Create a function that takes a string.
Compare the characters of the string to the characters in the blocks.
You can only use a block once.
Return true if the string can be spelled(case insensitive) else return false.

Input: String(Single word)
Output: Boolean(true/false => if word can be spelled using blocks)
Rules:
  Explicit:
  - create a function
  - receive the argument wordString
  - return boolean
  - check whether word can be spelt using blocks
    - can only use one letter per block
    - can only use block once per wordString
  - case insensitive so default all toLowerCase()

  Implicit:
  - will always be a valid string argument
  - wordStringArgument may be upper or lowercase so default all to lowercase => argument and blocks for comparison
  - order of letters in batch is of no consequence

Questions:
- Are the blocks stored in an object format or may they be stored in some other format?
- How will use eliminate a block once it has been used once?


E: Examples and Test Cases
'BATCH'    // true

B:O √ => B
X:K
D:Q
C:P √ => C
N:A √ => A
G:T √ => T
R:E
F:S
J:W
H:U √ => H
V:I
L:Y
Z:M

Mental Model:
The wordString: 'BATCH' is received.
The characters will need to be compared individually to the block contents.
A looping mechanism will probably be required.
firstChar => B
Iterate over blocks
Is the char 'B' present in any of the blocks?
=> Match: 'B' to block: `B:O`
=> True => push B to empty array or reassign empty string value to += 'B'
Take the block `B:O` out of commission somehow so it cannot be selected on the next char iteration
When all characters have been iterated over if the array.join('') characters have strict equality to the argument string then return true else return false.


D: Data Structure
Object: I will utilize an object data structure to store the value of the blocks since the matching of the characters to labels and values is of importance.


A: Algorithm
- start
- set function: isBlockWord
- receive argumentString
- set object blocks variable
- set isMatch function
- set resultString = '';
- set variable wordCharArr and split('') the string into an array of characters
- loop over the characters
  - send each character to isMatch(char, blocks)
    - function isMatch(char, blocks) {
      let charMatch = '';
      for (let i in blocks) {
        if (i.toLowerCase() === char || blocks[i].toLowerCase() === char) {
          if (i.toLowerCase() === char) {
            charMatch = i;
          } else if (blocks[i].toLowerCase() === char) {
            charMatch = blocks[i]
          }
          delete blocks[i];
        }
      }
    return charMatch;
    }
  - if the return is truthy push resultString += char;
  - else return false;
- loop complete
- compare resultString to argumentString for strict equality (lowercase)
- return true if strict equality returns true, else return false
- end


C: Code With Intent:

*/