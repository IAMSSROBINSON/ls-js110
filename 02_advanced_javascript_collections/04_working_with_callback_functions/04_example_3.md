# Example 3

```JavaScript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

<br>

## The Breakdown

- the `.map()` method is invoked on an array object
  - the array object contains two nested arrays as elements 
  - each nested array contains two primitive number element values
  - the return value of the `.map()` method is a new array
- the method takes a callback function as an argument
  - the callback takes an argument which is assigned the value of the current element in the outer array being iterated on
  - the callback method is invoked on each element with the outer array
    - first iteration: the argument passed to the callback: `[1, 2]`
    - the `console.log` method is invoked
      - the `console.log` method has an implicit return value of `undefined` which is not used
      - the `console.log` method uses element referencing `[0]` to access the first element with the currently iterated array and outputs its value to the console - outputting primitive number: `1`
      - on line 6 the callback uses element referencing to access the same element as the prior `console.log` method and returns the value from the callback to the method
        - this had a side effect as the final array return value of the method call will be mutated
  - the callback is called on the next element in the outer array and repeats the same process but with new values.
    - the element being iterated on is the nested array: `[3, 4]`
      - and the element referenced within the callback body is the first element of this array: `3`
      - the `console.log` method returns undefined but outputs the number value `3`
      - the explicit return statement performs transformation by returning the value `3` to the method which will go into the final array being returned by the method
- all the outer array elements have been iterated on and the method returns a new array with the elements returned from the callback: `[1, 3]`. This return value is not saved to a variable currently.

<br>