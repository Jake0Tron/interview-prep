const recursivePalindrome = (word) => {
  console.log(word)
  if (word.length < 2){
    return true
  } 

  if (word[0] === word[word.length -1]){
    return recursivePalindrome(word.substring(1, word.length-1))
  } else {
    return false
  }
}

console.log(recursivePalindrome('racecar'))
console.log(recursivePalindrome('tacoocat'))
console.log(recursivePalindrome('coososoc')) //false