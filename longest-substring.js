/**
 * Given a string s, find the length of the longest substring without repeating characters.
 // https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/
 
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0
  if (s.length === 1) return 1

  let set = new Set();
  let maxLength = 0;
  let windowStartIndex = 0;

  for(let i = 0; i < s.length; i++){
    while(set.has(s[i])){             // found a duplicate! [abb]
                                      //                       ^
      set.delete(s[windowStartIndex]) // clear out the letters in the set where we have the duplicate 
      windowStartIndex ++             // shift the windowStartIndex forward to where we found that duplicate, and start hunting for a new longest word
    }                                 

    // the difference between:
    // windowStartIndex (index in s where the unique string starts) and 
    // i (our current position in s) is the length of our string, less 1 character
    set.add(s[i])
    maxLength = Math.max(maxLength, i - windowStartIndex + 1)
  }
  return maxLength;
};