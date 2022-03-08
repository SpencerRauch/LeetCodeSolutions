/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (!head || !head.next) return false
    let walker = head
    let runner = head.next
    while(runner.next && runner.next.next && walker.next){
        if (runner == walker) return true
        walker = walker.next
        runner = runner.next.next
    }
    return false
};

// https://leetcode.com/problems/linked-list-cycle/