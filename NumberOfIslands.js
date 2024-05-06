//https://leetcode.com/problems/number-of-islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    for (let i = 0; i < grid.length;i++){
        for(let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1'){
                islands++
                fillIsland(i,j,grid)
            }
        }
    }
    return islands;
};

function fillIsland(i,j, grid){
    grid[i][j] = '0';
    if (grid[i+1] && grid[i+1][j] === '1'){
        fillIsland(i+1,j,grid)
    }
    if (grid[i-1] && grid[i-1][j] === '1'){
        fillIsland(i-1,j,grid)
    }
    if (grid[i][j+1] === '1'){
        fillIsland(i,j+1,grid)
    }
    if (grid[i][j-1] === '1'){
        fillIsland(i,j-1,grid)
    }
}