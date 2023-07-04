# PEDAC
{#target-data}

## D: Data Structures

Structuring the data we work with helps to interact and represent the data in a logical way. 

There a different ways to structure data and the best option will be dependent on the requirements of the problem.

The structuring of the data is closely linked to the algorithm - which is a set of steps that take the problem / input to solution / output, it is the way we interact and structure the data that will facilitate this.

<br>

#### Sum Even Number Rows

- Overall structure represents a sequence
- Within overall structure we encounter individual rows
- Individual rows is a set order in context of the sequence
- Individuals rows contain integers
- We can assume that integers are in a set order in the context of the sequence

REPRESENTING THE OVERALL STRUCTURE:
  - Array: []

REPRESENTING THE INDIVIDUAL ROWS:
  - Arrays: []

REPRESENTING ROWS IN SET ORDER IN OVERALL STRUCTURE:
  - Arrays within Overall Array
  [
    [],
    [].
    []
  ]

REPRESENTING ROWS IN SET ORDER, I
INDIVIDUAL ROWS CONTAIN INTEGERS IN SEQUENCE:
[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20]
  and so on..
]

If input row is `1` 
Index: 0
Data on row 1: [2]
This is accessing index `0` within the overall data structure
Then the value within this array should be summed up and returned

If input row is `2` 
Index: 1
Data on row 2: [4, 6]
This is accessing index `1` within the overall data structure
Then the value within this array should be summed up and returned

If input row is `3` 
Index: 2
Data on row 2: [8, 10, 12]
This is accessing index `2` within the overall data structure
Then the value within this array should be summed up and returned

If input row is `4` 
Index: 3
Data on row 2: [14, 16, 18, 20]
This is accessing index `3` within the overall data structure
Then the value within this array should be summed up and returned

It appears that the Row number will always be `-1` when referencing the index position within the overall Array data structure. This assumption should be true since array are `0` indexed ordered lists.

[continue to algorithm](./04_a_algorithm.md#a-algorithm)