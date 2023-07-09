[1, 2, 3].every(num => {
  return num = num * 2;
});

/*

What is the callback's return value in the following code? Also, what is the return value of every in this code?

METHOD:
Array.prototype.every();

CALLBACK FUNCTION RETURN VALUES:
2
4
6

WHY:
On line 1 the `.every()` method is invoked on the array. 

It accepts a callback function as an argument and in this code an anonymous arrow function is used as the callback function.

Each element in the array invokes the callback function and the value of the element is assigned to the parameter variable. 

The callback function reassigns the value of the variable to the return value of the expression which multiplies the variable value by * 2. This value is returned by the callback with the inclusion of the return statement on line 2 thus returning the transformed values individually.

The `.every()` array method returns boolean `true` if every return value from the callback function evaluates to a truthy value and returns `false` if at least one evaluates to a falsy value.

*/