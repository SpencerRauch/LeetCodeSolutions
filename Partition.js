/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * https://leetcode.com/problems/partition-list/submissions/
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return head
    let less = []
    let goe = []
    while(head){
        if (head.val < x){
            less.push(head)
        } else {
            goe.push(head)
        }
        head = head.next
    }
    for (let i=0; i < less.length-1; i++){
        less[i].next = less[i+1]
    }
    if (less.length > 0 && goe.length > 0){
        less[less.length-1].next = goe[0]
    }

    for (let i=0; i < goe.length-1; i++){
        goe[i].next = goe[i+1]
    }
    if (goe.length > 0){
        goe[goe.length-1].next = null
    }
    return less[0] || goe[0]
};