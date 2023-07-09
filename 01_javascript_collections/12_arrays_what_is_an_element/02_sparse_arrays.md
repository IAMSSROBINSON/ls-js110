# Sparse Arrays

Since the number of elements in an array is not necessarily the same and the return value of invoking the `.length` property on the array - we know that an array can contain gaps.

By increasing the size of the `.length` property and adding no extra values to the array, this will create gaps that reflect in the return value of `.length` as the gaps are counted towards the result although when accessing the values they return `undefined`  - but not as a set value undefined, this values will not be present when defining the `Object.keys(array)` but they will be present when iterating over the array itself.

<br>

It is important to consider what is meant by an empty array. 

- the `.length` property includes gaps in the return
- `Object.keys(array)` ignores gaps
