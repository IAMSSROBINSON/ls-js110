function alphabeticNumberSort (arrayOfNumbers) {

  let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return arrayOfNumbers.sort((a, b) => words[a] < words[b] ? -1 : (words[a] > words[b] ? 1 : 0));

}

console.log(alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]));


// function alphabeticNumberSort (arrayOfNumbers) {

//   let holding = {};

//   let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   for (let value of arrayOfNumbers) {
//     holding[words[value]] = value;
//   }

//   return Object.entries(holding).sort().map(arr => arr[1]);
// }

console.log(alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/*

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen


Input: Array(With numbers between 0 - 19)
Output: Array(With numbers sorted based on the English word for each number)

E: 

Mental Model:
Receive argument: array of numbers.
Set numberSpellings => [array with words as elements]
Transfer in sequence the Key(word) : Value(arrayOfNumbersValue) to an object{}
  - e.g. "zero" : 0
return Object.entries(object).sort().map(arr => arr[1])

A: 
- start
- set function
- receive argument (arrayOfNumbers)
- set an array of word elements for each number value: e.g. "zero" for 0
- set obj = {}
- for (let value of arrayOfNumbers)
  - obj[words[value]] = value; // to produce key(word) : Value(number) sequence
- Object.entries(obj) // for an array of [[word : number], [word : number]  array elements]
  - .sort().above array to coerce elements to strings and sort lexicographically
    - mutates the caller array
  - .map() over the return and select the second element in the array element to return a new array of numbers only // the numbers will already be sorted since they correlate to the wordString previously sorted
    - .map(arr => arr[1])
- return the resulting array of sorted numbers
- end

*/