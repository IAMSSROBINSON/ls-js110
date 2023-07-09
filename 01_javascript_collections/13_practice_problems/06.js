let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/*

How does Array.prototype.fill work? Is it destructive? How can we find out?

METHOD:
Array.fill()

RETURN VALUE OF THE METHOD:
[1, 1, 1, 1, 1]

WHY:
The .fill method accepts up to 3 arguments.
- the value to fill each element in the calling array with
- the starting index with which to fill
- the ending index, upto but not included with which to stop filling element values with

So in this array the starting index is `1` with value `2`.
This skips the value at index position 0 with value `1`. 
The value 2 is filled with 1 instead.

The same thing occurs to the value 2, 4 and 5 and index positions 2, 3, 4 respectively. The values are filled with the primitive number value 1. 

The index position of the final element in the array is 4. Since the argument specified that the method should be applied up to but not including this index position the .fill method will stop in this case after the final element in the array.

The calling array is mutated since the method is destructive and mutates the values in place.

*/