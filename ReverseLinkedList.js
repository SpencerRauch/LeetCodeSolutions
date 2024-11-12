/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null
    let prev = null;
    let cur = null;
    while(head.next){
        cur = head;
        head = head.next
        cur.next = prev
        prev = cur
    }
    head.next = cur
    return head
};