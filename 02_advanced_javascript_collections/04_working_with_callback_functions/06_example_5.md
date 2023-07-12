# Example 5

```JavaScript
[[1, 2], [3, 4]].map(arr => { return arr.map(num => num * 2); });
```

<br>

## The BreakDown

- `.map()` invoked on the outer array: [[1, 2], [3, 4]]
  - `.map()` returns a new array and performs transformation
  - `.map()` is a higher order function as it receives functions as arguments 
  - takes a callback function
    - callback function take an argument
    - parameter variable is assigned the value of the current value being iterated on: `[1, 2]`
      - within the body of the callback
        - explicit return statement is encountered 
        - returns the return value of invoking the `.map()` method on each element of the inner array
        - this `.map()` returns a new array with the returned values
          - it takes an argument and assigns the value to the parameter variable
          - first element being iterated on within the first array is: `1` and the second is `2`
          - returns the value multiplied by 2
          - this is transformation
          - first iteration returns: `1 * 2` = `2`
          - second iteration returns: `2 * 2` = `4`
          - returns array: `[2, 4]`
    - parameter variable is assigned the value of the current value being iterated on: `[3, 4]`
      - repeats the same process for second nested array and returns another new array
        - performs transformation
          - first iteration returns: `3 * 2` = `6`
          - second iteration returns: `4 * 2` = `8`
          - returns array: `[6, 8]`
    - single line implicit return is used twice
    - the original caller method returns a new array: `[[2, 4], [6, 8]]`