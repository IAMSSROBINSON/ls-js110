function sumEvenNumbersOnRow (rowNum) {
  let arrOfArrays = [];
  let startInt = 2;

  for (let currentRowNumber = 1; currentRowNumber <= rowNum; currentRowNumber++) {
    let row = createRow(startInt, currentRowNumber);
    arrOfArrays.push(row);
    startInt = row[row.length - 1] + 2;
  }

  let lastRow = arrOfArrays[arrOfArrays.length - 1];

  let finalSum = lastRow.reduce((acc, currEl)=>{
    return acc += currEl;
  });

  // console.log(arrOfArrays);
  // console.log(lastRow);
  return finalSum;
}

function createRow (startingInt, rowLength) {
  let row = [];
  let currentInt = startingInt;

  while (row.length < rowLength) {
    row.push(currentInt);
    currentInt += 2;
  }

  return row;
}

// PASS IN ROW NUMBER TO RECEIVE ROW SUM
console.log(sumEvenNumbersOnRow(1));  // 2
console.log(sumEvenNumbersOnRow(2));  // 10
console.log(sumEvenNumbersOnRow(4));  // 68


// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]
// console.log(createRow(14, 4)); // [14, 16, 18, 20]