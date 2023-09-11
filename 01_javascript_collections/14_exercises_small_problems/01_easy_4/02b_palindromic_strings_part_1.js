function isPalindrome (string) {
  return string.split('').reverse().join('') === string;
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

/*

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

=> palindrome: a string that reads the same forwards and backwards(reversed)
=> case sensitive √

Algorithm:
- start
- set function
- receive argument string
- split('') into array of charElements
- .reverse() arrayOfCharElements
- .join('') the arrayOfCharElements back into a string
- compare original string to joinedString
- return true if strict equality is achieved, else return false
- log result
- end

Concept definitions:

Array.prototype.split()
- an inbuilt JavaScript prototype method
- is called on a string literal or instance thereof
- takes a delimiter argument by which to denote each string element
- returns a new array containing the string elements denoted by the argument

Array.prototype.join()
- is an inbuilt JavaScript array method
- is called on an array object literal or instance thereof
- is a non-mutating method in that it does not mutates the caller
- takes a seperator argument by which to characterize how each element should be separated within the returned string
- providing no argument will by default add a comma between each element
- the method returns a single concatenating the elements of the array separated by the separator argument

Array.prototype.reverse()
- is an inbuilt JavaScript prototype array method
- it is called on an array object or instance thereof
- it is a destructive method in that it will mutate the calling array
- it does not take arguments
- it reverses the order of the element in place by reversing their index property within the array
- it returns the same mutated array with the elements in reverse order

*/