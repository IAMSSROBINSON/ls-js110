# Example 4

let myArr = [[18, 7], [3, 12]].forEach(arr => { return arr.map(num => { if (num > 5) { return console.log(num); } }); });


<br>

## The Breakdown

- `let myArr` declares a variable in the global scope
  - it will store the return value of invoking the `forEach()` method on the array outer array `[[18, 7], [3, 12]]`
    - the `forEach()` method is a higher order function 
    - the method returns undefined so it is mostly used to produce transformations to data in the outer scope
      - it takes a callback function as an argument
        - the callback function is invoked on each element within the outer array
          - the outer array contains two nested arrays, each with two primitive number values as elements
          - the callback functions return value is also `undefined`
        - within the body of the callback the `.map()` method is invoked on on the current element, the nested array
          - this callback also takes an argument, which is the current element within the first array, the number `18`
          - within the body of this callback an `if` statement is defined and evaluates the conditional expression to determine whether the value of `num`: the current number value: `18`` is `>` `5`.
            - this needs to evaluate to true for the if clause to execute
              - since: `18 > 5` evaluates to `true` the condition is met and the value: `18` is printed to the console
              - `console.log` explicitly returns the return value of the `console.log` method invocation
                - since `console.log` implicitly returns `undefined`
                - this value is returned in a new array
                - this occurs for the second element in the first array also
                  - the value: `7` is greater than `5` so the number `7` is output to the console and the value `undefined` is returned by the `console.log` method invocation and stored as another element in the new array 
                    - new array now contains [undefined, undefined]
        - this then occurs for the second element in the outer array: `[3, 12]`
          - the process repeats but only one value meets the `if` condition 
            - `3` is not greater than `5` so this value is not output to the console
            - the callback function does however return `undefined` as a standalone value to the method to be placed into a new array
            - `12 > 5` evaluates to true so this executes the `if` clause and outputs the value: `12` to the console.
            - the `console.log` method invocation returns `undefined` implicitly, which will be added to the return value of the method: [undefined, undefined]
  -  the method returns this array to the caller (the `forEach()` method)
     -  since forEach only returns `undefined` it will thus return this value to be stored in the `myArr` variable
    