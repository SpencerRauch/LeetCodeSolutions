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
 var swapPairsUseArr = function(head) {         
    if (!head || !head.next) return head
    let arr = []
    let preservedHead = head.next //the second node will become our head
    while(head){              //push all nodes into an array
        arr.push(head)
        head = head.next
    }

    for (let i = 0; i < arr.length-1; i+=2){       //stepping by two, swap this value with the next 
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]  // stop one before end of list (don't try to swap the last if there's an odd amount of nodes)
    }

    for (let i = 0; i < arr.length -1; i++){
        arr[i].next = arr[i+1] // nodes are now in correct order in our array, so iterate and repoint
    }
    arr[arr.length-1].next = null //ensure last node points to null to avoid node loop
    return preservedHead //return our head
    
};

// https://leetcode.com/problems/swap-nodes-in-pair

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
 var swapPairs = function(head) {
    if (!head || !head.next) return head // empty list or just one node, no swapping, return it
    let preservedHead = head.next; //hold second element, will be our head after first swap
    let previous = head;
    let next = head.next;
    head.next = next.next
    next.next = head
    head = head.next
    while(head && head.next){
        //init this loop
        next = head.next

        //make swap
        head.next = next.next
        previous.next = next
        next.next = head
        
        //prep for next loop
        previous = head
        head = head.next
    }
    
    
    
    return preservedHead
};

