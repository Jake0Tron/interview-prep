
/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
const groupAnagrams = (anagrams) => {
  // create a map based on sorted letters in that string
  let anagramMap ={}

  for (let anagram of anagrams){
    let sortedLetters = Array.from(anagram).sort().join('')
    if (!anagramMap[sortedLetters])
      anagramMap[sortedLetters] = []

    anagramMap[sortedLetters].push(anagram)
  }

  console.log(anagramMap)

  return Object.values(anagramMap);
}

console.log('Grouping anagrams')
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.assert(
  groupAnagrams(["eat","tea","tan","ate","nat","bat"]),
  [["bat"],["nat","tan"],["ate","eat","tea"]]
  )