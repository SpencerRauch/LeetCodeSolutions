/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3], // arr[0][0],    arr[0][arr.length - 1]
    [4, 5, 6], // arr[1][1],    arr[1][1]
    [9, 8, 9], // arr[2][2],    arr[2][0]
];
const expected1 = 2;

/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) { 
    //initialize two index pointers and two sums, one for each diagonal
    let a = 0;
    let b = sqrMatrix.length-1;
    let sumA = 0;
    let sumB = 0;

    for (let arr of sqrMatrix){ //step through each sub array of the matrix
        sumA += arr[a] //add values at our diagonal pointers to their respective sums
        sumB += arr[b]
        a++ //adjust pointers to next diagonal spot
        b--
    }

    return Math.abs(sumA-sumB) // return abs difference
}

console.log(diagonalDifference(squareMatrix2))

