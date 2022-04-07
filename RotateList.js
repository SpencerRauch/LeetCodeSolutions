
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



let head = new ListNode(1)
head.next = new ListNode(2)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 var rotateRight = function (head, k) {
    if (!head || !head.next || k == 0) return head
    let runner = head
    let walker = head
    let count = 0
    while(runner){
        count++
        if (runner.next){
            runner = runner.next
        } else break;
    }
    let rotation = k % count
    
    if (rotation==0) return head
    while(count -1 > rotation){
        count--
        walker = walker.next
    }
    runner = walker.next
    let newhead = walker.next
    walker.next = null
    while(runner.next){
        runner = runner.next
    }
    runner.next = head
    return newhead
};

//https://leetcode.com/problems/rotate-list