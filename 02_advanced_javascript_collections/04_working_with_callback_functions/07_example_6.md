# Example 6

```JavaScript
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => { return Object.keys(object).every(key => object[key][0] === key); }); // => [ { c: 'cat', d: 'dog' } ]
```

<br>

## The Breakdown

`.filter()` invoked on an array
  - built in JavaScript method
  - returns a new array
  - iterates over each element in the array
  - returns the elements in the array that return true from the callback expression

`.filter()` is a higher order function, it receives functions as arguments
  - callback function is invoked on the first element in the array and the value is passed to the callback and assigned to the value of a local parameter variable
    - ELEMENT: `{ a: 'ant', b: 'elephant' }`
    - PARAMETER: `object`
    - the callback makes an explicit return statement 
  
- within the return statement the `Object.keys()` function is invoked on the PARAMETER: `object`
  - this returns an array of the keys within the calling object: ['a', 'b']
  - method chaining is used on the array to invoke another method

- `.every()` is invoked on each element in the calling array
  - this returns `true` if all the expressions tests on each element evaluates to truthy values, otherwise it returns `false`
  - it takes an argument which is the current element in the array: `'a'`
  - it use the value with object referencing to access the value of the key with the same name (`object['a']: 'ant'`) within the object and then uses string referencing to access the value at index position `0` of that string: `'a'``
  - this values is compared using strict equality comparison to determine whether it is the same as the current value being iterated on by `.every()`: 'a'
  - since this comparison evaluates to `true` the method compares the next element in the array: `'b'` and uses the same mechanism to return `'e'` from the string `'elephant'` to compare for strict equality to `'b'`. Since this is not an equal comparison the test evaluates to `false` and thus this iteration of the `.every()` method returns `false` since all evaluations would need to return `true` for it to return as such.
  - this is fed back to the `.filter()` callback return which determines that the current object value is not to be included in the new array. 
    - The callback moves on to the next element in the array, the object: `{ c: 'cat', d: 'dog' }` and performs the same process with the new values
      - METHOD: Object.keys(object): `['c', 'd']`
        - METHOD: ['c', 'a'].every(): 
          - CURRENT ELEMENT: `'c'` === `'c'` (from 'cat') evaluates to `true` 
          - CURRENT ELEMENT: `'d'` === `'d'` (from 'dog') evaluates to `true` 
    - `.every()` returns true to the callback
  - `.filter()` callback returns true for element
  - `.filter()` method returns the element to the new array: `[{ c: 'cat', d: 'dog' }]`