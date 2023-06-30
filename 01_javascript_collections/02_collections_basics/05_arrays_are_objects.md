# Arrays Are Objects

- Arrays use non-negative integers as its keys (the index positions)
- Adding elements to an array increases its `.length` property
- Changing the value of the `.length` property can cause elements to change

<br>

## Adding properties to arrays

Since arrays are objects we can add properties to them to stand in line with the index positions.

The custom properties that are not enumerable are not counted by looping mechanisms, nor do they have whole number indexes - their values are referenced by the property name on the object directly.

The customs properties for arrays are also not read by the `.length` property.

Custom array properties are included in return of invoking the `Object.keys()` method on an array and the array elements are returned as strings.