# Element Reference Gotchas

## Out of bound indices for string and arrays

Referencing an index greater than those that exist in a string character or an array will return `undefined`.

Referencing an index less than 0 in a string character or an array will return `undefined`.

## Invalid object keys

Trying to access an objects key / property that does not exist will return `undefined`. 

- use `object.hasOwnProperty('nameOfProperty')` which will return a boolean indicating whether a string exists as an objects property.

- use `array.includes on an Object.keys() to see if it contains a specific key / property name, boolean true or false will be returned.



