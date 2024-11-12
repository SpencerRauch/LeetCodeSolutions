/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head.next;
    while(fast.next){
        slow = slow.next
        fast = fast.next
        if(fast.next) fast = fast.next
    }
    if (slow.next == fast){
        return slow.val + fast.val
    }
    let headTwo = slow.next;
    slow = null;
    fast = null;
    while(headTwo.next){
        slow = headTwo;
        headTwo = headTwo.next;
        slow.next = fast;
        fast = slow;
    }
    headTwo.next = slow;
    let max = head.val + headTwo.val
    head = head.next
    headTwo = headTwo.next
    while(headTwo){
        max = Math.max(max, head.val+headTwo.val)
        head = head.next
        headTwo = headTwo.next
    }
    return max
};