# Example 1

```JavaScript
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0])); // 1 // 3 // => undefined
```

- the `forEach()` method is invoked on the array
- the array contains to other arrays an elements
  - each array contains 2 primitive values as elements
- the `forEach()` method takes a callback function as an argument
  - this means the callback function is passed to another function (the .map() method) as an argument
  - this makes the `.forEach()` method a higher order function since it receives a function as an argument
- The callback function in invoked on each element within the main array
- The callback function receives the current elements in the array as an argument and initializes it to a local parameter variable `arr`
- On each iteration the `console.log` method is invoked and passes the value of the parameter variable (which is an array element) and uses the element reference operator `[]` to accesses the value at index position `0` (the first element in the array) and outputs this value to the console
  - on the first iteration the first element in the first array is `1`
  - the callback function implicitly returns `undefined` as a value but it is not used
  - this is output by the `console.log()` method which itself returns `undefined` implicitly, but nothing is done with this value
  - the callback function implicitly returns `undefined` as a value but it is not used
  - on the second iteration the first element in the second array is `3`
  - this is output by the `console.log()` method which itself returns `undefined` implicitly, but nothing is done with this value
- When there are no more elements to iterate on the method returns `undefined` since the `forEach()` method can have no other explicit return value

<br>

## Breaking Down Iterative Code

Type of action performed?
  - callback function
  - function call
  - conditional
  - method call

On What value is the action performed?
  - calling array
  - calling object
  - variable

Side Effect of the action?
  - selection
  - transformation (destructive?)
  - assignment
  - reassignment
  - output value

- Return value of the action?
  
- Return value of the Instigator of the action?