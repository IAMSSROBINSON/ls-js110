# Examples and Test Cases

You are provided with the following test cases for this problem.

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

With reference to your initial mental model and questions from Step 1, make some notes about the test cases. Do the test cases confirm or refute different elements of your original analysis and mental mode? Do they answer any of the questions that you had, or do they perhaps raise further questions?

<br>

## PEDAC

### E: Examples and Test Cases

- Passing number of blocks: 0, returns: 0 blocks remaining  
- Passing number of blocks: 1, returns: 0 blocks remaining
- Passing number of blocks: 4, returns: 3 blocks remaining
- Passing number of blocks: 14, returns: 0 blocks remaining
  - 1st layer => 1 block
  - 2nd layer => 4 blocks
  - 3rd layer => 9 blocks?? or 1, 4 and 4 for 5 layer height??


Still unsure what a valid and invalid structure is and how to determine it?
  - assumption that a 1 layer structure is valid even though not supported by four blocks?
  - there must be at least 1 layer with 1 block over the supporting 4 block layer
  - always start with 1st layer, then second layer and so on..