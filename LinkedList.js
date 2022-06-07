class Node
{
    constructor(value)
    {
        this.next=undefined;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=undefined;
    }

    /* Determine whether the list is empty. */
    IsEmpty()
    {
        return this.head == undefined;
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        let node = new Node(value);
        let runner = this.head
        if (this.head == undefined){
            this.head = node;
        }
        else{
            while(runner.next){
                runner = runner.next
            }
            runner.next = node;
        }

    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        /* Your Code Here */
        for (let val of arr){
            this.PushBack(val)
        }
    }
    PushFront(value)
	{
		let node = new Node(value)
        node.next = this.head;
        this.head = node;
	}

	/* Remove and return the first node in the list, */
	/* but also set the head to be the next node */
	PopFront()
	{
        node = this.head
        if (this.head !== undefined){
            this.head = this.head.next
        } 
        return node;
            
	}

	/* Calculate and return the average of all the node values in the list. */
	Average()
	{
		let sum = 0;
        let count = 0;
        let runner = this.head;
        if (!runner) return 0;
        while(runner){
            count++
            sum += runner.value
            runner = runner.next
        }
        return (sum / count);
	}

    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }
};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=[111,222,333,444,555];

/* Create our list */
let list=new List();
console.log(list.IsEmpty());
/* Insert nodes into the list: */
list.PushBack(test_data1);
list.PushBack(test_data2);
list.PushBack(test_data3);
/* Insert array of nodes into the list: */
list.PushBackN(test_data4);
/* Iterate our list, so we can see our node values */
list.PushFront(78)
list.PopFront()
list.Iterate(value=>console.log(value));

let averageTest = new List();
averageTest.PushFront(10)
averageTest.PushFront(20)
averageTest.PushFront(30)
console.log(averageTest.Average())

/* Expected output: */
/*
    123
    234
    345
    111
    222
    333
    444
    555
*/