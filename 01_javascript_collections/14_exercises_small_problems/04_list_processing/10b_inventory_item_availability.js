function isItemAvailable (id, arrayOfObjects) {
  return arrayOfObjects.filter(object => object['id'] === id).reduce((acc, ele) => {
    if (ele['movement'] === 'in') {
      return acc + ele['quantity'];
    } else if (ele['movement'] === 'out') {
      return acc -= ele['quantity'];
    }
    return acc;
  }, 0) > 0;
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

Input: ID, Array(ofObjects)
Output: Boolean(True=> sum of quantity of values is greater than 0, otherwise false)

E: 

Mental Model:
Receive arguments(ID, ArrayOfObjects)
Filter the objects by matching object['id'] === id

get sum in:
loop over arrayOfReturnedObjects
if object['movement'] === 'in'
sum += object['quantity']
else sum -= object['quantity']
return sum > 0;

A:
- start
- set function
- receive arguments (Id, ArrayOfObjects)

- filter objects by id match
  
- get sum of ins
  - map over filtered objects
  - if object['movement'] === 'in'
    - sum += object['quantity'] 
  - else if object['movement'] === 'out'
    - sum -= object['quantity'] 
  
- return result > 0
- end

*/