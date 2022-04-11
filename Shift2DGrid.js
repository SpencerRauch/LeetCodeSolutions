/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    let m = grid.length
    let n = grid[0].length
    let flat = []
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            flat.push(grid[i][j])
        }
    }
    k = k % flat.length
    let front = flat.slice(-k)
    let back = flat.slice(0,-k)
    
    flat = [...front, ...back]
    let flatIndex = 0
    for (let i = 0; i<m; i++){
        for (let j = 0; j < n; j++){
            grid[i][j] = flat[flatIndex]
            flatIndex++
        }
    }
    return grid
};

// https://leetcode.com/problems/shift-2d-grid/submissions/