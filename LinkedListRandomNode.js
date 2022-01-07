/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
    this.vals = [];
    while (head != null){
        this.vals.push(head.val)
        head = head.next;
    }
    
    
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random()*this.vals.length)
    return this.vals[randomIndex]
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */