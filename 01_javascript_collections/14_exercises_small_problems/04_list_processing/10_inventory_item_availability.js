function isItemAvailable (id, transactions) {
  let matchedIds = transactionsFor(id, transactions);

  let sum = 0;
  matchedIds.forEach((objectElement) => {
    if (objectElement['movement'] === 'in') {
      sum += objectElement['quantity'];
    } else if (objectElement['movement'] === 'out') {
      sum -= objectElement['quantity'];
    }
  });
  return sum > 0;
}

function transactionsFor (id, transactions) {
  let matchedIdElements = transactions.filter (objectElement => objectElement['id'] === id);

  return matchedIdElements;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

/*

Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

P: Understanding The Problem
Create a function.
The function should use the elements movement: 'in' key:value pair to sum the elements quantity value. 
For each  movement: 'out' key:value pair the sum should be decreased by the quantity value.
If the sum if above 0 then return true, otherwise return false.

Input: number(id) and and array(transactions)
Output: boolean(true/false) if sum is > 0
Rules:
  Explicit:
  - create a function
  - receive arguments
  - match id
  - sum element movement: 'in' quantity
  - decrease sum by movement: 'out' quantity
  - if sum > 0 return true, else return false

  Implicit:
  - if id is not matched return false
  - use previous function to match id

Questions:
- n/a


E: Examples and Test Cases
isItemAvailable(101, transactions);     // false
{ id: 101, movement: 'in',  quantity:  5 } sum => 0 + 5 = 5
{ id: 101, movement: 'in',  quantity: 12 } sum => 5 + 12 = 17
{ id: 101, movement: 'out', quantity: 18 } sum => 17 - 18 = -1 / return sum > 0(false)

Mental Model:
Use previous function to match the id and return array with objectElements matched 
Create a sum variable to accumulate movement 'in' quantities.
Decrease the sum by movement 'out' quantities.
Return sum > 0;


D: Data Structure
Array: I will utilize an array data structure for ease of iteration.


A: Algorithm
- start
- set new function: isItemAvailable
- receive arguments
- set variable: matchedIds and initialize to the return of invoking previous function and 
passing (id, transaction)
- use return array
- set variable: sum = 0;
- loop over elementObjects
  - for each elementObject
  - if elementObject['movement'] === 'in'
    - sum += elementObject['quantity']
  - else if elementObject['movement'] === 'out'
    - sum -= elementObject['quantity']
- return sum > 0 to the function
- end


C: Code With Intent

*/