function substrings (string) {
  let holding = [];
  let char = '';

  for (let i = 0; i < string.length; i++){
    char = string[i];
    holding.push(char);
    for (let x = i + 1; x < string.length; x++) {
      char += string[x];
      holding.push(char);
    }
  }
  return holding;
}

console.log(substrings('abcde'));

/*
a
ab
abc
abcd
abcde
b
bc
bcd
bcde


*/