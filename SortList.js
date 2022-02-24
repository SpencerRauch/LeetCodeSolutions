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
 var sortList = function(head) {
    let arr = []
    if (!head) return head
    while(head){
        arr.push(head)
        head = head.next
    }
    arr.sort((a,b) => (a.val - b.val))
    for (let i = 0; i < arr.length-1; i++){
        arr[i].next = arr[i+1]
    }
    arr[arr.length-1].next = null
    
    return arr[0]
};