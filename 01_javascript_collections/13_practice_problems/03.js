[1, 2, 3].map(num => num * num);

/*

The following code differs slightly from the above code. What is the return value of map in this case? Why?

METHOD:
Array.prototype.map();

RETURN VALUE OF THE METHOD:
[1, 4, 9]

WHY:
The `.map()` method is invoked on the array and takes a callback function. 

Here we have used a anonymous function which accepts a `num` parameter.

The value of element being iterated on it assigned to the value of the parameter variable on each iteration of the callback function. 

A single line implicit return value is used to return the result of the expression of multiplying the variable value squared and returning it to the callback function. 

The method then returns a new array with the transformed values as elements.

*/