# Example 2

```JavaScript
[[1, 2], [3, 4]].map(arr => console.log(arr[0])); // 1 // 3 // => undefined
```

<br>

## The Breakdown
- `array.map()`
  - performed on an array
  - usually performs transformation but has no side effect in this instance
  - returns a new array
- takes a callback function
  - single line implicit return used
  - accepts an argument, currentElement
  - callback invoked on each argument
  - returns the value of the transformation: `undefined`, from the `console.log` method invocation
    - used by the method to return to new array
    - `console.log` method invocation prints output of element reference (the first element in the current array): 
    - 1 (first iteration)
    - 3 (second iteration)
    - callback returns the return value of the `console.log` method invocation `undefined` to the methods new array
- after iterating completes the method returns the new array with two `undefined` element values: `[undefined, undefined]`


<br>