// TODO: Return all permutations of provided string

const getPerms = (str) => {
  console.log(str, str.length)
  if (str === null)
    return null

  let allPerms = []

  if (str.length === 0){
    allPerms.push('')
    return allPerms
  }

  const first = str.charAt(0)
  const rest = str.substring(1)

  console.log(">", first, rest)

  const words = getPerms(rest)

  console.log(">>", words)

  for (let word of words){
    console.log(">>>", first, word)

    for (let i = 0; i <= word.length; i++){
      let perm = generatePerm(word, first, i)
      console.log(">>>>", perm)
      allPerms.push(perm)
    }
  }
  return allPerms;
}

const generatePerm = (str, c, i) => {
  let front = str.substring(0, i)
  let back = str.substring(i)
  return front + c + back
}

console.log(getPerms('abcd'))



