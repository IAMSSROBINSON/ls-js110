# Example 9

```JavaScript
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```

<br>

## The Breakdown

`.map()` method invoked on the outer array
- returns a new array
- takes a callback function as an argument
  - iterates over each element in outer array
  - callback function takes a argument: the current element
  - the callback returns the value of another method invocation on the inner array element
    - returns an array
    - takes a callback as an argument
    - callback iterates over the current element within the current inner array 
      - defines an if condition which determines the return value

first iteration:
[[[1, 2], [3, 4]], [5, 6]]
  .map
  arr. [[1, 2], [3, 4]]
  elem. [1, 2]
    else clause 
      .map
        1 + 1 = 2
        2 + 1 = 3
        return [2, 3]
   elem. [3, 4]
    else clause 
      .map
        3 + 1 = 4
        4 + 1 = 5
        return [4, 5]
  ** return [4, 5]

  elem. [5, 6]
    if clause 
      .elem
        5 + 1 = 6
        6 + 1 = 7
        return [6, 7]
  **return [6, 7]

** return [[[2, 3],[4, 5]], [6, 7]]