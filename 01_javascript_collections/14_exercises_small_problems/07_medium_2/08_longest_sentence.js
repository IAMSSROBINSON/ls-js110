function longestSentence (string) {
  let theLongestSentence =  getLongestSentence(getSentences(getSentenceIdentifierIndexes(string.split('')), string.split('')));
  console.log(`\nLongest Sentence: ${theLongestSentence}\n`);
  console.log(`The Longest sentence: has ${getSentenceLength(theLongestSentence)} words.\n\n`);
  return theLongestSentence;
}

function getSentenceLength (sentence) {
  return sentence.split(" ").length;
}

function getLongestSentence (sentences) {
  return sentences.sort((a, b) => {
    return b.split(" ").length - a.split(" ").length;
  })[0];
}

function getSentences (indexes, charArr) {
  let sentences = [];
  let startIdx = 0;
  let toIdx = 0;

  for (let index = 0; index < indexes.length; index++) {
    toIdx = indexes[index];
    sentences.push(charArr.slice(startIdx, toIdx + 1).join('').trim());
    startIdx = toIdx + 1;
  }
  return sentences;
}

function getSentenceIdentifierIndexes (charArr) {
  const validSymbols = ['.', '!', '?'];

  let indexes = [];
  charArr.forEach((element, index) => {
    if (validSymbols.includes(element)) indexes.push(index);
  });
  return indexes;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

/*

Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

P: Understanding The Problem
Create a function that takes a string sentence.
The function should separate each sentence in the string and return the longest one.
You can denote a sentence by it ending with a (.), (!) or (?).
Any sequence of characters that are not character spaces or (.), (!) or (?) are treated as a word.
-- dash dash is a word.


Input: String(Paragraph)
Output: String(The longest sentence based on number of words), Number(Amount of words in the string) => print to console
Rules:
  Explicit;
  - Create a function
  - Receive argument string paragraph
  - return the longest sentence in the string, with the number of words in sentence
  - Sentence must maintain all punctuation

  Implicit:
  - argument string may be concatenated using the + operator

Questions:
- n/a


E: Examples and Test Cases

Sentence: "To be or not to be! Is that the question?";

Potential sentences:

=> To be or not to be!
Sentence indicator: !
Words (not counting character spaces):
=> To
=> be
=> or
=> not
=> to
=> be!
Word count => 6

=> Is that the question?
Sentence indicator: ?
Words (not counting character spaces):
=> Is
=> that
=> the
=> question?
Word count => 4

Longest Sentence: "To be or not to be!"
// The longest sentence has 6 words.

Mental Model:
Sentence is received by the function as a string.
split the string into an array of chars.

slice from starting index 0 to the index of when chars . or ! or ? are encountered + 1 so the symbol is included in the string
join the chars into a string and push to an array of sentences
save the sentenceIndicatorIndex to a variable

next sentence should be sentenceIndicatorIndex to indexOf next encounter of . or ! or ?
join the chars into a string and push to an array of sentences
reassign the sentenceIndicatorIndex to a variable

Once all possible sentences have been collected, sort the array by ascending length and return the the last element which should be the longest


D: Data Structure
Array: I will utilize an array data structure to store a list of possible sentences from the original string argument.


A: Algorithm
- start
- set function: longestSentence
- receive the argument string
- set arrayValidSymbols = ['.', '!', '?']
- set arrayOfChars = string.split('')
- set foundSymbolsArr = []
- set sentences = [];
  - filter over the charArray
  - if the arrayValidSymbols.includes(currentChar);
    - push symbol to foundSymbolsArr
- set startIndex = 0;
- set endIndex = 0;
- define loop: index = 0, index < foundSymbolsArr.length; index++
  - endIndex = indexOf(foundSymbolsArr[index];
  - set let sentence = arrayOfChars.slice(startIndex, endIndex + 1)).join("").trim()
  - sentences.push(sentence);
  - startIndex = endIndex;
- return sentences.sort((a, b)=>{
  return b.split(' ').length - a.split(' ').length;
})[0]
- end


C: Code With Intent

*/