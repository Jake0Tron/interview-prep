/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let count = 0
  let map = {}

  
  for (let letter of s) {
    // Lets' count all the numbers first. 
    map[letter] = (map[letter] || 0) + 1
    // As we count those letters, when we hit even numbered increments, lets add 2 to the total to account for valid pairs
      if (map[letter] %2 === 0) count +=2
  }
  // if the final string was longer than what we had counted, we can add one to represent a single letter in the center, otherwise we can return the count
  return s.length > count ? count + 1 : count
};