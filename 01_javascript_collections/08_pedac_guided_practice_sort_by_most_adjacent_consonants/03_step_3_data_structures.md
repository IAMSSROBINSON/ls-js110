# PEDAC Guided Practice: Sort by Most Adjacent Consonants

For this step, with reference to your analysis from the two preceding steps, make some notes rearranging whether you might need to use any particular data structures as part of your solution, and if so, which ones.

## D: Data Structures

We are dealing with an array input and the output must also return a new array so arrays are a necessary to solve the problem. 

To keep track of the adjacent consonant count an object data structure could be utilized whereby the key is the string element and the value is the count of adjacent consonants.

``` JavaScript
['aa', 'baa', 'ccaa', 'dddaa'];

{
  aa: 0,
  baa: 0,
  ccaa: 2,
  dddaa: 3
}
```