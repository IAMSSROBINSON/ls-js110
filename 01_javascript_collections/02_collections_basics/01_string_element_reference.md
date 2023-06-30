# String Element Reference

Strings use integer based index that represent each character in the string (just like in C - Strings are character arrays). 

The index starts the count at `0` and increments by one for the remaining index values for as many times as their are characters. Specific characters can be referenced by their index number position in the character array. An empty string is also considered a character. 

<br>

## Referencing More Than One Char With `.slice`

The `.slice()` method invoked on a string object can allow for returning more than a single character from the object.

  - it accepts two arguments
    - the index position to start the extraction
    - the index position to end the extraction (this indexes element is not included/returned)
    - it returns the extracted portion of the string object
  - if no argument it provided then the entire string is copied and returned
  - if you provide negative arguments to the `.slice()` method then it counts backwards from the end of the string object, it treats the first argument as the string length e.g. `9 + (-4) = 5` and the second index as the index
  - if the start index is greater than the ending index then empty string is returned

<br>

## `.substring()`

- accepts a starting index
- accepts an ending index (up to not including)
- returns substring from string object
- if start index is somehow greater than the ending index `.substring` will swap the index around
- when either argument is negative `.substring()` treats them as `0`