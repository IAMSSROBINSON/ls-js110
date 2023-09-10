function neutralize(sentence) {
  let words = sentence.split(" ");

//   words.forEach(word => {
//     if (isNegative(word)) {
//       const index = words.indexOf(word);
//       words.splice(index, 1);
//     }
//   });
//   return words.join(" ");
// };

return words.filter(word => !isNegative(word)).join(" ");

}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}


console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);


/*

We wrote a neutralize function that removes negative words from sentences. However, it fails to remove all of them. What does happen? How would you fix this problem?

On line 18 the `neutralize` function is invoked passing a string as an argument.
The function declaration for this function occurs on line 1. The string argument is received and assigned to the local parameter variable value.

On line 2 the string is split into an array of string elements delimited by spaces.

On line 4 the forEach method is invoked on the array of strings and passes an anonymous array function as a callback function which receives the argument `word` which assumes the role of the current element being iterated on within each iteration. 

If the value of the current element is negative (is included in the array of negative words array) then the if clause is executed and assigns the indexOf the currenet element within the calling array to a variable and seeks to splice / remove that element from the calling array. 

When iteration is complete the function rejoins the contents of the array into a string value and returns it to the caller to output the value to the console on the final line of code.

string: 'These'
index: 0

string: 'dull' => removed
index: 1

string: 'boring' => notRemoved
index: 2

string: 'cards'
index: 3

string: 'are'
index: 4

string: 'part'
index: 5

string: 'of'
index: 6

string: 'a'
index: 7

string: 'chaotic' => removed
index: 8

string: 'board'
index: 9

string: 'game'
index: 10

The `slice()` method destructively mutates the caller during iteration which causes the string `boring` to be skipped undesirably because the element index positions shift down by -1 when an element is removed but the iteration method index values on the elements move up and thus the element `boring` is missed since it does from index position 2 to 1 as the iteration method goes from 1 to 2.

To fix the problem we can instead return a new array using the same values. We will use the `.filter()` method on the array of strings and return the values that are not included in the isNegative method thereby creating an array of strings without the negative words which is the desired result. We invoke the `.join(" ")` method on the returned array using method chaining and convert the array into a string before returning it to the caller to output the value to the console.

*/