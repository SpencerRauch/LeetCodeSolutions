// //https://leetcode.com/problems/path-with-maximum-gold

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var getMaximumGold = function(grid) {
//     const findMax = (i,j, grid, current=0, visited={}) => {
//         if (visited[`${i},${j}`] || grid[i][j] == 0) return current;
//         current += grid[i][j]
//         visited[`${i},${j}`] = true;
//         let pathMax = 0;
//         if (i-1 >= 0){
//             pathMax = findMax(i-1,j,grid,current,{...visited})
//         }
//         if (i+1 < grid.length){
//             pathMax = Math.max(pathMax, findMax(i+1,j,grid,current,{...visited}))
//         }
//         if (j+1 < grid[i].length){
//             pathMax = Math.max(pathMax, findMax(i,j+1,grid,current,{...visited}))
//         }
//         if (j-1 >= 0){
//             pathMax = Math.max(pathMax, findMax(i,j-1,grid,current,{...visited}))
//         }
//         return pathMax;

//     }
//     let max = 0;
//     for (let i = 0; i < grid.length; i++){
//         for(let j = 0; j < grid[i].length; j++){
//             max = Math.max(max, findMax(i,j,grid))
//         }
//     }
//     return max;

// };

//https://leetcode.com/problems/path-with-maximum-gold

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const findMax = (i,j, grid, current=0) => {
        if (grid[i][j] == 0) return current;
        let thisPile = grid[i][j]
        current += thisPile
        grid[i][j] = 0

        let pathMax = 0;
        if (i-1 >= 0){
            pathMax = findMax(i-1,j,grid,current)
        }
        if (i+1 < grid.length){
            pathMax = Math.max(pathMax, findMax(i+1,j,grid,current))
        }
        if (j+1 < grid[i].length){
            pathMax = Math.max(pathMax, findMax(i,j+1,grid,current))
        }
        if (j-1 >= 0){
            pathMax = Math.max(pathMax, findMax(i,j-1,grid,current))
        }
        grid[i][j] = thisPile
        return pathMax;

    }
    let max = 0;
    for (let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            max = Math.max(max, findMax(i,j,grid))
        }
    }
    return max;

};
console.log(getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]))
console.log(getMaximumGold([[1,0,7,0,0,0],[2,0,6,0,1,0],[3,5,6,7,4,2],[4,3,1,0,2,0],[3,0,5,0,20,0]]))