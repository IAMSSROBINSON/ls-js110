# Improved Join

We current use the `getAvailableSquares(board).join(', ')` to get a list of the available squares before coercing them to a string to interpolate into the output. 

<br>

## Write a function named joinOr that produces the following results:

```JavaScript
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"
```

/*

joinOr receives an array 
  - the function take two arguments
    - 1: the array of numbers
    - 2: a delimiter argument to separate each element with
    - 3: default parameter variable set to 'or'

If the array.length === 0 then return empty string

If the array has a length greater than 1
  - insert the 3rd parameter variable value into the penultimate position of the array
  - then coerce the value to a string before returning 

*/
<br>

