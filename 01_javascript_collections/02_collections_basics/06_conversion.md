# Conversion

Strings can be converted to arrays and arrays to strings.

<br>

## `string.split()`

Can convert a string to an array of words or characters as determined by the delimiter argument.

- if called with no argument an array with the string as the only element in an array is returned.
- provide an empty string('') argument and the array returned will contain all characters as elements in the array

<br>

## `array.join()`

Can convert an array to a string of characters.

- called without arguments returns a single string combining all elements in the array

<br>

## Converting Objects to Arrays

- Using the `Object.entries(nameOfObject)` method will return an array containing each key : value pair within the specified object as an element within that array.