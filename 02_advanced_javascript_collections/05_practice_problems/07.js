let a = 2; 
let b = [5, 8]; 
let arr = [a, b]; 

console.log(arr[0] += 2); // 4
console.log(arr[1][0] -= a); // 3

console.log(a); // 2
console.log(b); // [3, 8]
console.log(arr); // [4, [3, 8]]

/*

Given the following code, what will the final values of a and b be? Try to answer without running the code.

On line 1 a new variable `a` is declared and initialized to the primitive number value `2`.
On line 2 a new variable `b` is declared and initialized to an array value `[5, 8]`. `b` is a pointer to the array at the address in computer memory that it is stored at.
Line 3 declares a new variable and initializes it to an array. The array elements reference the variables of their respective names. 

Line 5 uses array referencing to access the value within the array at index position `[0]`, variable `a` which contains the value `2`, the addition assignment operator increases the value by `+2` and reassigns the value of the element within the array to `4`.

Line 6 uses array referencing syntax to access the value within the array at index position `[1]`, variable `b` `[5, 8]`. Element referencing is then used to access the element within the referenced array at position `[0]` (the first element in the array as referenced by `b`), `5`. The decrement assignment operator then decreases the value of the operand by the value as referenced by the variable `a`, `2` and reassigns the element within the array to this value `3`, meaning that variable `b` now references the array values `[3, 8]`. It is important to note that variable `b` is a pointer to an array and therefore when changing the values in place (such as in this case), the original value of the array is now mutated since variable `b` and `b` as referenced within the array both point to the same array object. This is not the case with variable `a` since `a` is a primitive value and primitive values store the values at the same place in memory where the variable is declared meaning they cannot be mutated in this way, the variables can only be reassigned to new values.

*/