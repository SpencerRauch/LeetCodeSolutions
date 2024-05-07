// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
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
var doubleIt = function(head) {
    head = reverseList(head);
    let carry = 0;
    let runner = head;
    while(runner){
        runner.val *= 2;
        runner.val += carry;
        if (runner.val >= 10){
            carry = Math.floor(runner.val / 10);
            runner.val %= 10;
        } else {
            carry = 0;
        }
        runner = runner.next
    }
    head = reverseList(head)
    if (carry > 0){
        head = new ListNode(carry,head)
    }
    return head
};

function reverseList(head){
    let prev = null;
    let curr = head;
    let next = null;
    while(curr){
        next = curr.next
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
}