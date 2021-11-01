/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    
    for (let i = 0; i < board.length; i++){
        protect(i, 0, board);
        protect(i, board[0].length-1, board);
    }
    
    for (let i=1; i < board[0].length -1; i++){
        protect(0, i, board);
        protect(board.length-1, i, board);
    }
    
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j]=='O'){
                board[i][j] = 'X'
            }
            if (board[i][j] == 'S'){
                board[i][j] = 'O'
            }
        }
    }
    
};

var protect = (i, j, board) => {
    if (board[i] == undefined || board[i][j] == undefined || board[i][j] !== 'O'){
        return;
    }
    board[i][j] = 'S';
    
    protect(i, j-1, board)
    protect(i, j+1, board)
    protect(i+1, j, board)
    protect(i-1, j, board)
    
}

// https://leetcode.com/problems/surrounded-regions/