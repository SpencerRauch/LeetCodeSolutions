/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 *   https://leetcode.com/problems/intersection-of-two-linked-lists/
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let runnerA = headA
    let runnerB = headB
    if(headA===headB) return headA;
    let countA = 0
    let countB = 0

    //lists that intersect will have the same tail
    //traverse to tail, calculate length on the way
    while(runnerA || runnerB)
    {
        if (runnerA){
            countA++;
            runnerA = runnerA.next;
        } 
        if (runnerB){
            countB++;
            runnerB = runnerB.next;
        } 
    }
    //no intersection
    if (runnerA !== runnerB) return null;

    //reset runners
    runnerA = headA;
    runnerB = headB;

    // if one list is longer, move forward in that list
    // so that lists are equally away from intersection
    if(countA !== countB)
    {
        while (countA > countB)
        {
            runnerA = runnerA.next;
            countA--;
        }
        while (countB > countA)
        {
            runnerB = runnerB.next;
            countB--;
        }
    }

    //move heads forward to look for intersection
    while (runnerA !== runnerB)
    {
        runnerA = runnerA.next;
        runnerB = runnerB.next;
    }

    return runnerA

};