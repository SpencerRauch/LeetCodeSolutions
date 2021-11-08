/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let newNode = [];
    while (l1 !== null || l2 !== null){
        if (l1 == null){
            var newVal = l2.val + carry;
        } else if (l2 == null){
            var newVal = l1.val + carry;
        } else{
            var newVal = l1.val + l2.val + carry;
        }
        
        carry = 0;
        if (newVal >= 10){
            newVal = newVal %10;
            carry = 1;
            
        }
        newNode.push(newVal);
        l1 ? l1 = l1.next : l1;
        l2 ? l2 = l2.next : l2;
        if (l1 == null && l2 == null && carry == 1) newNode.push(carry)
        
        
        
    }
    
    let returnNodes = new ListNode(newNode[0])
    let head = returnNodes;
    for (let i=1; i<newNode.length; i++){
        while(returnNodes.next !== null){
            returnNodes = returnNodes.next;
        }
        returnNodes.next = new ListNode(newNode[i])
    }
    return head;
};

// https://leetcode.com/problems/add-two-numbers/submissions/