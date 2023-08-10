function staggeredCase(string, countedOrNot = false) {
  let finalString;

  if (countedOrNot) {
    finalString = counted(string);
  } else {
    finalString = notCounted(string);
  }
  return finalString;
}

function counted(string) {
  let stringCharsArr = string.split("");
  stringCharsArr.forEach((char, index) => {
    if (index % 2 === 0) {
      stringCharsArr[index] = char.toUpperCase();
    } else {
      stringCharsArr[index] = char.toLowerCase();
    }
  });
  return stringCharsArr.join("");
}

function notCounted(string) {
  let caseState = "lowercase";
  string = string.toLowerCase();

  let stringCharsArr = string.split("");
  stringCharsArr.forEach((_, index) => {
    if (
      stringCharsArr[index] >= "a" &&
      stringCharsArr[index] <= "z" &&
      caseState === "lowercase"
    ) {
      stringCharsArr[index] = stringCharsArr[index].toUpperCase();
      caseState = "uppercase";
    } else if (
      stringCharsArr[index] >= "a" &&
      stringCharsArr[index] <= "z" &&
      caseState === "uppercase"
    ) {
      stringCharsArr[index] = stringCharsArr[index].toLowerCase();
      caseState = "lowercase";
    }
  });
  return stringCharsArr.join("");
}

let countedOrNotCounted = false;

console.log(
  staggeredCase("I Love Launch School!", countedOrNotCounted) === "I lOvE lAuNcH sChOoL!"
);
console.log(staggeredCase("ALL CAPS", countedOrNotCounted) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", countedOrNotCounted) ===
    "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase("I Love Launch School!", countedOrNotCounted)); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS", countedOrNotCounted)); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers", countedOrNotCounted)); // "IgNoRe 77 ThE 4444 nUmBeRs"

/*

Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

Further Exploration
Modify this function so the caller can determine whether non-alphabetic characters should be counted when determining the upper/lowercase state. That is, you want a function that can perform the same actions that this function does, or that operates like the previous version.

Mental Model:
Set a countedOrNotCounted variable and initialize to true or false respectively.
Extract both functions and accept the string argument and a true or false values for counted or not counted respectively.
Define a if, else if statement according to the state of countedOrNotCounted variable and invoke the correspoinding function.
Assign the return value to a previously declared variable and return this value from the invoked function return.

*/
