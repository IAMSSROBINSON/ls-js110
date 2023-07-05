### PROBLEM STATEMENT

#### Sum Even Number Rows

Imagine a sequence of consecutive 'even' integers beginning with 2.
The 'even' integers are grouped in rows.
The first row contains 1 integer, the second row 2 integers, the third row 3 integers and so on..
Given an integer that representing the number of a particular row, return an integer representing the sum of all the 'even' integers in that row.

<br>

## PEDAC

### P: Understanding The Problem

CLARIFICATION:
Starting with the integer 2, a sequence of 'even' numbers that increases by 2 each time is created. 
The 'even' sequence is grouped into rows with one integer 2 being on the 1st row.
Each consecutive row has as many integers on it. 
Row two has two integers 4, and 6. 
Row three has three integers 8, 10 and 12. 
Row four has four integers 14, 16, 18 and 20 and so on..
A number will be provided that represents the Row number - the sum of all the numbers on this given row should be summed up and returned.

<br>

QUESTIONS:
- How many rows should there be?
  - As determined by the solution
- Will the integers be presented in a data structure?
  - No, only the row number will be provided
- Can the integers be generated beforehand?
  - No, they should be generated by the solution

<br>

INPUT: integer (Row number)
OUTPUT: integer (Sum of all even numbers that should be on this row)
RULES: 
  - Single integer (row number) as an input
  - Sequence of integers must be even numbers that increase by 2 with no gaps starting from the number 2
  - The Row number represents how many integers should be present on that row
  - Solution must generate all sequential even numbers required at the point the row number is provided
  - Single integer to be output (sum of all integers expected on that row)

<br>

RULES AND REQUIREMENTS:
  EXPLICIT:
    - Only row number provided as input  
    - Starting int is 2  
    - 1st row has 1 int: 2  
    - 2nd row has 2 ints: 4, 6  
    - 3rd row has 3 ints: 8, 10, 12  
    - 4th row has 4 ints: 14, 16, 18, 20  
    - and so on..  
    - Sum of all ints on given row returned as output  

  IMPLICIT:  
    - Solution should generate even number sequence
    - Sequence increases by 2 with no gaps

<br>

EXAMPLES:
Sequence: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

|Row Number       |Int Sequence       |Sum Of Int On Row |
|:----------------|:------------------|:-----------------|
|1                |2                  |2                 |
|2                |4, 6               |10                |
|3                |8, 10, 12          |20                |
|4                |14, 16, 18, 20     |68                |

<br>

[continue to PEDAC: E: Examples and Test Cases](./02_e_examples_and_test_cases.md#target-examples)
