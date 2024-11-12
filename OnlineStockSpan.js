//attempt 1, passes but slow compared to other entries 
var StockSpanner = function() {
    this.vals = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;
    for (let i = this.vals.length-1; i >= 0; i--){
        if (this.vals[i] <= price){
            count++
        } else {
            break
        }
    }
    this.vals.push(price)
    return count
};


/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

//using a true stack, keeping track of LTE span at each price
//popping them off if they are lower than the current, adding their span into the current

var StockSpanner = function() {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while(this.stack.length && this.stack[this.stack.length-1][1]<=price){
        span += this.stack.pop()[0]
    }
    this.stack.push([span,price])
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */