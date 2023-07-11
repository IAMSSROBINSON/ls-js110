# Updating Collection Elements

Elements within a nested array can be updated in the same ways as elements in a single array structure, using reassignment in place.

<br>

```JavaScript
let array = [['Socrates'], ['Aristotle']];
array[1][0] = 'Plato'; // array[1] is an element reference => ['Aristotle'], then adding [0] = 'Plato' is an element assignment
console.log(array) // [['Socrates'], ['Plato']]
```

This chained reference is a permanent action that mutates the element and thus also the original array.

<br>

## Inserting Elements into An Inner Array

You can insert any type into a nested array, just like a single tiered array.

```JavaScript
// inserting a new element by referencing a free index position in a nested array
array[1][1] = 'Aristotle';
console.log(array); // [ [ 'Socrates' ], [ 'Plato', 'Aristotle'  ] ]
```

```JavaScript
// pushing a new element to append to the end of a nested array
array[1].push('Aristotle');
console.log(array); // [ [ 'Socrates' ], [ 'Plato', 'Aristotle' ] ]
```