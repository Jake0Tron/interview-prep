/*
 * Complete the 'parseValidate' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING state as parameter.
 */

function parseValidate(state) {
    
    const stateArr = state.split(',');
    console.log(state, stateArr)
    
    if (stateArr.length != 9)  // invalid board size
        return "Error"
        
    // assume 3x3 for this case
    const board = Array.from(new Array(3), () => []) 
    
    let ind = 0
    let letterCount = {X: 0, O: 0}
    
    stateArr.forEach((l, i)  => {    
        if (i%3 === 0 && i !== 0)
            ind ++
        board[ind][i%3] = l.toUpperCase()
        letterCount[l.toUpperCase()]++
    })
    
    if (Math.abs(letterCount['X'] - letterCount['O']) > 1){
        // too many turns by one player
        return "Error"
    }
    
    
    let winningChar = null;
    let winCount = 0 // multiple wins
    
    if(
        board[0][0] === board[1][1] && board[0][0] === board[2][2] ||
        board[0][2] === board[1][1] && board[0][0] === board[2][0] 
    ){
        // we have a diagonal line for char, use the center char
        winningChar = board[1][1]
    }
    if (winningChar !== null){
        for (let i = 0; i < 3; i++){
            // if all 3 values are the same in the row
            if (board[i][0] === board[i][1] && board[i][0] === board[i][2]){
                winningChar = board[i][0]
            }
            if (board[0][i] === board[1][i] && board [0][i] === board[2][i]){
                winningChar = board[0][i]
            }
            // TODO bonus is determine if there's a bad board with multiple wins
        }
    }
    if (winningChar !== null){
        return `${winningChar}-winner`
    } else{
        if (stateArr.map(l => (l === 'X' || l === 'O')).length !== 9){
            // if there are no lines yet and there are empty spaces, we're incomplete
            return "Incomplete"
        } else {
            // if there are no empty spaces and no lines, we're at a tie
            return "Tie"
        }
    }   
}

console.log(parseValidate('x,o,x,o,x,o,x,o,x'))
console.log(parseValidate('x,,,o,x,o,,o,x'))
console.log(parseValidate(',,,,,,,,'))
console.log(parseValidate('o,o,o,x,x,x,o,o,o'))