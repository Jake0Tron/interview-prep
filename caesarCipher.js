function caesarCipher(s, k) {
    // lowercase charcodes
    // 97-122
    // uppercase charcodes
    // 65-90
    let cipher = ''
    for (let i=0; i < s.length; i++){
        let  charcode = s.charCodeAt(i)
        if ((charcode >=97 && charcode <= 122)) {
          // lowercase
          charcode += k
            if (charcode > 122){
              // increment from one before a
              charcode = 96 + (charcode - 122)
            }
            cipher += String.fromCharCode(charcode)           
        } else if (charcode >= 65 && charcode <= 90) {
          charcode += k
            if (charcode > 90){
              // increment from one before A
                charcode = 64 + (charcode - 90) 
            }
            cipher += String.fromCharCode(charcode)
        } else {
            cipher += s[i]
        }
    }
    return cipher
}

console.log(caesarCipher('wow-SO-cool', 3))
console.log(caesarCipher('middle-Outz', 2))