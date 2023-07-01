# `.String.split()`

- converts a string value into an array of substrings
- Accepts separator argument which separates the strings into array string elements
- If no argument is provided the entire string becomes the only array element
- Empty string argument('') will separate a string by each character
- A single character space argument(' ') will create substring array elements from each word that is separated by a single space.

```JavaScript
let string = "Hello, World!";
console.log(string.split(', ')); // [ 'Hello', 'World!' ]
```