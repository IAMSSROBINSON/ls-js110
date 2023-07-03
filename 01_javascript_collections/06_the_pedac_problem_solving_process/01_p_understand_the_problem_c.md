### PROBLEM STATEMENT

#### Sum Even Number Rows

Imagine a sequence of consecutive integers beginning with 2.
The integers are grouped in rows.
The first row contains 1 integer, the second row 2 integers, the third row 3 integers and so on..
Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.

<br>

##### P: Understand The Problem

###### Clarify & Restate

Consecutive integers are whole numbers that follow each other without gaps. This sequence starts at the number 2.

Integers that follow each other will be grouped into rows.

The first row has only 1 integer
The second row has 2 integers
The third row has 3 integers
and so on..

A row number will be provided
Return the sum of all of the consecutive integers on that row


QUESTIONS:
- does the first row have the starting integer: 2?
  * yes, the first row starts with integer 2
- does consecutive numbers mean 2, 3, 4, 5 ect or 2, 4, 6, 8 ect?
- what number should the integers go up to?
  - this is not determined
- do I have to generate the list of numbers?
  - yes, you must generate the list upon receiving the row number
- are the integers provided? in what format? (in an array?)
  - no, the integers are not provided you must generate them as above


#### RULES & REQUIREMENTS

  ##### EXPLICIT:

    INPUT: integer (row number)
    OUTPUT: sum of all consecutive integers on that row
    RULES: 
      
      - numbers are consecutive
      - first row has one number: 2 => 2
      - second row has two numbers: 3, 4 => 7
      - third row has three numbers: 5, 6, 7 => 18
      - fourth row has four numbers: 8, 9, 10, 11 => 28
      - fifth row has five numbers: 12, 13, 14, 15, 16 => 70
      - when given the row number
        - generate the row sequence
      - return the sum of all integers on that row

  ##### IMPLICIT:
  - The first row starts with the first number: 2
  - row number === number of elements in that row 

EXAMPLE:
```JavaScript
// list of consecutive numbers starting at 2 with no gaps
let array = [
  [2],
  [3, 4],
  [5, 6, 7],
  [8, 9, 10, 11], 
  [12, 13, 14, 15]
]
// row number sum requested: 1
  // row 1 contains [2]
  // index of row 1 is 0
  // row(1) = index(0)
  // rowNumber = array[rowNumber - 1]
```

