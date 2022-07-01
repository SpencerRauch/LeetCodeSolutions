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
        //create the new node
        let node = new PNode(priority, value)

        //empty queue, new node is both the head and tail
		if(!this.head)
		{
			this.head=node;
			this.tail=node;
			return;
		}
        //insertion to front if node should be first in priority
        if (node.priority < this.head.priority){
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
            return;
        }
        //moving a runner proper priority position
        let runner = this.head
        while(runner.next && runner.next.priority < node.priority){ //checks if there's a next, then if that next should come before our new node
            runner = runner.next; // if so, move forward
        }

        //insertion in the middle or the end
        node.next = runner.next;
        runner.next = node;
        node.previous = runner;

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
    Log()
	{
		let str="";
		for(var node=this.head;node;node=node.next)
		{
			str+=node.value+"->";
		}
		console.log(str);
	}
    LogBack()
    {
        let str="";
		for(var node=this.tail;node;node=node.previous)
		{
			str+=node.value+"->";
		}
		console.log(str);
    }
};
let pqueue=new PQueue();
pqueue.Enqueue(4,"bob");
pqueue.Enqueue(2,"ellen");
pqueue.Enqueue(1,"mary");
pqueue.Enqueue(3,"jim");
pqueue.Log()
pqueue.LogBack()
console.log(pqueue.Dequeue()+pqueue.Dequeue()); /* Expected: maryellen */
console.log(pqueue.Dequeue()+pqueue.Dequeue()); /* Expected: jimbob */