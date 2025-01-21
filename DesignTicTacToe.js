/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.rows = Array(n).fill(0)
    this.cols = Array(n).fill(0)
    this.diagUp = 0;
    this.diagDown = 0;
    this.size = n;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    let polarity = player === 1 ? 1 : -1;
    this.rows[row] += polarity;
    if (Math.abs(this.rows[row]) === this.size) return player
    this.cols[col] += polarity;
    if (Math.abs(this.cols[col]) === this.size) return player
    
    if ( row === col){
        this.diagUp += polarity;
        if (Math.abs(this.diagUp) === this.size) return player
    }
    if (col + row === this.size - 1){
        this.diagDown += polarity;
        if (Math.abs(this.diagDown) === this.size) return player
    }
    return 0
};
