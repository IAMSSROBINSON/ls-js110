function interleave (array1, array2) {

  let combinedElements = array1.reduce((acc, currEle, idx)=>{
    return acc.concat(currEle, array2[idx]);
  }, [])
  
  return combinedElements;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
