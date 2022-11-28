function mergeSort(array) {
  // Only change code below this line
  if (array.length < 2)
    return array
  
  // split in half 
  let half = Math.floor(array.length/2)

  // splice modifies array, array now contains right half
  const left = array.splice(0, half)

  // call mergeSort on left and right halves
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(array)
  
  //now we need to merge these arrays 
  const res = [];

  while(sortedLeft.length && sortedRight.length){
    if (sortedLeft[0] < sortedRight[0]){
      // shift removes and returns value from array
      res.push(sortedLeft.shift())
    } else {
      res.push(sortedRight.shift())
    }
  }

  // because we may not have gone through all elements, 
  // we need to spread the remaining arrays (in order)

  return [...res, ...sortedLeft, ...sortedRight];
  // Only change code above this line
}

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))