// https://leetcode.com/problems/find-the-winner-of-the-circular-game

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    if (k ===1) return n
    const list = new List()
    for (let i = 1; i <= n; i++){
        if (i != n){
            list.insertAtBack(i)
        } else {
            list.insertAtBack(i, true)
        }
    }
    let start = list.head
    let count = 1;
    while(start !== start.next){
        if (count === k-1){
            start.next = start.next.next
            count = 0
        }
        start = start.next
        count++;
    }
    return start.data
};

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null
    }
    insertAtBack(data, last=false) {
        let newEnd = new ListNode(data);
        if (this.head==null) {
            this.head = newEnd;
            return;
        }
        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newEnd;
        if (last){
            newEnd.next = this.head;
            this.tail = newEnd
        }
    }
}