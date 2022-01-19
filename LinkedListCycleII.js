/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
 
    while (first_runner != null && first_runner.visited != true){
        first_runner.visited = true; // alters linked list, technically not acceptable solution (but works if you don't care!)
        first_runner = first_runner.next;
        
    }
    return first_runner // will either be null or start of loop
    
};

var detectCycle2 = function(head){
    let walker = head;
    let runner = head;
    while(runner && runner.next ){
        walker = walker.next;
        runner = runner.next.next;
        if(walker === runner){
            walker = head;
            while(walker !== runner){
                walker = walker.next;
                runner = runner.next;
            }
            return walker;
        }
    }
    return null;
}


// this solution makes use of Floyd's cycle detection algo and I wrote it after digging into that
/* The interesting thing to take from Floyd's cycle detection for this is that the distance from the node our walker/runner meet for the first time
to the beginning of the loop is the same as the distance from the head to the beginning of the loop. Draw some enclosed loop linked lists
and you'll see this is always true! So we simply reset one of our pointers to the head after they meet and move them at the same speed, they will meet
again at the beginning of the loop. */

