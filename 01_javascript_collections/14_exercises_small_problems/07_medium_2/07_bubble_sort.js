function bubbleSort (array) {

  for (let idx1 = 0; idx1 < array.length; idx1++) {
    let swapped = false;
    const currentElement = array[idx1];
    console.log('currentElement', currentElement);

    for (let idx2 = idx1 + 1; idx2 < array.length; idx2++) {

      let nextElement = array[idx2];
      console.log('nextElement', nextElement);
      if (array[idx1] > array[idx2]) {
        let temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  console.log(array);
  return array;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*

Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

6	2	7	1	4	Start: compare 6 > 2? Yes
2	6	7	1	4	Swap
2	6	7	1	4	6 > 7? No (no swap)
2	6	7	1	4	7 > 1? Yes
2	6	1	7	4	Swap
2	6	1	7	4	7 > 4? Yes
2	6	1	4	7	Swap
2	6	1	4	7	2 > 6? No
2	6	1	4	7	6 > 1? Yes
2	1	6	4	7	Swap
2	1	6	4	7	6 > 4? Yes
2	1	4	6	7	Swap
2	1	4	6	7	6 > 7? No
2	1	4	6	7	2 > 1? Yes
1	2	4	6	7	Swap
1	2	4	6	7	2 > 4? No
1	2	4	6	7	4 > 6? No
1	2	4	6	7	6 > 7? No
1	2	4	6	7	1 > 2? No
1	2	4	6	7	2 > 4? No
1	2	4	6	7	4 > 6? No
1	2	4	6	7	6 > 7? No
1	2	4	6	7	No swaps; all done; sorted

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.


P: Understanding The Problem
Create a function that receives an array argument.
The function should use Bubble Sort to sort the elements of the array in place thereby mutating the array.
The array will have at least 2 elements and can be an array of string elements or integers.

Input: Array(of strings of integers)
Output: Array(The same array mutated and sorted in place)
Rules:
  Explicit:
  - Create a function
  - Receive array argument
  - Sort array in place using Bubble sort
    - if currentElement > next element then sway the current element with the next element
    - after swap the last swapped element is compared to the next element
    - if current element is not greater than the next element then do not swap positions 
    - iterate like this until no more swaps can be made
  
  Implicit
  - array could be an array of strings
  - array could be an array of numbers
    - how does this affect the bubble sort algorithm

Questions:
- should I assume the array arguments will each be of one data type e.g. an array of strings or an array of numbers?


BUBBLE SORT
- one of the simplest sorting algorithms
- makes multiple passes over an array
- on each pass two elements next to each other are compared
- if the first value is greater than the second then they swap places
- the process is completed until a complete pass(iteration/loop of all elements) is made without swaps
- when this occurs the array is sorted

E: Examples and Test Cases

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

ORIGINAL ARRAY ARGUMENT: [6, 2, 7, 1, 4];

LOOP1:
currentElement => 6
nextElement => 2
is currentElement(6) > nextElement(2) => YES => SWAP ORDER => 62 BECOMES 26
ARRAY NOW => [2, 6, 7, 1, 4];

currentElement => 6
nextElement => 7
is currentElement(6) > nextElement(7) => NO => NO SWAP OF ORDER => 67 STAYS AS 67
ARRAY NOW => [2, 6, 7, 1, 4];

currentElement => 7
nextElement => 1
is currentElement(7) > nextElement(1) => YES => SWAP ORDER => 71 BECOMES 17
ARRAY NOW => [2, 6, 1, 7, 4];

currentElement => 7
nextElement => 4
is currentElement(7) > nextElement(4) => YES => SWAP ORDER => 74 BECOMES 47
ARRAY NOW => [2, 6, 1, 4, 7];

LOOP2:
ARRAY NOW => [2, 6, 1, 4, 7];

currentElement => 2
nextElement => 6
is currentElement(2) > nextElement(6) => NO => NO SWAP OF ORDER => 26 STAYS AS 26
ARRAY NOW => [2, 6, 1, 4, 7];

currentElement => 6
nextElement => 1
is currentElement(2) > nextElement(6) => YES => SWAP ORDER => 61 BECOMES 16
ARRAY NOW => [2, 1, 6, 4, 7];

currentElement => 6
nextElement => 4
is currentElement(6) > nextElement(4) => YES => SWAP ORDER => 64 BECOMES 46
ARRAY NOW => [2, 1, 4, 6, 7];

currentElement => 6
nextElement => 7
is currentElement(6) > nextElement(7) => NO => NO SWAP OF ORDER => 67 STAYS AS 67
ARRAY NOW => [2, 1, 4, 6, 7];

LOOP3:
ARRAY NOW => [2, 1, 4, 6, 7];

currentElement => 2
nextElement => 1
is currentElement(2) > nextElement(1) =>YES => SWAP ORDER => 21 BECOMES 12
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 2
nextElement => 4
is currentElement(2) > nextElement(4) NO => NO SWAP OF ORDER => 24 STAYS AS 24
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 4
nextElement => 6
is currentElement(4) > nextElement(6) NO => NO SWAP OF ORDER => 46 STAYS AS 46
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 6
nextElement => 7
is currentElement(4) > nextElement(6) NO => NO SWAP OF ORDER => 67 STAYS AS 67
ARRAY NOW => [1, 2, 4, 6, 7];

LOOP 4:
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 1
nextElement => 2
is currentElement(1) > nextElement(2) NO => NO SWAP OF ORDER => 12 STAYS AS 12
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 2
nextElement => 4
is currentElement(2) > nextElement(4) NO => NO SWAP OF ORDER => 24 STAYS AS 24
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 4
nextElement => 6
is currentElement(4) > nextElement(6) NO => NO SWAP OF ORDER => 46 STAYS AS 46
ARRAY NOW => [1, 2, 4, 6, 7];

currentElement => 6
nextElement => 7
is currentElement(6) > nextElement(7) NO => NO SWAP OF ORDER => 67 STAYS AS 67
ARRAY NOW => [1, 2, 4, 6, 7];

FULL ITERATION WITHOUT ANY SWAP ACHIEVED

Mental Model:
[6, 2, 7, 1, 4];
Loop over the array elements for as long as the array length
currentElement = array[idx1] => 6
  Nested loop for the length of the array
  nextElement =  array[idx2] => 2
  if currentElement > nextElement
  tempElement = currentElement => T(6)
  currentElement = nextElement => CE(2)
  nextElement = tempElement => NE(6)


D: Data Structure
Array: I will be utilizing an array data structure since this is the value that is required to be returned from the function.


A: algorithm
- start
- set a function: bubbleSort
- receive the array argument: bubbleSort(arrayArgument)
- loop over the array
- set currentElement to array[index1]
   - nested loop over array
   - set nextElement to array[index2]
   - define if statement
    - if array[index1] > array[index2]
    - set tempVariable = array[index1];
    - array[index1] = array[index2]
    array[index2] = tempVariable
- the looping sequence should come to an end by itself
- return sorted array
- end


C: Code With Intent

*/