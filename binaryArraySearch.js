function binarySearch(searchList, value) {
  let arrayPath = [];

  let start = 0; 
  let end = searchList.length;

  console.log(searchList)

  while (start < end){
    let midInd = Math.floor((start + end) / 2)
    console.log(start, end, midInd, searchList[midInd])

    if (searchList[midInd] === value){
      arrayPath.push(searchList[midInd])
      break;
    } else if (searchList[midInd] > value){
      end = midInd
      arrayPath.push(searchList[end])
    } else if (searchList[midInd] < value){
      start = midInd+1
      arrayPath.push(searchList[start])
    } else {
      return 'Value Not Found'
    }
  }
  return arrayPath
}

const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

console.log(testArray.length)
console.log(binarySearch(testArray, 70))
// console.log(binarySearch(testArray, 1))
// console.log(binarySearch(testArray, 2))
// console.log(binarySearch(testArray, 6))
// console.log(binarySearch(testArray, 11))