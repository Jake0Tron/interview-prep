/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  var magMap = buildMap(magazine);
  var noteMap = buildMap(ransomNote);
  
  let canConstruct = true;
  for (letter in noteMap) {
    if (!magMap[letter] || magMap[letter] < noteMap[letter]){
      canConstruct = false;
      break;
    }
  }

  return canConstruct;
};

const buildMap = (str) => {
  const map = {}
  Array.from(str.replace(/[^0-9a-zA-Z]/ig, '').toLowerCase()).forEach(letter => {
    if (map[letter])
      map[letter] ++;
    else
      map[letter] = 1;
  })
  return map
}