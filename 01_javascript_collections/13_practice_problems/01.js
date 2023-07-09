[1, 2, 3].filter(num => 'hi');

/*

What is the return value of the filter method call below? Why?

METHOD: 
Array.prototype.filter();

RETURN VALUE OF METHOD:
[1, 2, 3]

WHY:
The return value of invoking the `.filter()` method on line 1 of the code is a new array containing the same values.

The reason is because the callback function is invoked for each element in the array. If the expression in the callback evaluates to true then the corresponding element in the array is returned from the callback function. Since the expression is a primitive string value 'hi` is a truthy value it evaluates to `true` and thus the current element within the array is returned from the callback function. Since this value always evaluates to `true` all of the elements with the array are returned by the callback function to a new array containing the same elements - It is important to distinguish that the array returned by the method is not the same array - it just looks the same.

*/