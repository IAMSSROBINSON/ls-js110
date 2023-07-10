# Generic Sorting

Using the `.sort()` method on an array of numbers converts the numbers to strings. If desiring to sort the numbers in an array numerically a callback function is passed to the method.

## `.sort((a, b) => a, b)`

- when a callback function is passed as an argument it takes 2 parameters
  - it compares 2 values at a time, `a` and `b` respectively 
  - if the return value of the callback when performing the operation `a - b` is less than `0` / `negative`
    - then the value that represents `a` will be positioned before `b`
  - if the return value of the callback is greater than `0` / positive then `b` is positioned before `a`
  - if the return value is `0` then the respective order within the array is respected / maintained
  - the method will traverse the values in an unexpected way but the final result is recognizable
  - if wanting to sort the array from `descending` to `ascending` then the returned expression should follow the reverse pattern `return b - a`
  - other statements and expressions can be placed with the `.sort(()=>{})` block, but the return of the number must be respected

<br>

## Sorting an array of words by their `.length` properties

```JavaScript
/*

How would you sort the following array by the lengths of each word?

we know that the .length property on strings returns the amount of characters in the string
we know that .sort is called on an array
we know that to sort numbers we should pass a callback function as an argument
  - and use (a, b) as parameter variable values that represent the respective elements being compared
  - to sort in ascending order the expression returned by the callback should be a - b
  - to sort the array in descending order the return should read b - a
so we can used the expression a.length - b.length to return the value from the callback which should still return a number that the interpreter will read and use for the comparison
  - the corresponding element will be placed in accordance with the return value

*/
let words = ['go', 'ahead', 'and', 'jump'];
console.log(words.sort((a, b) => a.length - b.length )); // [ 'go', 'and', 'jump', 'ahead' ]
console.log(words.sort((a, b) => b.length - a.length )); // [ 'ahead', 'jump', 'and', 'go' ]
```

<br>

```JavaScript

// scores is an array of subarrays that each contain three elements. Suppose this is an array that represents the scores for three players in a game of three rounds. We want to sort the players in ascending order of their total score. In effect, we want to get the following return value: [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

let playerScores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let counter = 0;

while (counter < playerScores.length) {

   playerScores.sort((a, b)=>{
    return a[counter] - b[counter];
  })

  counter++;
}
console.log(playerScores); // [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ]
```
