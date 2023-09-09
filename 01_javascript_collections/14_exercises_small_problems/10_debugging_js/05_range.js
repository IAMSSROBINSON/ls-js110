function range(start, end = -1) {
  let range = [];

  if (end === -1) {
    range = singleArgumentRange(start);
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function singleArgumentRange(end) {
  return range(0, end);
}

// Examples
console.log(range(10, 20));
// invokes range function declaration from line 1. Passes startIndex(10) and endIndex(20) as an argument to the function.
// defined for loop. while element(start(10)) is less than or equal to end(20), increment the value of element(10) by +1 on each iteration.
// push the of element to range empty array variable.
console.log(range(5));

/*

We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

The example invocations fail with an error because there are too many uses of the same name in different contexts and the JavaScript interpreter cannot make sense of the users intension for the different use cases. 

To fix the code we can change the name of the second function from `range` to `singleArgumentRange` and set up a guard clause to execute at the start of the initial `range` function to handle cases where only a single argument is passed to the `range` function. We can then invoke the `singleArgumentRange(start)` function with the single argument and it will use it as intended (for the end index), setting the start index to 0 and the end index to the single argument. Then the `singleArgumentRange` function will invoke the initial `range` function with these new arguments.
*/