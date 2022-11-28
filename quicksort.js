function quickSort(array, start=0, end = array.length-1) {
  /**
   * This is a dumb implementation (arbitrary pivot value), 
   * in a better implementation we would calculate a pivot value 
   */
  if (array.length <= 1)
    return array
  
  let pivot = array[0]
  let less = [], more = [], equal = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot){
      less.push(array[i])
    } else if (array[i] > pivot){
      more.push(array[i])
    } else {
      equal.push(array[i])
    }
  }
  return [...quickSort(less), ...equal, ...quickSort(more)]
}

console.log(quickSort([4,2,1,3,1]))
console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
