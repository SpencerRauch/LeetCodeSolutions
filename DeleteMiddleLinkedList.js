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
var deleteMiddle = function(head) {
    if (head.next == null) return null
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = head;
    while (fast && fast.next != slow){
        fast = fast.next
    }
    fast.next = slow.next;
    return head
};

// one less loop
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
var deleteMiddle = function(head) {
    if (head.next == null) return null
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast != null && fast.next != null){
        prev = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    if (prev != null){
        prev.next = slow.next
    }
    return head
};