# `String.trim()`

- Removes whitespace from the start and end of a string value
- White space is any character spaces, `\n` new line characters or tab spaces `\t`
- Encompasses both `String.trimStart()` and `String.trimEnd()` methods which remove whitespace from the start and end of string values respectively
- Often used on user input values to clean the data value
  
```JavaScript
console.log('    Hello World!   '.trim()); // Hello World!
console.log('    Hello World!   '.trimStart()); // Hello World!    \0
console.log('    Hello World!   '.trimEnd()); //     Hello World!
```

