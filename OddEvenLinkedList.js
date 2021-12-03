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
var oddEvenList = function(head) {
    if (head == null || head.next == null) return head;
    let wh = head; //working head -- preserve head to return it
    let even = head.next; // beginning of list of even indexed nodes
    let we = even; // working even -- preserve start of even to link together at the end
    let count = 1; //implemented counter to add one to even or odd link at a time
    let prev; // will point to previous value wh pointed to in case we have an even amount of nodes
    while (we != null && wh != null){
        if (count % 2 != 0){ //odd
            wh.next = we.next // point wh's next to we's next (next odd)
            prev = wh; // store previous before --
            wh = wh.next; // -- incrementing wh to next odd;
            count++
        } else { //even
            we.next = wh.next; // point we.next to next even;
            we = we.next; // we to next even;
            count++
        }
        
    }
    if (count % 2 != 0){ //ended on an odd, still have access to wh ( tail of odd list)
        wh.next = even;
    } else prev.next = even; //ended on an even, prev is tail of odd list
    
    return head;
};