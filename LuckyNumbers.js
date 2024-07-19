//https://leetcode.com/problems/lucky-numbers-in-a-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const result = []
    for (let i = 0; i < matrix.length; i++){
        const row = matrix[i]
        let mindex = 0
        for (let j = 1; j < matrix[i].length; j++){
            if (row[j] < row[mindex]){
                mindex = j
            }
        }
        if (isMaxColumn(matrix,i,mindex)){
            result.push(row[mindex])
        }

    }
    return result
};

function isMaxColumn(matrix,rowIndex, columnIndex){
    const checkValue = matrix[rowIndex][columnIndex]
    for (let row of matrix){
        if (row[columnIndex] > checkValue) return false
    }
    return true
}

// then, after understanding that only a single lucky number can exist, optimization:

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    for (let i = 0; i < matrix.length; i++){
        const row = matrix[i]
        let mindex = 0
        for (let j = 1; j < matrix[i].length; j++){
            if (row[j] < row[mindex]){
                mindex = j
            }
        }
        if (isMaxColumn(matrix,i,mindex)){
            return([row[mindex]])
        }

    }
    return []
};

function isMaxColumn(matrix,rowIndex, columnIndex){
    const checkValue = matrix[rowIndex][columnIndex]
    for (let row of matrix){
        if (row[columnIndex] > checkValue) return false
    }
    return true
}