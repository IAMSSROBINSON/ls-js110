# PEDAC Guided Practice: Sort by Most Adjacent Consonants

For this step, use your analysis of the problem so far to write out a high-level algorithm that solves the problem at an abstract level. Avoid too much implementation detail at this stage.

## A: Algorithm

1. Receive the array of strings.

2. For each string in the array work out how many adjacent consonants there are and store it with the string.
  SUB ALGORITHM:
  - input: string
  - output: number (adjacent consonant count)

  - string have more than 1 word?
    - remove space from string and return string

  - determine all consonants?
    - create predetermined array of valid consonants
  
  - compare first char in string to all consonants
  - if it is consonant then increase counter + 1
  - if not consonant 
    - if count is less than or equal 1 then push 0 to newArray 
    - other wise push the count to new array
    - set count to 0
  - go to next char and repeat steps
  - when all chars have been counted sort the array from lowest to highest and return the highest number of adjacent consonants for that string
  - this is the adjacent count for that string
   
   
3. Compare all the counts and sort them from highest count to lowest.
   1. If we have an array of strings we can loop over each string and get back an object with the key/string : value/adjacentConsonantCount. We will get back and object for each string in the array and thus we can add each object to a new array.

4. We should now have an array of objects. 
   1. We can assign each object key:value pair to a new combined object. 
   2. Then turn each key value pair into an entry array within an overarching array.
   3. Then sort this array based on the values.
   4. Once they are sorted get the extract the keys in place to a separate array and return.
   5. This should be the completion of the task.









<br>

### Informal:


### Formal: