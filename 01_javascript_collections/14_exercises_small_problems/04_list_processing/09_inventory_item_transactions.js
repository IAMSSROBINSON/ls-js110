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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

P: Undetstanding The Problem
Create a function that accepts two arguments (ID, listOfTransactions).
The function should return an array with the objects specified by the ID.

Input: number(ID) and array(Transactions with object elements)
Output: array(of Objects that match the ID argument)
Rules:
  Explicit:
  - create a function
  - receive two arguments
  - return array of elements that match ID

  Implicit:
  - all items in returned array will have the same ID
  - all items in the returned array will have the same ID as the ID argument
  - when ID is matched the whole object element is added to the returned array

Questions
- Can the original object be mutated or should it remain the same and be left


E: Examples and Test Cases
transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

Mental Model:
The ID argument passed returns an array with all object elements with same ID.
Since the object elements are inside of an array the array can be iterated over.
The ID argument should be compared to the element['id'] for strict equality.
If they are equal then the element can be pushed to a new array.
After iterating over all elements the accumulated array can be returned.


D: Data Structure
Array: I will utilize an array data structure for each of accumulating elements.


A: Algorithm
- start
- set function: transactionsFor
- receive arguments: (id, transactions)
- loop over transactions
- set a variable and initialize to the return of invoking .filter() method:
  - filter the objectElements where the objectElement['id'] === id
  - .filter() returns a new array
  - return this to the method
- return this to the function caller
- end


C: Code With Intent

*/