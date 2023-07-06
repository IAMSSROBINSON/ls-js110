# PEDAC Guided Practice: Sort by Most Adjacent Consonants

With reference to your initial mental model and questions from Step 1, make some notes about the test cases. Do the test cases confirm or refute different elements of your original analysis and mental mode? Do they answer any of the questions that you had, or do they perhaps raise further questions?

## E: Examples and Test Cases

```JavaScript
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa']

console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan']

console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar']

console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']
```

### Confirm / Deny Assumptions
- descending order, highest to lowest amount of adjacent consonants 
- no empty strings will be included
- yes, a string can contain more than one word as separated by a space
- only adjacent consonants count, a single consonant is equal to 0 adjacent consonants