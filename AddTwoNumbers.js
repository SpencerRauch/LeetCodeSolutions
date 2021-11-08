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
        //while loop runs while at least one node list still has values;
        
        
        if (l1 == null){
            var newVal = l2.val + carry;
        } else if (l2 == null){
            var newVal = l1.val + carry;
        } else{
            var newVal = l1.val + l2.val + carry;
        } // our next value is going the sum of the values of each node that exists, plus carried 1 if exists
        
        carry = 0; // reset carry after using it to make newVal
        if (newVal >= 10){  // if newVal is 10 or greater, carry the one
            newVal = newVal %10;
            carry = 1;
            
        }
        newNode.push(newVal); // push newVal to our array for making nodes;
        l1 ? l1 = l1.next : l1; // if l1 is not null, traverse
        l2 ? l2 = l2.next : l2; // if l2 is not null, traverse
        if (l1 == null && l2 == null && carry == 1) newNode.push(carry) // if both are null, and we have a one to carry, push that one
        
        
        
    }
    
    let returnNodes = new ListNode(newNode[0]) // new ListNode for first value
    let head = returnNodes; // store first node as head to be able to return it
    for (let i=1; i<newNode.length; i++){ // for remaining values in newNode array, traverse to end and add to back
        while(returnNodes.next !== null){
            returnNodes = returnNodes.next;
        }
        returnNodes.next = new ListNode(newNode[i])
    }
    return head;
};
// https://leetcode.com/problems/add-two-numbers/submissions/