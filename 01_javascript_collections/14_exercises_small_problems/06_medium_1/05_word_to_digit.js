function wordToDigit (string) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let strArr = string.split(' ');

  let finalStr = strArr.map((word) => {
    if (getNum(word, digits)) {
      return getNum(word, digits);
    } else {
      return word;
    }
  });
  return finalStr.join(' ');
}

function getNum (word, digits) {
  let string = '';

  digits.forEach((digit, index) => {
    if (word.includes(digit)) {
      string = word.replace(digit, index);
    }
  });
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."