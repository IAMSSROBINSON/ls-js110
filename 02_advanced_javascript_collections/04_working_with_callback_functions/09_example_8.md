# Example 8

```JavaScript
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
```

<br>

## The Breakdown

.map called on the outer array: `[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]]`
  - returns a new array transformation
  - takes a callback function
  - iterates over each element within the array and assigns value to local parameter variable in turn: 
    - 1st element: `[[1], [2], [3], [4]]`
    - 2nd element: `[['a'], ['b'], ['c']]`
  - `forEach method is called on each array`
    - this method can only return `undefined` so this is returned once for each element to the `.map()` method
  - `.map()` will return these values in a new array: `[undefined, undefined]`
  - everything else that occurs in inconsequential
