['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*

What is the return value of map in the following code? Why?

METHOD:
Array.prototype.map();

METHOD RETURN VALUE:
[undefined, 'bear']

WHY:
The `.map()` method is invoked on the array which contains 2 string values as elements.

The method takes an anonymous callback function and invokes it for each element in the array. 

The value of the current element iterated on is assigned to the local parameter variable `elem`. 

Within the callback function body an `if` statement is defined and evaluates a conditional expression. If the length of the element is greater than 3 then the `if` clause is executed. 

Since `elem` takes the value of the current string the length property is called on the string value. If the expression evaluates to `true` then the value of `elem` is returned by the callback and is put into a new array.

The `.map()` method however will still return a default value of `undefined` if the condition is not met since a value must be returned for each element iterated on.

The method returns the accumulated return values by the callback in a new array.

Since there is no explicit return statement the first element will return a value of `undefined` from the callback function invocation and the second array element is the only element that meets the `if` statement condition which returns a value greater than 3, the element value is therefore returned to the resulting array by the callback function.

The output is there for a new array with the elements `undefined` and `bear` as elements.

*/