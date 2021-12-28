/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let flip = false;
    let slow = head;
    while (head.next != null){
        head = head.next;
        flip = !flip;
        if (flip){
            slow = slow.next
        }
    }
    return slow;
};

//https://leetcode.com/problems/middle-of-the-linked-list/