/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length ) return false

  let sMap = buildMap(s);
  let tMap = buildMap(t);

  return Object.keys(sMap).every(letter => {
      if (!tMap[letter] || tMap[letter] !== sMap[letter]){
          return false
      } 
      return true
  })

};

const buildMap = s => {
  let sMap = {}
  Array.from(s).forEach(char => {
      if (sMap[char])
         sMap[char] ++
      else 
          sMap[char] = 1
   })
   return sMap
}

console.log("Valid Anagram")

console.log("Empty", isAnagram("", ""))
console.log("anagram/aganram",isAnagram("anagram", "aganram"))
console.log("yes/no",isAnagram("yes", "no"))
