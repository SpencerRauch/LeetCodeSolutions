/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(grid) {
    let spaces = 0;
    let start = [];
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j]==1){
                start = [i,j];
            }
            if (grid[i][j]==0){
                spaces++;
            }
        }
    }
    
    return findPaths(grid, start[0], start[1], spaces, 0);
};

const findPaths = (grid, i, j, spaces, count)=>{
    if (grid[i] == undefined || grid[i][j] == undefined) return 0;
    
    if (grid[i][j] == 1 && count > 0){
        return 0;
    }
    if (grid[i][j] == 2){
        if (count == spaces+1){
            return 1;
        } return 0;
    }
    if (grid[i][j] == -1){
        return 0;
    }
    
    grid[i][j] = -1;
    count++;
    let paths = (
        findPaths(grid, i-1, j, spaces, count) +
        findPaths(grid, i+1, j, spaces, count) +
        findPaths(grid, i, j+1, spaces, count) +
        findPaths(grid, i, j-1, spaces, count)
    )
    grid[i][j] = 0;
    return paths;
}