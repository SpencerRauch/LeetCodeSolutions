// https://leetcode.com/problems/count-total-number-of-colored-cells

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let ans = n * n
    let downArrow = n * 2 - 3
    while (downArrow > 0){
        ans += downArrow
        downArrow -= 2
    }
    return ans
};

// intuition, top half of the grid is n * n, bottom half is n * 2 - 3, n * 2 - 5, n * 2 - 7, etc.

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    return n*n + (n-1) * (n-1)
};

var coloredCells = function(n) {
    return 2 * n * n - 2 * n + 1;
};

 // intuition, bottom half is (n-1) * (n-1) because the first row is already counted in n*n, can be simplified to 2 * n * n - 2 * n + 1