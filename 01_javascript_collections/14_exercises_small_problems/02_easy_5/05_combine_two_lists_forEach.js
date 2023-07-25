function interleave (array1, array2) {
  let combinedArrayElements = [];

  array1.forEach((element, index)=>{
    combinedArrayElements.push(element, array2[index]);
   
  });

  return combinedArrayElements;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
