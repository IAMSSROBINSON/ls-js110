integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

/*

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

P: UNDERSTAND THE PROBLEM
  - Clarification:

  Create a function that takes a positive number and converts it to a string without using any explicit conversion functions or methods.

  INPUT: int (positive numbers)
  OUTPUT: string (string data type of the same digits)

  RULES & REQUIREMENTS:
    EXPLICIT :
      - no methods
      - no built in functions/methods
        - toString X
        - String X
      - no implicit coercion from expression conversion using '' X
      - no concatenation operator + implicit conversion X
      - analyze and manipulate each number

    IMPLICIT:
      - function must perform the conversion
      - return value must be a primitive string value
      - return value must evaluate to true for non-strict / loose equality ==

    QUESTIONS:
    - do I need to separate the number into a single digit and work on the number on a digit by digit basis?
      - yes
      (how will you do this)

    - how would you covert a number to a string without functions/methods?
      - you would need some kind of a lookup table with string char counterparts

    - what functions/methods should you not use?
      - see explicit requirements above

    

E: EXAMPLES AND TEST CASES
  4321 => '4321' 
  0 => '0' 
  5000 => '5000' 
  1234567890 => '1234567890' 

  typeof '4321' === string => true

  MENTAL MODEL FOR SOLVING:
  
  

D: DATA STRUCTURE
 

A: ALGORITHM
  
C: CODE

*/