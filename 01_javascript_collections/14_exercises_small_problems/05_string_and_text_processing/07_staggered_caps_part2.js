function staggeredCase (string) {
  let caseState = 'lowercase';
  string = string.toLowerCase();

  let stringCharsArr = string.split('');
  stringCharsArr.forEach((_, index) => {
    if (stringCharsArr[index] >= 'a' && stringCharsArr[index] <= 'z' && caseState === 'lowercase') {
      stringCharsArr[index] = stringCharsArr[index].toUpperCase();
      caseState = 'uppercase';
    } else if (stringCharsArr[index] >= 'a' && stringCharsArr[index] <= 'z' && caseState === 'uppercase') {
      stringCharsArr[index] = stringCharsArr[index].toLowerCase();
      caseState = 'lowercase';
    }
  });
  return stringCharsArr.join('');
}



console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/*

Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

Mental Model:
Convert string to all lowercase
Iterate over chars
Set a caseState variable to 'lowerCase'
Check the char for alpha
- if it is && caseState === 'lowerCase' then currentChar[index] = currentChar[index].toUpperCase()
caseState = 'uppercase'
- if it is && caseState === 'uppercase' then currentChar[index] = currentChar[index].toLowerCase()
caseState = 'lowercase'
- because we are mutating the array[element] in place there is no need to do anything about characters that fall outside of the ones addressed since they will remain in the array as they stand and will remain as such when the array is converted back to a string

Further Exploration
Modify this function so the caller can determine whether non-alphabetic characters should be counted when determining the upper/lowercase state. That is, you want a function that can perform the same actions that this function does, or that operates like the previous version.

*/