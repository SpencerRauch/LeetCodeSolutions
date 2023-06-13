//Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let length = grid.length
    let count = 0;
    let columns = {};
    let rows = {};
    for (let i=0;i<length;i++){
        let string = grid[i].join(",")
        rows.hasOwnProperty(string) ? rows[string]++ :  rows[string] = 1
        let columnString = "";
        for (j=0;j<length;j++){
            columnString += grid[j][i]
            if (j != length-1){
                columnString+=","
            } else {
                columns.hasOwnProperty(columnString) ? columns[columnString]++ : columns[columnString] = 1;
            }
        }
    }
    for (let key in rows){
        if (columns.hasOwnProperty(key)){
            count += rows[key] * columns[key]
        }
    }

    return count
};

equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])