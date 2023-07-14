let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

// DESTRUCTIVE:
books.sort((a, b)=>{
  return a['published'] - b['published'];
})

console.log(books);

// DEEP COPY, NON-DESTRUCTIVE:
// let serializedObj = JSON.stringify(books);
// let deepObj = JSON.parse(serializedObj);

// deepObj.sort((a, b) => a['published'] - b['published']);
// console.log(deepObj);
// console.log(books);


/*

How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

- used the .sort() method (used without an argument it will sort alphabetically)
  - accepts a callback function for sorting numbers in numerical order
  - use object['referencing'] on the parameter variables to access the value of the `published` key 
  - use the a['published'] - b['published'] sort order for descending order (lowest to highest)

*/

