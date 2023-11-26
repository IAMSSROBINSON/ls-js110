function transactionsFor (id, arrayOfObjects) {
  return arrayOfObjects.filter(object => object['id'] === id);
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
//   { id: 101, movement: "out", quantity: 18 }, 

/*

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

Input: Number(id), Array(of Objects)
Output: Array(with on the transactions from the Array of objects for the id)

E: 

Mental Model:
- receive arguments(numberId, arrayOfObjects)
- search the arrayOfObjects using referencing for a match on the ID
  - return each match object to a new array
- return the array with the matched id objects

A: 
- start
- set function
- receive arguments (id, arrayOfObjects)
- return arrayOfObjects.filter((object) => {
   return object["id"] === id;
})

- end


*/