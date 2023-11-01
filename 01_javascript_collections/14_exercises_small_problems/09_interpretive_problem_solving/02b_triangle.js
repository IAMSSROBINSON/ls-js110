function printTriangle (number) {
  let string = '*';
  for (let count = 1; count <= number; count++) {
    console.log(`${string.repeat(count)}`);
  }
}

printTriangle(5);

/*

Write a function called printTriangle that takes an integer n as its parameter and prints a right-angled triangle of asterisks. The triangle should have n rows, where the first row contains 1 asterisk, the second row contains 2 asterisks, and so on, up to the nth row with n asterisks

Output:
*
**
***
****
*****

*/
