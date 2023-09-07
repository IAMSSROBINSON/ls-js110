let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

/*

Gemma and some friends are working on a complex program to generate word ladders, transforming one word into another word one character at a time. The smallest of her tasks is to print the resulting ladder to the screen.

A "ladder" is simply an array of word strings; Gemma decides to transform this array into a single string where each word within the string is separated by a hyphen ('-'). For example, the array ['pig', 'pie', 'lie', 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.

Upon first glance, Gemma's code below looks like it should work. But it throws a TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?


forEach()
is an inbuilt JavaScript prototype method. It is called on an array object. The method accepts a callback function as an argument. The callback function is invoked on each element within the calling array but does not return any value. The forEach method is typically used to perform selection or to perform side effects on a variable or instance thereof outside of the forEach method.  The method itself returns undefined.

In this example code the forEach() method is taking an anonymous arrow function expression as an argument and the variable `word` is being used as a parameter to this anonymous function and represents the current element being iterated on within the array.

The error is produced because of the lack of an ending semi-colon on the statement on line 1. The missing semi-colon can cause undesirable behaviors since JavaScript uses semi-colons to recognize the end of statments. The statement on line 1 therefore gets appended to the statement on line 3 and thus this causes an error. This is a term known as Automatic Semi-Colon Insertion: When semi-colons are automatically inserted at the end of statements by the interpreter.
*/