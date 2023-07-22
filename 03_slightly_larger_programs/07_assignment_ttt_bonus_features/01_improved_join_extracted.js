function joinOr (array, delimiter = ', ', stringInsert = 'or') {
  let string = '';
  if (array.length === 0) {
    return string;
  } else if (array.length > 1) {
    string = array.slice(0, (array.length - 1)).join(delimiter) + " " + stringInsert + " " + array.slice(array.length - 1);
  } else {
    string = array.join(delimiter);
  }
  return string;
}



console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"