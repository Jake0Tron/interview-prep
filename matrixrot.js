
const matrixRotate = (matrix) => {
let midMatrix = Math.floor(matrix.length/2)
let maxSum = 0
for (let r=0; r < midMatrix; r++){
    for (let c=0; c < midMatrix; c++){
        let topLeft = matrix[r][c]
        let topRight = matrix[r][c+midMatrix]
        let bottomLeft = matrix[r+midMatrix][c]
        let bottomRight = matrix[r+midMatrix][c+midMatrix]
        let max = Math.max(topLeft, topRight, bottomLeft, bottomRight) 
        console.log(topLeft, topR,  bottomLeft, bottomRight, ">>", max)         
        maxSum += max          
    }
}
return maxSum;
}