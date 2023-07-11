# Referencing Collection Elements

Collection can contain other collections. Array can contain other array and object elements and objects can contain other objects and arrays as values.

<br>

## Nested Array

```JavaScript
// nested array collection contains two array elements within an array outer structure
let array = [[1, 2], [3, 4]];
```

Accessing the nested collections is as expected: `array[0] => [1, 2]` and `array[1] => [3, 4]`.
The index positions are respected when accessing an array within an array and array referencing is used to retrieve the values: `array[0][0] => 1` and `array[1][1] => 4`

