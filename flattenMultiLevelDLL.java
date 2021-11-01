/*
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
};
*/

class Solution {
    public Node flatten(Node head) {
        Node runner = head;
        while (runner != null){
            if (runner.child != null){
                Node childRunner = runner.child;
                while (childRunner.next != null){
                    if (childRunner.child != null){
                        flatten(childRunner);
                    }
                    childRunner = childRunner.next;
                }
            if (runner.next != null) runner.next.prev = childRunner;
            childRunner.next = runner.next;
            runner.child.prev = runner;
            runner.next = runner.child;
            runner.child = null;
                
            }
            runner = runner.next;
        }
        return head;
        
    }
}
//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/