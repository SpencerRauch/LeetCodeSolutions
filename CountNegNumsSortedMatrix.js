// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    let pos = 0;
    let width = grid.length;
    let height = grid[0].length;
    for (let i = width-1; i >= 0; i--){
        while (pos < height && grid[i][pos] >=0){
            pos++;
        }
        count += height - pos;
    }
    return count;
};