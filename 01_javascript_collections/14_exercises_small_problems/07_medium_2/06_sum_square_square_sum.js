function sumSquareDifference (number) {
  return squareOfSum(number) - sumOfSquare(number);
}

function squareOfSum (number) {
  let count = [];
  for (let index = 1; index <= number; index++) {
    count.push(index);
  }

  return count.reduce((acc, el) => {
    return acc + el;
  }) ** 2;
}

function sumOfSquare (number) {
  let count = [];
  for (let index = 1; index <= number; index++) {
    count.push(index ** 2)
}

  return count.reduce((acc, el) => {
    return acc + el;
  });
}

console.log('sumSquareDifference:', sumSquareDifference(100));