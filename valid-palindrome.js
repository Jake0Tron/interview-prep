
/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // TODO: remove all non alphanumeric characters and spaces
  // TODO: iterate over string (Front and back) and return false if chatacters at each 

  if (s.length === 0)
    return true

  const cleanedString = s
    .replace(' ', '')
    .replace(/[^0-9a-z]/gi, '')
    .toLowerCase()

  for(let i=0; i<Math.floor(cleanedString.length/2); i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length-1-i]){
      return false 
    }
  }

  return true;
};

console.log("valid palindrome")
console.log("A man, a plan, a canal: Panama", isPalindrome("A man, a plan, a canal: Panama"))
console.log("race a car", isPalindrome("race a car"))
console.log("Empty Space", isPalindrome(" "))