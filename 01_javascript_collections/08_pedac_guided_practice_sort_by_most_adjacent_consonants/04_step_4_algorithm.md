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
   

1. Compare all the counts and sort them from highest count to lowest.

2. Return an array with the strings in the new sorted order as elements.









<br>

### Informal:


### Formal: