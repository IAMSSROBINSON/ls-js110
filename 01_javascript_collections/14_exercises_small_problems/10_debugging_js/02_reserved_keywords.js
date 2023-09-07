
const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/*

We have been asked to implement a function that determines whether or not a given word is a reserved keyword. We wrote the isReserved function below along with some test cases, but we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

On line 19 the `console.log` method is invoked and a function invocation is passed as an argument so that its return value will be output to the console. The function in question is the function `isReserved()` and it passes a string value as an argument to the function.

On line 9 we define the function definition for this function and receive the argument and assign its value to the local parameter variable `name`.

Within the function body on line 10 the forEach() method is invoked on the global const vairable `RESERVED_KEYWORDS` which is a reference to an array of multiple string value elements.

The forEach() method take an anonymous callback function expression as an argument and this callback function takes an argument `reserved` which assumed the value of the current element being iterated on since the callback function is invoked on each element within the array in turn.

On line 11 an `if statement` is defined and the condition evaluated is whether the value of the function argument `name` has strict equality to the current element being iterated on `reserved`. If the condition evaluates to `true` the `if clause` is invoked and on line 12 the callback function attempts to return the boolean `true` value to the function. If the condition evaluates to `false` then the callback function attempts to return the boolean value `false` to the function.

The `forEach()` method only returns a meaningless value `undefined` so the `return` statement within the callback function iterations will have no impact on the method - which can only return `undefined`. Therefore the function will always default to the only value it can return to the function which occurs on line `16` returning `false`.

To fix the error a `for` loop can be used to iterate over the elements of the array. And since the for loop can define conditions the return statements will function as intended.

```JavaScript
// replace this function with the function above for the code to function as intended:
function isReserved(name) {
  for (let index = 0; index < RESERVED_KEYWORDS.length; index++) {
    let reserved = RESERVED_KEYWORDS[index];
   if (name === reserved) {
      return true;
    }
  }
  return false
}
```

*/