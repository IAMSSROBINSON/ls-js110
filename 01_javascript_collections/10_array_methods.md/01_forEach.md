# `Array.prototype.forEach()`

A built-in JavaScript method that iterates over an arrays / collections elements.

- defined in the Array.prototype object
- called on any array using dot notation
- takes callback function as an argument
  - the callback function is invoked internally by the method separately on each element in the array specifying the action to perform on the element within the body
  - the current element is provided as the argument to the callback function 
- returns undefined so it is best to perform selection or transformation in the broader scope with side effects if required
- forEach also passes a second argument (currentElement, currentIndexPosition)

<br>

## `forEach() with Strings`

There is no forEach method for Strings but Strings can be .split('') into arrays that can be iterated on.

```JavaScript
'abcd'.split('').forEach(function(char){(console.log(char))});
```

<br>

## `forEach() with Objects`

Objects also do not have the forEach method but parts of an object can be extracted to an array to be iterated over with the `forEach()` method or other array methods:

- An objects key : value pair members can be extracted to an array with `Object.entries(nameOfObject)`;

- An objects keys/properties can be extracted to an array with `Object.keys(nameOfObject)`;

- An objects values can be extracted to an array with `Object.values(nameOfObject)`;

<br>

## Array Destructuring Assignment

This is when elements of the array can be assigned to multiple variables by wrapping the variable names in brackets. The `let [variable names]` are declared in the destructuring from the `= array;`.
The variable names are assigned the element values in their corresponding position in the array.

```JavaScript
let [variableName] = array;
let [variableName1, variableName2] = array; // let array = [elementValue1, elementValue2];
```