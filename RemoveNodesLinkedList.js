// https://leetcode.com/problems/remove-nodes-from-linked-list/
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
var removeNodes = function(head) {
    let runner = head;
    let arr = []
    while(runner){
        arr.push(runner)
        runner = runner.next
    }
    let max = arr[arr.length-1].val
    for (let i = arr.length-2; i >=0; i--){
        if(arr[i].val < max){
            arr[i].delete = true;
        } else if (arr[i].val > max){
            max = arr[i].val
        }
    }
    runner = head;
    while(runner.delete){
        runner = runner.next
    }
    head = runner;
    while(runner.next){
        while (runner.next.delete){
            runner.next = runner.next.next
        }
        runner = runner.next
    }
    return head
};

var removeNodes2 = function(head) {
    let runner = head;
    let arr = []
    while(runner){
        arr.push(runner)
        runner = runner.next
    }
    head = arr[arr.length-1]
    for (let i = arr.length-2; i >= 0; i--){
        if (arr[i].val >= head.val){
            arr[i].next = head
            head = arr[i]
        }
    }
    return head

};