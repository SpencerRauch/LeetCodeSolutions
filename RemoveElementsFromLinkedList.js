//https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    while (head != null && head.val == val){
        head = head.next;
    }
    if (head == null) return null;
    let runner = head;
    let runner2;
    while(runner.next != null){
        if (runner.next.val == val){
            runner2 = runner.next;
            while (runner2.next != null && runner2.next.val == val){
                runner2 = runner2.next;
            }
            runner.next = runner2.next
        }
        if (runner.next != null) runner = runner.next;
        
    }
    
    return head;
    
    
};