class ListNode {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.lookup = new Map();
        this.head = new ListNode(-1,-1)
        this.tail = new ListNode(-1,-1)
        this.head.next = this.tail;
        this.tail.prev = this.head;

    }
    get(key) {
        if (!this.lookup.has(key)){
            return -1
        }
        else{
            let node = this.lookup.get(key)
            this.remove(node)
            this.add(node)
            return node.value;
        }
    }
    put(key, value){
        if(this.lookup.has(key)){
            this.remove(this.lookup.get(key))
        }
        let node = new ListNode(key, value)
        this.add(node)
        this.lookup.set(key,node)
        if (this.lookup.size > this.capacity){
            let oldHead = this.head.next
            this.remove(oldHead)
            this.lookup.delete(oldHead.key)
        }
    }
    add(node){
        let oldTail = this.tail.prev
        oldTail.next = node;
        node.prev = oldTail;
        node.next = this.tail;
        this.tail.prev = node;
    }
    remove(node){
        let before = node.prev
        let after = node.next
        before.next = after;
        after.prev = before;
    }


    
};

