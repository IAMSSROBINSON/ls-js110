function interleave (array1, array2) {

   let combinedArrayElements = array1.map((element, index)=>{
    return [element, array2[index]];
   
  });

  return combinedArrayElements.flat();
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
