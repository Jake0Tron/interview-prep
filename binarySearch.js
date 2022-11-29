const binarySearch = (arr, val) => {
  // assume sorted
  let low = 0;
  let high = arr.length -1
  let mid;
  
  while (low <= high) {
    // mid = Math.floor(arr.length/2)
    mid = low + ((high - low) /2)
    console.log(mid)
    if (arr[mid] < val){
      low = mid +1
    } else if (arr[mid] > val){
      high = mid -1
    }else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,7,8,9], 4));