[1, 2, 3].map(num => {
  num * num;
});

/*

What is the return value of map in the following code? Why?

METHOD:
Array.prototype.map();

RETURN VALUE OF THE METHOD:
[undefined, undefined, undefined];

WHY:
The `.map()` method is invoked on the array on line 1.

It takes a callback function that is invoked on each element in the array individually.

The `.map()` method performs transformation and returns the value returned from the callback function to be added to a new array to return to the caller.

Since on line 2 there is no explicit return statement - the callback function returns the default value of `undefined` on each iteration and thus an array containing 3 `undefined` elements is returned by the method.

The `.map()` method does not mutate the caller and instead returns a new array.

*/