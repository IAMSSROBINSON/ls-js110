['ant', 'bear', 'caterpillar'].pop().length;

/*

What is the return value of the following statement? Why?

ARRAY METHOD:
Array.prototype.pop();

RETURN VALUE OF THE METHOD:
11

WHY:
The `.pop()` method is a destructive method that removes the last element present within an array. 

The method mutates the caller in place - meaning that the same array the method is called on is mutated at the same address in computer memory that it is stored at meaning the original value of the array is mutated. 

The element returned is the primitive string value 'caterpillar'.

The `.length` property is called on this value and returns the amount of characters present in the string. Since strings are essentially but not officially (in JavaScript) character arrays - the `.length property` can be called on it. The amount of characters present in the string is 11 and this value is returned by the chaining of these methods.


*/