function bubbleSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length-1; i++){
    for (let j=i+1; j < array.length; j++){
      if (array[i] > array[j]){
        let swp = arr[i]
        arr[i] = arr[j]
        arr[j] = swp
        console.log(array)
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(bubbleSort([4,2,1,3]))