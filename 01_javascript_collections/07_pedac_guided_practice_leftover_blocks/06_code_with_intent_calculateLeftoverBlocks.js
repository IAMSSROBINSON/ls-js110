// #{target-code}

function calculateLeftoverBlocks(startingBlocksAmount) {
  if (startingBlocksAmount === 0) {
    return startingBlocksAmount;
  }

  let remainingBlocks = startingBlocksAmount;
  let requiredBlocks = 1;

  for (let layer = 1; remainingBlocks >= requiredBlocks; layer++) {

    remainingBlocks -= requiredBlocks;
    requiredBlocks = (layer + 1) * (layer + 1);

    if (remainingBlocks < requiredBlocks) {
      break;
    } else if (remainingBlocks === requiredBlocks) {
      remainingBlocks -= requiredBlocks;
      break;
    }
  }
  return remainingBlocks;
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true



/*

OR MORE CONCISELY REFACTORED:

function calculateLeftoverBlocks(startingBlocksAmount) {

  let remainingBlocks = startingBlocksAmount;
  let requiredBlocks = 1;
  let currentLayer = 1;

  while (remainingBlocks >= requiredBlocks) {
    remainingBlocks -= requiredBlocks;
    requiredBlocks = (currentLayer + 1) * (currentLayer + 1);
    currentLayer++;
  }
  return remainingBlocks;
}

*/