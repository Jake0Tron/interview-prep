function insertionSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length; i++){
    if (array[i] > array[i+1]){
      // swap backwards until this value is larger than the one before it
      let j = i+1;
      while (j > 0 && array[j] < array[j-1]){
        let swp = array[j-1]
        array[j-1] = array[j]
        array[j] = swp
        j--
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(insertionSort([4,2,1,3]))