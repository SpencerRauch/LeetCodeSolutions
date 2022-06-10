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
    Contains(value){
        for(let node=this.head;node;node=node.next){
            if(node.value==value){
                return true;
            }
        }
        return false;
    }

    ContainsRecursive(node,value){
        if(node==undefined){
            return false;
        }
        if(node.value==value){
            return true;
        }
        return this.ContainsRecursive(node.next,value);      
    }

    PopBack()
    {
        let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.next == undefined) return this.PopFront();
        while(runner.next.next){
            runner = runner.next
        }
        let node = runner.next;
        runner.next = undefined;
        return node;
    }
    MaxRecursive(node){
        if(node==undefined){
            return undefined;
        }
        if(node.next==undefined){
            return node.value;
        }
        let max = this.MaxRecursive(node.next);
        if(node.value>max){
            return node.value;
        }
        return max;
    }
    /* Return the second to last node's value in the list */
	SecondToLast()
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.next == undefined) return undefined; //Maybe return this.head.value?

        while(runner.next.next){
            runner = runner.next
        }
        return runner.value;
	}

	/* Remove a node whose value matches the given value */
	/* ( You will need to fix .next pointers too! ) */
	RemoveValue(value)
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.value == value) return this.PopFront();
        while(runner.next){
            if (runner.next.value == value){
                runner.next = runner.next.next;
                return;
            }
            runner = runner.next;
        }
        return undefined;
	}

	Prepend(new_value,search_value)
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        if (runner.value == search_value) {
            this.PushFront(new_value);
            return;
        }
        while(runner.next){
            if (runner.next.value == search_value){
                let node = new Node(new_value);
                node.next = runner.next;
                runner.next = node;
                return;
            }
            runner = runner.next;
        }
        return undefined;
	}

    	/* Add all nodes of the supplied list to this list */
	Concat(other_list)
	{
		let runner = this.head;
        if (runner == undefined) return other_list;
        while(runner.next){
            runner = runner.next
        }
        runner.next = other_list.head;
        return this;
	}

	/* Finds the node with the smallest value and moves it to the front. */
	MinToFront(){
		let runner = this.head; //start at the head
        if (runner == undefined) return; //Empty list
        let min = runner.value; //initialize min to the first value
        let minNode = runner; //initialize minNode to the first node
        while(runner.next){ //loop through the list
            if (runner.next.value < min){ //if the next value is smaller than the current min
                min = runner.next.value; //set the min to the next value
                minNode = runner.next; //set the minNode to the next node
            }
            runner = runner.next; //move to the next node
        }
        if (minNode == this.head){ //already at front
            return; //exit
        }
        runner = this.head; //reset runner to the head
        while(runner.next != minNode){ //loop through the list until the minNode is next
            runner = runner.next
        }
        runner.next = minNode.next; //remove the minNode from the list
        minNode.next = this.head; //add the minNode to the front of the list
        this.head = minNode; //set the head to the minNode

	}

	/* Split our list into two lists, where the second list starts with the node */
	/* that has the given value */
	Split(value)
	{
		let runner = this.head;
        if (runner == undefined) return undefined;
        let newList = new List();
        while(runner.next){
            if (runner.next.value == value){
                newList.head = runner.next;
                runner.next = undefined;
                return newList;
            }
            runner = runner.next;
        }
        return undefined;
	}

	Iterate()
	{
		let str="";
		for(let node=this.head;node;node=node.next)
		{
			str+=node.value+"->";
		}
		console.log(str);
	}
};

/* Creates our list */
let list=new List();
let list2=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([765,234,545,112]);
list2.PushBackN([65,567,433,656]);

list=list.Concat(list2);
list.Iterate();
/*
*/
console.log("Expected:765->234->545->112->65->567->433->656")
list.MinToFront();
list.Iterate();

console.log("Expected:65->765->234->545->112->567->433->656")
let split_list=list.Split(545);
list.Iterate();
split_list.Iterate();
/*
	Expected:65->765->234->
	Expected:545->112->567->433->656
*/
console.log("Expected:65->765->234->")
console.log("Expected:545->112->567->433->656")