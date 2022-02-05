/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let allNodes = []
    for (let list of lists){
        if (list){
            allNodes.push(list)
            while(list.next){
                list = list.next
                allNodes.push(list)
            }
        }
    }
    allNodes.sort((a,b) => (a.val - b.val))
    for (let i=0; i < allNodes.length-1; i++){
        allNodes[i].next = allNodes[i+1]
    }
    return allNodes[0] ? allNodes[0] : null
    
    
};

//https://leetcode.com/problems/merge-k-sorted-lists/submissions/