function selectionSort(array) {

  for (let i = 0; i < array.length-1; i++){
    let minIn = i;
    
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minIn]){
        minIn = j
      }
    }
    
    let swp = array[minIn]
    array[minIn] = array[i]
    array[i] = swp;
  }

  return array;
  // Only change code above this line
}

console.log(selectionSort([4,2,1,3]))