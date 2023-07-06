// #{target-code}

function consonantCounts (string) {
  let counts = [];
  let count = 0;
  let obj = {};

  string = string.includes(' ') ? removeStringSpace(string) : string;

  for (let index = 0; index <= string.length; index++) {
   if (isValidConsonant(string[index])) {
    count++;
   } else {
    switch (count) {
      case 0:
      case 1:
        counts.push(0);
        count = 0;
        break;
      default:
        counts.push(count);
        count = 0;
        break;
    }
   }
  }

  count = counts.reduce((acc, el) => Math.max(acc, el));
  obj[string] = count;

  return obj;
}

function removeStringSpace (string){
  let stringSpaceRemoved = string.split('').filter(char => char !== ' ').join('');
  
  return stringSpaceRemoved;
}

function isValidConsonant (char) {
  let validConsonants = 'bcdfghjklmnpqrstvwxyz';
  return validConsonants.includes(char);
}

// TEST EXAMPLES: INDIVIDUAL STRINGS:
console.log(consonantCounts('aa')) // { aa: 0 }
console.log(consonantCounts('baa')) // { baa: 0 }
console.log(consonantCounts('baabb')) // { baabb: 2 }
console.log(consonantCounts('dddaa')) // { dddaa: 3 }
console.log(consonantCounts('salt pan')) // { saltpan: 3 }

// NEXT: TEST ARRAY OF STRINGS:
// ['aa', 'baa', 'ccaa', 'dddaa', 'salt pan']