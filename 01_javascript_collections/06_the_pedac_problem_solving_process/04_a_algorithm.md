# PEDAC 
{#target-algorithm}

## A: Algorithm

An algorithm is a logical sequence of steps for accomplishing the required output / objective / task.

Initially keep the algorithm high-level and avoid references to methods, function and code and instead rely on plain words to allow for abstract thinking.

If an element of an overall problem requires a great deal of sub-steps when crafting the algorithm then extract this step into a separate problem in isolation to solve the mini problem within the larger one.

<br>

#### Sum Even Number Rows

1. Create an empty rows array to contain all of the individual rows
2. Create a row array and add it to the overall rows array
   1. Problem: Create a row ** 
      Rules:
      - row is an array
      - array contains integers
      - integers are consecutive even numbers
      - integers in each row form part of overall larger sequence 
      - rows are of different lengths

        - input: all information needed to create the output
          - the start int 
          - the length of the row
        - output: the row itself: `[14, 16, 18, 10]`

      Examples: 
      Start value: 2
      Row length: 1
      Output: [2]

      Start value: 4
      Row length: 2
      Output: [4, 6]

      Start value: 8
      Row length: 3
      Output: [8, 10, 12]

      Start value: 14
      Row length: 4
      Output: [14, 16, 18, 20]

      Algorithm:
      1. create empty row to contain integers
      2. add the starting integer
      3. increment the starting integer by 2 to get the next integer in the sequence
      4. repeat steps 2 and 3 until array has reach the correct length
      5. return the row array


3. Repeat step 2 until all necessary rows are created as defined by the input value 
   1. all rows are created when length of the rows array is equal to the input (rows) integer
4. Sum integers in the final row
5. Return the sum of the final row


[continue to code](./05_c_code.md#target-code)