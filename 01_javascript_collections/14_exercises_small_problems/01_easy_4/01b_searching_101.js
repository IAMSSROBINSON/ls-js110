const readline = require('readline-sync');
let placements = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
let userInputs = [];

for (let idx = 0; idx < placements.length; idx++) {

  console.log(`Enter the ${placements[idx]} number: `);
  userInputs.push(readline.question());
}

if (userInputs.slice(0, userInputs.length - 1)
  .includes(userInputs[userInputs.length - 1])) {
  console.log(`The number ${userInputs[userInputs.length - 1]} appears in ${userInputs.slice(0, userInputs.length - 1)}`);
} else {
  console.log(`The number ${userInputs[userInputs.length - 1]} does not appear in ${userInputs.slice(0, userInputs.length - 1)}`);
}
/*

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

*/