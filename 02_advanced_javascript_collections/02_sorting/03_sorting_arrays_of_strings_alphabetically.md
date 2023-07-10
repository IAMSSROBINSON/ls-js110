# Sorting an Array of Strings Alphabetically

Calling `.sort()` on an array of characters will return an array ordered alphabetically.

```JavaScript
let array = ['b', 'z', 'e', 'a', 'c', 's'];
console.log(array.sort()); // [ 'a', 'b', 'c', 'e', 's', 'z' ]
```

- the `.sort()` method is destructive and mutates the original array in place (in the same address it is stored in computer memory) thereby transforming the values in the original array, this is a side-effect as the original is mutated by the method (be intensional about the desired outcome)
- the `sort()` method returns a reference to the sorted array, the same original array that it mutates - therefore it can be saved to a variable if required
- `.slice()` to make a copy that won't mutate the original 
- `[...arraySpread]` make a copy that won't mutate the original 
- `let arrayCopy = Array.from()`to make a copy that won't mutate the original 

<br>