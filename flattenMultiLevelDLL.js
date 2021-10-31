/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let runner = head;
    while (runner.next != null) {

        runner = runner.next;
    }



};

var flatRecurse = (node) => {
    let childrunner = node;
    if (runner.child != null) {
        while (childrunner.next != null) {
            childrunner = childrunner.next;
            if ()
                
            }
    }
    runner.next.prev = childrunner;
    childrunner.next = runner.next;
    runner.child.prev = runner;
    runner.next = runner.child;
    runner.child = null;


}


//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/