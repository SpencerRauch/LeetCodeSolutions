/* FIFO - First In First Out */

class Node
{
	constructor(value)
	{
		this.value=value;
		this.next=undefined;
		this.previous=undefined;
	}
};

class Queue
{
	constructor()
	{
		this.head=undefined;
		this.tail=undefined;
		this.length=0;
	}

	/* Time:O(1) */
	/* Space:O(1) */
	/* Adds the given value to the back of the queue. */
	Enqueue(value)
	{
		/* Your Code Here */
		let node = new Node(value);
		if (this.IsEmpty()){
			this.head = node;
			this.tail = node;
			this.length = 1;
			return;
		}
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
		this.length++;
	}

	/* Time:O(1) */
	/* Space:O(1) */
	/* Removes and returns the value at the front of the queue. */
	Dequeue()
	{
		/* Your Code Here */
		if (this.IsEmpty()) return;
		let oldHead = this.head;
		this.head = oldHead.next;
		if (this.head){
			this.head.previous = undefined;
		}
		oldHead.next = undefined;
		this.length--;
		return oldHead.value;

	}

	/* Time:O(1) */
	/* Space:O(1) */
	/* Returns but does NOT remove the value at the front of the queue. */
	Front()
	{
		/* Your Code Here */
		return this.head.value;
		
	}
		/******************************************************************************
	* Name: Queue.Compare(otherQueue)
	* Description: Determines whether two queues have the exact same values
	* Arguments:
		* 1: Queue otherQueue
	* Returns: Boolean
	* Time: O(n)
	* Space: O(1)
	******************************************************************************/
	Compare(otherQueue){

		if (this.length != otherQueue.length) return false;
		let thisRunner = this.head;
		let otherRunner = otherQueue.head;
		while(thisRunner){
			if (thisRunner.value != otherRunner.value) return false;
			thisRunner = thisRunner.next;
			otherRunner = otherRunner.next;
		}
		return true;

	}
	/******************************************************************************
	* Name: Queue.IsPalindrome()
	* Description: Determines whether the queue is a palindrome
	* Arguments:
		* None
	* Returns: Boolean
	* Time: O(n)
	* Space: O(1)
	* Examples:
		* 1 2 3 2 1 <- true
		* 5 3 1 8 4 <- false
		* r a c e c a r <- true
		* h a r r y p o t t e r <- false
	******************************************************************************/	
	IsPalindrome(){
		if (this.head == undefined || this.head == this.tail) return true;
		let frontRunner = this.head;
		let backRunner = this.tail;
		while(frontRunner != backRunner && frontRunner.previous != backRunner){
			if (frontRunner.value != backRunner.value) return false;
			frontRunner = frontRunner.next;
			backRunner = backRunner.previous;
		}
		return true;

	}

	/* Time:O(1) */
	/* Space:O(1) */
	/* Returns but does NOT remove the value at the back of the queue. */
	Back()
	{
		/* Your Code Here */
		return this.tail.value;
	}

	/* Time:O(1) */
	/* Space:O(1) */
	/* Returns whether the queue is empty. */
	IsEmpty()
	{
		/* Your Code Here */
		return this.head == undefined;
	}

	/* Time:O(1) <- Yes, this should be constant time ;) */
	/* Space:O(1) */
	/* Returns the number of nodes or items in the queue. */
	Size()
	{
		/* Your Code Here */
		return this.length;
	}

	SumHalves(){

		if (this.head == undefined || this.head == this.tail) return;
		let frontRunner = this.head;
		let backRunner = this.tail;
		let firstHalf = 0;
		let secondHalf = 0;
		while(frontRunner != backRunner && frontRunner.previous != backRunner){
			firstHalf += frontRunner.value;
			secondHalf += backRunner.value;
			frontRunner = frontRunner.next;
			backRunner = backRunner.previous;
		}
		return firstHalf == secondHalf;
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
};

let items=[10,20,30,20,30,20,10];
let items2=[60,70,80,90,100];
let q=new Queue();
let q2=new Queue();
let q3=new Queue();
for(let i=0;i<items.length;i++)
{
	q.Enqueue(items[i]);
	q2.Enqueue(items[i]);
	q3.Enqueue(items2[i]);
}
console.log(q.SumHalves());  	/* Expected: true */
