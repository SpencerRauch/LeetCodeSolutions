//https://leetcode.com/problems/find-missing-and-repeated-values/

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let seen = Array(n*n).fill(0)
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            let num = grid[i][j]
            seen[num-1]++
        }
    }
    let ans = [0,0]
    for (let i = 0; i < seen.length; i++){
        if (seen[i] == 2) ans[0] = i+1
        if (seen[i] == 0) ans[1] = i+1
    }
    return ans
};