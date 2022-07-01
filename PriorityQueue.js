class PNode
{
	constructor(priority,value)
	{
		this.priority=priority;
		this.value=value;
		this.previous=undefined;
		this.next=undefined;
	}
};
class PQueue
{
	constructor()
	{
		this.head=undefined;
		this.tail=undefined;
	}
	Enqueue(priority,value)
	{
        let node = new PNode(priority, value)

        //empty queue
		if(!this.head)
		{
			this.head=node;
			this.tail=node;
			return;
		}
        //insertion to front
        if (node.priority < this.head.priority){
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
            return;
        }
        //moving a runner proper priority position
        let runner = this.head
        while(runner.next && runner.next.priority < node.priority){
            runner = runner.next;
        }
        let temp = runner;
        runner.next = node;
        node.previous = runner;
        node.next = temp.next;

        //if there's a next node, have it point back to our new node
        if(node.next){
            node.next.previous = node;
        }
        // if not, our new node is the tail now
        else{
            node = this.tail;
        }


	}
	Dequeue()
	{
		if(!this.head) return;
		let head=this.head.value;
		this.head=this.head.next;
		if(this.head) this.head.previous=undefined;
		return head;
	}
};
let pqueue=new PQueue();
pqueue.Enqueue(4,"bob");
pqueue.Enqueue(2,"ellen");
pqueue.Enqueue(1,"mary");
pqueue.Enqueue(3,"jim");
console.log(pqueue.Dequeue()+pqueue.Dequeue()); /* Expected: maryellen */
console.log(pqueue.Dequeue()+pqueue.Dequeue()); /* Expected: jimbob */