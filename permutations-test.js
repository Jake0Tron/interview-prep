const permutations = (str) => {
  if (str === null){
    return null
  }
  const allPermutations = []

  if (str.length === 0){
    allPermutations.push('')
    return allPermutations
  }

  let first = str.charAt(0)
  let remaining = str.slice(1)

  let allCombos = permutations(remaining)

  for (let word of allCombos) {
    for (let i=0; i <= word.length; i++){
      const p = addLetterToIndex(word, first, i)
      allPermutations.push(p)
    }
  }

  return allPermutations
}

const addLetterToIndex = (str, c, i) => {
  let front = str.substring(0,i)
  let back = str.substring(i)
  return `${front}${c}${back}`
}

console.log(permutations('aabcd'))