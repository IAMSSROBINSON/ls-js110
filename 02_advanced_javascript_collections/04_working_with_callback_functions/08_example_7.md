# Example 7

```JavaScript
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
```

<br>

## The Breakdown

- `.map()` invoked on the array: `[[8, 13, 27], ['apple', 'banana', 'cantaloupe']]`
- accepts a callback function as an argument
  - value of current element in the array passed as an argument to local parameter variable value
  - iterates on each element within the array: 
    - element1: `[8, 13, 27]`
    - element2: `['apple', 'banana', 'cantaloupe']`
  - returns a new array with a value for each element
  - mostly performs transformation on the calling array but not necessarily

Parameter variable: arr
Current element: element1: `[[8, 13, 27]`
  - `.filter()` method called on this array
  - iterative built in JavaScript method
  - returns a new array with element from the array whose callback function return a truthy value
    - Current element: `8`
    - evaluates whether the `typeof` is a number: √
      - evaluates whether value is greater than `13` x
    - current element not added to new array by the callback from `.filter()`

    - Current element: `13`
    - evaluates whether the `typeof` is a number: √
      - evaluates whether value is greater than `13` x
    - current element not added to new array by the callback from `.filter()`

    - Current element: `27`
    - evaluates whether the `typeof` is a number: √
      - evaluates whether value is greater than `13` √
  
- current element added to new array by the callback from `.filter()` method
- transformation occurred: 
  - `[27]` added to new array by `.map()` callback return
  
- next element in array iterated on by `.map()` callback: 
  - element2: `['apple', 'banana', 'cantaloupe']`
  - `.filter()` method called on this array
  - Current element: `apple`
    - evaluates whether the `typeof` is a number: x
    - `else` clause invoked
      - returns evaluation of the `.length` property on the string to see whether the value is less than `6`
        - `apple`.length = 5
        - 5 < 6 √ 
        - evaluates to `true` and returns `true` by the callback 

  - Current element: `banana`
    - evaluates whether the `typeof` is a number: x
    - `else` clause invoked
      - returns evaluation of the `.length` property on the string to see whether the value is less than `6`
        - `banana`.length = 6
        - 6 < 6 x 
        - evaluates to `false` and returns `false` by the callback 

- Current element: `cantaloupe`
    - evaluates whether the `typeof` is a number: x
    - `else` clause invoked
      - returns evaluation of the `.length` property on the string to see whether the value is less than `6`
        - `cantaloupe`.length = 10
        - 10 < 6 x
        - evaluates to `false` and returns `false` by the callback 

- `.filter()` method returns `true` for the element: `'apple'` and adds it to returning array: `['apple]`
- `.map()` method returns this value to its transformed array `[[27], ['apple']]`