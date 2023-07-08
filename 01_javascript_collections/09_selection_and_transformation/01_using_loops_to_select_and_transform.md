# Using Loops To Select and Transform

Besides iteration the two most common actions to perform on a collection are `Selection` and `Transformation`. 

## Selection

Picking one or more elements from a collection depending on the criteria set.
  - e.g. Pick out all odd numbers from an array
  - This results in fewer elements to take forward
  - Uses a loop, a counter, a way to retrieve the current value and a way to exit the loop

```JavaScript
// Select all 1s
let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let indexPosition = 0; indexPosition < numbers.length; indexPosition++) {
  let currentValue = numbers[indexPosition];
  if (currentValue === 1) {
    ones.push(currentValue);
  }
}
console.log(ones);
console.log(numbers);
```

<br>

## Transformation

Manipulating every single element in the collection. 
  - e.g. Increment all elements of an array by +1
  - This results in the same number of elements, but changed 
  - Uses a loop, a counter, a way to retrieve the current value and a way to exit the loop
  - Always pay attention to whether the original collection is mutated or if a new collection is returned!

```JavaScript
// append an s to each string in the array
let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let count = 0;

while (count < fruits.length) {
  let currentElement = fruits[count] + 's';
  transformedElements.push(currentElement);
  count++;
}
console.log(fruits);
console.log(transformedElements);
```

<br>

