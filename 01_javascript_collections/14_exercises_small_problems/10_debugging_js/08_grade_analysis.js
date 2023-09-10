  function average(nums) {
    let sum = nums.reduce((total, num) => total + num);
    return sum / nums.length;
  }

  function median(nums) {
    nums.sort(compareValues); // inserted
    let median;
    let length = nums.length;
    if (length % 2 === 0) {
      median = average([nums[(length / 2) - 1], nums[length / 2]]);
    } else {
      median = nums[Math.floor(length / 2)];
    }

    return median;
  }

  function compareValues (a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  // Tests

  let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
  let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
  let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
  let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

  // should all log 'true':
  console.log(average(quarter1ExamScores) === 86.8);
  console.log(average(quarter2ExamScores) === 86.3);
  console.log(average(quarter3ExamScores) === 83.7);
  console.log(average(quarter4ExamScores) === 88.8);

  console.log(median(quarter1ExamScores) === 89.5);
  console.log(median(quarter2ExamScores) === 89.5);
  console.log(median(quarter3ExamScores) === 87);
  console.log(median(quarter4ExamScores) === 89.5);

/*

Professor Graham wrote some simple code to help him determine the average and median scores on each of his quarterly exams, but some of the test cases are failing. Figure out why, and write the code necessary for the program to work as expected.

=> WHY?
It appears that the resulting output numbers are being rounded and not being expressed as their true floating point / decimal value. This is only occurring in the `median` function executions.

For starters the `.sort()` function is not operating as intended. It is treating the number digits as individual characters and comparing them lexicographically by their UTF-16 code point values. This is not giving the intended result since the functionality of the `median` function depends on this working optimally.

Sorting the array elements in ascending order should allow the correct positioning of elements so that the median value can be found and the calculations can be done on the correct values.

*/