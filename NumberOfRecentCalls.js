
var RecentCounter = function() {
    this.requests = []
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    this.requests = this.requests.filter(request => (request <= t && request >= (t-3000)))
    return this.requests.length;  
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */



// https://leetcode.com/problems/number-of-recent-calls