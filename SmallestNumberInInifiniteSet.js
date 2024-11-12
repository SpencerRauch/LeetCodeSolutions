//https://leetcode.com/problems/smallest-number-in-infinite-set/
// not truly inifite, restraints show only 1000
class SmallestInfiniteSet{
    constructor(){
        this.set = new Set(Array.from({ length: 1000 }, (_, i) => i + 1));
    }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let min = Infinity;
    for (const val of this.set){
        if (val < min){
            min = val;
        }
    }
    this.set.delete(min);
    return min;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set.add(num)
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */


// more truly infinite, just keep track of smallest
var SmallestInfiniteSet = function() {
    this.currentSmallest = 1;
    this.addedBack = [];
    this.addedNumbers = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.addedBack.length > 0) {
        // Sort the array to ensure the smallest number is at the start
        this.addedBack.sort((a, b) => a - b);
        const smallest = this.addedBack.shift();
        this.addedNumbers.delete(smallest);
        return smallest;
    }
    // Return the current smallest and increment it for the next call
    return this.currentSmallest++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    // Only add the number if it is smaller than currentSmallest and not already in the added set
    if (num < this.currentSmallest && !this.addedNumbers.has(num)) {
        this.addedBack.push(num);
        this.addedNumbers.add(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */